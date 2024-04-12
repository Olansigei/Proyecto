import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombreUsuario=''

  constructor(
    private router: Router,
    private toastController: ToastController) {}

    async cerrarSesion() {
      localStorage.removeItem("token")
      localStorage.removeItem("nombreUsuario")
    
      const toast = await this.toastController.create({
        message: 'Sesión cerrada correctamente',
        duration: 2000, 
        position: 'bottom' 
      });
      toast.present();
    
      location.href="/auth"
    }
  ngOnInit() {
    this.nombreUsuario=JSON.parse(localStorage.getItem("nombreUsuario"))
  }

}
