import {AccountService} from "./../../../../../../core/services/account.service";
import {Component, OnInit} from "@angular/core";
import {AdminLogin} from "src/app/core/models/admin/authenticate/AdminLogin";
import {Validators, FormBuilder, FormGroup, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
@Component({
	selector: "app-login-body",
	templateUrl: "./login-body.component.html",
	styleUrls: ["./login-body.component.sass"]
})
export class LoginBodyComponent implements OnInit {
	toggleName: string;
	rememberMeValue: boolean
	loading: boolean = false;
	submitted: boolean = false;
	returnUrl: string;
	adminLogin: AdminLogin = new AdminLogin();
	//adminLoginForm: FormGroup;
	adminLoginForm = this.formBuilder.group({
		userNameFormControl: ["", [Validators.required, Validators.minLength(3), Validators.email]],
		passWordFormControl: ["", [Validators .required, Validators.minLength(1), Validators.maxLength(20)]],
		rememberMeFormControl: [""]
	});
	// adminLoginForm = new FormGroup({
	// 	userNameFormControl: new FormControl("", [asyncV]),
	// 	passWordFormControl: new FormControl(''),
	//   });
	constructor(
		private accountService: AccountService,
		private formBuilder: FormBuilder,
		private router: Router
	) {
		return;
	}
	ngOnInit(): void {
		this.toggleName="Remember";
		return;
	}

	onChangeToggle(toggleChange: boolean) {
		this.rememberMeValue= toggleChange;
	
	}
	onSubmit() {
		this.submitted = true;
		if (this.adminLoginForm.invalid) {
			return;
		} else {
			this.loading = true;
			this.adminLogin.userName = this.adminLoginForm.get("userNameFormControl").value;
			this.adminLogin.passWord = this.adminLoginForm.get("passWordFormControl").value;
			this.adminLogin.remember = this.rememberMeValue;
			this.adminLogin.urlReturn = "";
			console.log(this.adminLogin);
			this.accountService
				.login(this.adminLogin)
				.pipe(first())
				.subscribe(
					(data) => {
						console.log(this.router.navigate(["/admin/index"]));
						console.log(data);
					},
					(error) => {
						console.log(error);
					}
				);
		}
	}
}
