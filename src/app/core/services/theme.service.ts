import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ThemeService {
  constructor() {}
  private themeControlSource = new Subject<boolean>();

  themeControl$ = this.themeControlSource.asObservable(); //$ la mot observeble
  SwitchTheme(isTrue: boolean) {
  this.themeControlSource.next(isTrue);

    /**test obervable */

    // const obThemeControl= new Observable(observer=>{
    //   observer.next(isTrue);
    // });
  }
}
