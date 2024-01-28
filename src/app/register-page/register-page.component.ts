import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registerForm : FormGroup;

  constructor(private formbuilder : FormBuilder) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#]).+")
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.pattern("[^' ']+")
      ])
    });
  }

  handleForm() {

  }
}
