import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formulario = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    nombre: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  accion() {}
  // async validacionAsincronica(control: AbstractControl) {
  //   await fetch()

  //   return null;

  //   return { error: "error"};
  // }
}
