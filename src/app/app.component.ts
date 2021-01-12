import { ThemeService } from './core/services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
isDarkTheme:boolean=false;
  constructor(private _themeService: ThemeService){

  }
  ngOnInit() {
    this._themeService.themeControl$.subscribe((message) => {
    
    });
    var observer = {
      next: (val) => this.isDarkTheme = val,//this.ChangeTheme(val),
    };
    this._themeService.themeControl$.subscribe(observer);
  }

}
