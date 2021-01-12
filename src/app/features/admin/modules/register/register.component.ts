import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminLRegister } from 'src/app/core/models/admin/authenticate/AdminRegister';
import { ConfigService } from 'src/app/core/services/config.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  adminRegsiter: AdminLRegister = new AdminLRegister();
  registerForm = new FormGroup({
    emailFormControl: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    passWord: new FormControl(''),
    passWordAgain: new FormControl(''),
  });

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.GetProfile().subscribe((data) => {
      console.log(data);
    });
  }
  onSubmit() {
    console.warn(this.registerForm.value);
  }
}
