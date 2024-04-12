import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService) {}

  
  ngOnInit() {
  }


  registrar() {
    const { email, password, name } = this.form.value;

    this.authService.registerUser({ email, password, name }).subscribe((mensaje) => {
      console.log("mensaje", mensaje)
      // if (registered) {
      //   // Usuario registrado, puedes mostrar un mensaje de éxito o redirigir a la página de autenticación
      //   console.log('Registro exitoso. Redirigiendo a la página de inicio de sesión...');
      // } else {
      //   // Mostrar mensaje de error o tomar la acción apropiada
      //   console.log('Registro fallido. Realiza alguna acción aquí...');
      // }
      
    });
  }
}