import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";

export function passWordValidator(
	control: AbstractControl
): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
	const count: number = +control.value;
    console.log("passWordValidator: " + count);
    if (isNaN(count)) {
        return of({ 'gte': true, 'requiredValue': 10 })
      }      
   
      if (count<= 10) {
        return of({ 'gte': true, 'requiredValue': 10 })
      } 
   
      return of(null)
}
