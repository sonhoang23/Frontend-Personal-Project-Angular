import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {MatSlideToggle, MatSlideToggleChange} from "@angular/material";

@Component({
	selector: "app-mat-slide-toggle",
	templateUrl: "./mat-slide-toggle.component.html",
	styleUrls: ["./mat-slide-toggle.component.sass"]
})
export class MatSlideToggleComponent implements OnInit {
	@Input() toggleName: string;
	@Output() toggleChange = new EventEmitter<boolean>();
	onChangeToggle(ob: MatSlideToggleChange) {
		this.toggleChange.emit(ob.checked);
	}
	constructor() {}

	ngOnInit() {}
}
