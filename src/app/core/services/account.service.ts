import {ApiResult} from "./../models/common/ApiResult";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "./../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AdminLogin} from "src/app/core/models/admin/authenticate/AdminLogin";
import {Injectable} from "@angular/core";
import {map, observeOn} from "rxjs/operators";
import {AdminLoginRespond} from "../models/admin/authenticate/AdminLoginRespond";
import {URL_String} from "../utils/URL_String";

@Injectable({
	providedIn: "root"
})
export class AccountService {
	private userSubject: BehaviorSubject<ApiResult<AdminLoginRespond>>;
	public user: Observable<ApiResult<AdminLoginRespond>>;
	constructor(private http: HttpClient) {
		this.userSubject = new BehaviorSubject<ApiResult<AdminLoginRespond>>(JSON.parse(localStorage.getItem("user")));
		this.user = this.userSubject.asObservable();
	}

	login(adminlogin: AdminLogin) {
		var userName = adminlogin.userName;
		var passWord = adminlogin.passWord;
		// const headers = {
		// 	"Access-Control-Allow-Headers":
		// 		"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
		// 	"Access-Control-Allow-Origin": "*",
		// 	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
		// 	"Access-Control-Allow-Credentials": "true" /*'My-Custom-Header': 'foobar'*/
		// };
		return this.http
			.post<ApiResult<AdminLoginRespond>>(
				"https://localhost:5005/api/Admin/login" /*+this.url_string.LOGIN_ADMIN_POST*/,
				{
					userName: /*"sonhoangPianistTestAuthen12",*/ adminlogin.userName,
					passWord:/* "230998_Hoangson", */adminlogin.passWord,
					remember: adminlogin.remember,
					urlReturn: adminlogin.urlReturn
				},
				{
					responseType:'json'

				}
			)
			.pipe(
				map((user) => {
					localStorage.setItem("user", JSON.stringify(user));
				
					this.userSubject.next(user);
					return user;
				})
			);
	}
}
