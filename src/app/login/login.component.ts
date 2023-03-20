import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.loginForm = this.formBuilder.group({
      email: [ '', [Validators.required, Validators.email]],
      password: [ '', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit(): void{

  }

  nombre = 'Valentina Alarcón'
//métodos para el formulario//
//toma el dato de clave//
  get Password(){
    return this.loginForm.get('password');
  }
//toma el dato de email//
  get Mail(){
    return this.loginForm.get('email');
  }
//métodos de validación de clave//
get PasswordValid(){
  return this.Password?.touched && !this.Password?.invalid;
}

//métodos de validación de email//
  get MailValid(){
    return this.Mail?.touched && !this.Mail?.invalid;
  }

  //para que se envie todo el formulario//
  onEnviar(event: Event){
    event.preventDefault();

    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
      //llamamos al servicio para enviar datos al servidor//
      alert("No hay una cuenta asociada a tu nombre");

      if(this.loginForm.valid){
        this.loginForm.markAsTouched();
      }
  }
}
