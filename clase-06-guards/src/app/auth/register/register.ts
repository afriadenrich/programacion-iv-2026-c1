import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { IRegistro } from '../auth.interfaces';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  // injectar el servico
  authService = inject(AuthService);

  formulario = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    nombre: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  accion() {
    if (this.formulario.invalid) return;

    this.formulario.value; // {email: "", nombre: "", password: ""}

    this.authService.registrar(this.formulario.value as IRegistro);
  }
  // async validacionAsincronica(control: AbstractControl) {
  //   await fetch()

  //   return null;

  //   return { error: "error"};
  // }
}
