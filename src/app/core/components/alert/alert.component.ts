import {Router} from "@angular/router";
import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {AlertService} from "../../services/alert.service";
import {Alert} from "../../models/Alert";

@Component({
	selector: "app-alert",
	templateUrl: "./alert.component.html",
	styleUrls: ["./alert.component.sass"]
})
export class AlertComponent implements OnInit, OnDestroy {
	@Input() id = "default-alter";
	@Input() fade = true;

	alerts: Alert[] = []; //tạo một mảng Alert
	/*A Subscription is an object that represents a disposable resource,
  usually the execution of an Observable.
  */
	alertSubscription: Subscription;
	routeSubscription: Subscription;

	constructor(private route: Router, private _alertService: AlertService) {
		return;
	}
	ngOnInit() {
		this.alertSubscription = this._alertService.onAlert(this.id).subscribe((alert) => {
			//clear when an empty alter is received
			if (!alert.message) {
				//filter create new array
				this.alerts = this.alerts.filter((x) => x.keepAfterRouteChange); //returns a value that coerces to true
				//foreach return undefine
				this.alerts.forEach((x) => delete x.keepAfterRouteChange); //delete operator, delete value to undefine
			}
			this.alerts.push(alert);
			if (alert.autoClose) {
				setTimeout(() => this.RemoveAlert(alert), 3000);
			}
		});
	}
	ngOnDestroy(): void {
		throw new Error("Method not implemented.");
	}

	RemoveAlert(alert: Alert) {
		if (!this.alerts.includes(alert)) return;
		if (this.fade) {
			// fade out alert
			this.alerts.find((x) => x === alert).fade = true;
			setTimeout(() => {
				this.alerts = this.alerts.filter((x) => x !== alert);
			}, 250);
		}
	}
}
