import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    nombreUsuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }
  submit() {
    const { nombreUsuario, password } = this.form.value;

    this.authService.authenticateUser({ nombreUsuario, password }).subscribe((response) => {
      console.log(response)
      if (response.token) {
        localStorage.setItem("token", JSON.stringify(response.token))
        localStorage.setItem("nombreUsuario", JSON.stringify(response.nombreUsuario))
        // Usuario autenticado, redirigir a la página deseada (por ejemplo, 'home')
        //this.router.navigate(['/home']);
        location.href="/auth/home"
      } else {
        // Mostrar mensaje de error o tomar la acción apropiada
        console.log('Autenticación fallida. Realiza alguna acción aquí...');
      }
    });
  }
}