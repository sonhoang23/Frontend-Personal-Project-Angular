import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {MatSlideToggle, MatSlideToggleChange} from "@angular/material";

@Component({
	selector: "app-mat-slide-toggle",
	templateUrl: "./mat-slide-toggle.component.html",
	styleUrls: ["./mat-slide-toggle.component.sass"]
})
export class MatSlideToggleComponent implements OnInit {
	@Input() toggleValue: string;
	@Output() change = new EventEmitter<MatSlideToggleChange>();
	@Output() toggleChange = new EventEmitter<void>();
	onChange(ob: MatSlideToggleChange) {
    console.log(ob.checked);
    let matSlideToggle: MatSlideToggle = ob.source;	
    console.log(matSlideToggle.color);
    console.log(matSlideToggle.required);
  } 
	constructor() {}

	ngOnInit() {}
}
