import { PasswordValidator } from './password.validator';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'password-changer',
  templateUrl: './password-changer.component.html',
  styleUrls: ['./password-changer.component.css']
})
export class PasswordChangerComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      old: ['', Validators.required, PasswordValidator.correctPassword ],
      new: ['', Validators.required],
      confirm: ['', Validators.required],
    }, {
      validators: PasswordValidator.passwordsMatch
    });
    console.log(this.form);
   }

   get old() { return this.form.get('old') as FormControl; }

   get new() { return this.form.get('new') as FormControl; }

   get confirm() { return this.form.get('confirm') as FormControl; }

}
