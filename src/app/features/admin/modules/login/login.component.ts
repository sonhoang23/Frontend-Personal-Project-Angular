import { Component, OnInit } from '@angular/core';
import { AdminLogin } from 'src/app/core/models/AdminLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
  ],
})
export class LoginComponent implements OnInit {
  adminLogin: AdminLogin = new AdminLogin();
  //adminLogin: AdminLogin;
  name: String = new String();
  vehicles: string[] = ['toyota', 'nisan', 'honda', 'ford', 'mustang'];
  selectedCar: String = new String();
  constructor() {}
  ngOnInit(): void {}
  onSubmit() {
    // console.log(typeof(this.name));
    console.log(
      'userName: ' +
        this.adminLogin.userName +
        ' and passWord: ' +
        this.adminLogin.passWord
    );
    console.log('selected car:' + this.selectedCar);
  }
  selectVehicle(event) {
    this.selectedCar = event.target.value;
  }
}
