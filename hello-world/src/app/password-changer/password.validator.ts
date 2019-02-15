import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static correctPassword(control: AbstractControl): ValidationErrors | null {
    return new Promise( (resolve, reject) => {
      if (control.value !== '1234') {
        resolve({
          WrongPassowrd: true,
        });
      }
      resolve(null);
    });
  }

  static passwordsMatch(control: AbstractControl): ValidationErrors | null {
    if (control.value !== '1234') {
      return {
        passwordMissmatch: true,
      };
    }
    return null;
 }
}

