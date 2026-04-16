import { Component } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { minLength } from '@angular/forms/signals';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule], // IMPORTAR REACTIVEFORMSMODULE
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  // nombre = new FormControl('Valor por defecto', {});
  // apellido = new FormControl();
  // email = new FormControl();
  // password = new FormControl();
  // mostrar() {
  //   console.log(this.nombre.value, this.apellido.value, this.email.value, this.password.value);
  // }

  formulario = new FormGroup({
    nombre: new FormControl('', {
      validators: [Validators.minLength(3), Validators.maxLength(15), Validators.required],
    }),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    telefono: new FormControl('', [this.validacionPropia]),
  });

  algo = 'algo';

  get Algo() {
    return this.algo;
  }

  validacionPropia(control: AbstractControl) {
    if (typeof control.value === 'string' && control.value.includes('+54')) {
      return null;
    } else {
      return {
        mensaje: 'No tiene código de área',
      };
    }
  }

  mostrar() {
    if (!this.formulario.valid) {
      console.log('NO VALIDO');
      console.log(this.formulario.errors);
      console.log(this.formulario.getError('maxlength'));
      console.log(this.formulario.hasError('maxlength'));
      console.log(this.formulario.get('nombre'));

      console.log(this.formulario.get('nombre')?.touched);

      this.formulario.patchValue({ nombre: 'ASdasaddad' });
    } else {
      console.log(this.formulario.value);
    }
  }
}

/*
  (value) => {
    return value.length >= 3
  }
  
*/

// condicion ? valor_true : valor_false

// algo === "algo" ? "Salio bien" : "salio mal"

// formulario.get("nombre")?.errores ? 'error' : ''
