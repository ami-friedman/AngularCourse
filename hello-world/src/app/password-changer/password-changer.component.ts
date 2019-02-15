import { PasswordValidator } from './password.validator';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'password-changer',
  templateUrl: './password-changer.component.html',
  styleUrls: ['./password-changer.component.css']
})
export class PasswordChangerComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      old: ['', Validators.required, PasswordValidator.correctPassword ],
      new: ['', Validators.required],
      confirm: ['', Validators.required],
    });
    console.log(this.form);
   }

   get old() { return this.form.get('old') as FormControl; }

   get new() { return this.form.get('new') as FormControl; }

   get confirm() { return this.form.get('confirm') as FormControl; }

}
