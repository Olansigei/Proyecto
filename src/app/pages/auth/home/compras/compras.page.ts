import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CarritoService } from 'src/app/services/carrito.service';
import { PdfGeneratorService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage {
  verComprobante() {
    // Implement the logic for navigating to the comprobante-compras route
    this.navCtrl.navigateForward('./comprobante-compras', {
      state: { productosComprados: this.productosEnCarrito },
    });
  }
  
  productosEnCarrito: any[] = [];
  totalCarrito: number = 0;
  compraRealizada: boolean = false;
  productosComprados: any;
  route: any;
  cdr: any;


  constructor(private carritoService: CarritoService,
              private navCtrl: NavController,
              private toastController: ToastController,
              private readonly service: PdfGeneratorService) {}

  ngOnInit(){
    this.actualizarCarrito();

  }

  eliminarDelCarrito(producto) {
    this.carritoService.eliminarDelCarrito(producto);
    this.actualizarCarrito();
  }

  calcularTotal(): number {
    return this.carritoService.obtenerTotalCarrito();
  }
  

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.actualizarCarrito();
  }

  realizarCompra() {
    this.carritoService.limpiarCarrito();
    this.totalCarrito = 0;

    this.presentToast('Compra realizada');

    this.navCtrl.navigateForward('./comprobante-compras', {
      state: { productosComprados: this.productosEnCarrito },
    });
    

    this.actualizarCarrito();
  }

  actualizarCarrito() {
    this.productosEnCarrito = this.carritoService.obtenerProductosEnCarrito();
    this.totalCarrito = this.carritoService.obtenerTotalCarrito();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });

    toast.present();
this.createTicket()
  }

  async eliminarTodosDelCarrito() {
    this.carritoService.eliminarTodosDelCarrito();
    this.actualizarCarrito();
  
    const toast = await this.toastController.create({
      message: 'Productos eliminados',
      duration: 2000,
      position: 'bottom',
      color: 'danger'
    });
  
    toast.present();
  }

  
  createTicket() {     
    this.service.generatePDF('prodyus', this.calcularTotal() );
    }
}