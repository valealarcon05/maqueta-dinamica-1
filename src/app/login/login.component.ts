import { Component } from '@angular/core';
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
  ngOnInit(){}
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
    return this.Password?Touch && !this.Password.valid:;
  }
//métodos de validación de email//
  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onEnviar(event: Event){
    event.preventDefault;

    if(this.formBuilder.valid){
      //llamamos al servicio para enviar datos al servidor//
      alert("Todo salió bien ¡Enviar formulario!")
    }else{
      this.formBuilder.markAllAsTouched();
    }
  }
  }
