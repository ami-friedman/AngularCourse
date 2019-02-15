import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static correctPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise( (resolve) => {
      if (control.value !== '1234') {
        resolve({
          WrongPassowrd: true,
        });
      } else {
        resolve(null);
      }
    });
  }

  static passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('new');
    const confirmPassword = control.get('confirm');
    if (newPassword.value !== confirmPassword.value) {
      return {
        passwordMissmatch: true,
      };
    }
    return null;
 }
}

