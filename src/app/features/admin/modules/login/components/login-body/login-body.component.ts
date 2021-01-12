import {AccountService} from "./../../../../../../core/services/account.service";
import {Component, OnInit} from "@angular/core";

import {AdminLogin} from "src/app/core/models/admin/authenticate/AdminLogin";
import {Validators, FormBuilder} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
@Component({
	selector: "app-login-body",
	templateUrl: "./login-body.component.html",
	styleUrls: ["./login-body.component.sass"]
})
export class LoginBodyComponent implements OnInit {
	rememberChecked = false;

	loading: boolean = false;
	submitted: boolean = false;
	returnUrl: string;
	adminLogin: AdminLogin = new AdminLogin();
	//adminLoginForm: FormGroup;
	adminLoginForm = this.formBuilder.group({
		userNameFormControl: ["", [Validators.required, Validators.minLength(3), Validators.email]],
		passWordFormControl: ["", [Validators.required, Validators.minLength(8)], Validators.maxLength(20)],
		rememberMeFormControl: [""]
	});
	constructor(
		private accountService: AccountService,
		private formBuilder: FormBuilder,
		//private route: ActivatedRoute,
		private router: Router
	) {
		return;
	}
	ngOnInit(): void {
		// let testArray = [1, 2, 3, 4, 4];

		// let newArr = testArray.forEach((x, y) => {
		// 	x > 2;
		// 	//	delete testArray[y]
		// 	//console.log("arr" + (x > 2));
		// });
		// var newArrFilter= testArray.filter(x=>x>2);
		// console.log(newArrFilter);
		// console.log(testArray);

		console.log("return URL: " + this.router.routerState.snapshot.url);

		return;
	}

	onSubmit() {
		this.submitted = true;
		if (this.adminLoginForm.invalid) {
			return;
		} else {
			this.loading = true;
			this.adminLogin.userName = this.adminLoginForm.get("userNameFormControl").value;
			this.adminLogin.passWord = this.adminLoginForm.get("passWordFormControl").value;
			this.adminLogin.remember = this.adminLoginForm.get("rememberMeFormControl").value;
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
