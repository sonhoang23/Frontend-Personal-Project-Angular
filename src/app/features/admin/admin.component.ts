import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  isTrue:boolean= false;
  ChangeTheme(isTrue: boolean) {
   this.isTrue=isTrue;
  }
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
