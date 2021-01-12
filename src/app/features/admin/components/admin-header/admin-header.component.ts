import { ThemeService } from './../../../../core/services/theme.service';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { AdminProfile } from 'src/app/core/models/admin/authenticate/AdminProfile';
import { AdminHeaderService } from './services/admin-header.service';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {
  constructor(private _headerService: AdminHeaderService, private _themeService: ThemeService) {}
  adminProfile: AdminProfile= new AdminProfile();
  @Output() ChangeTheme = new EventEmitter<Boolean>();
  isTrue: boolean = false;
  ChangeThemeFromHeader() {
    this.isTrue = !this.isTrue;
    this.ChangeTheme.emit(this.isTrue);
    /*SERVICE*/ 
    this._themeService.SwitchTheme(this.isTrue);
  }
  

  ngOnInit(): void {
    this._headerService.GetProfile().subscribe((data) => {
      this.adminProfile= data;
    });
  }
}
