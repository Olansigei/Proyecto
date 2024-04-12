import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { DetallesComprasPage } from '../compras/detalles-compras/detalles-compras.page';
import { CarritoService } from 'src/app/services/carrito.service';
import { BehaviorSubject } from 'rxjs';
import { ICatalogo } from 'src/app/interfaces/catalogo.interface';
import { CatalogoService } from 'src/app/services/catalogo.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  productos2= new BehaviorSubject<ICatalogo[]>([]);
  productos = [
    {
      nombre: 'Vaporeon GX',
      imagen: 'https://images-na.ssl-images-amazon.com/images/I/71rOmAWzhCL._AC_SL1246_.jpg',
      precio: 2360,
      descripcion: 'Descripción detallada del producto Pikachu coleccionable.',
      cantidad: 1 // Puedes ajustar esto según tus necesidades

    },
    {
      nombre: 'Blaziken',
      imagen: 'https://images-na.ssl-images-amazon.com/images/I/81WHC9y10ML._AC_SL1500_.jpg',
      precio: 1000,
      descripcion: 'Una figura coleccionable de Blaziken edición especial.',
      cantidad: 1 // Puedes ajustar esto según tus necesidades


    },
    {
      nombre: 'Pikachu Coleccionable',
      imagen: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/88fdf9f2-7a65-46a0-b682-04068f072be8.219b9e75eb71075ee29ffa8e125dbbee.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      precio: 2500,
      descripcion: 'La mejor figura coleccionable de Pikachu.',
      cantidad: 1 // Puedes ajustar esto según tus necesidades


    },
    {
      nombre: 'Bulbasaur',
      imagen: 'https://images-na.ssl-images-amazon.com/images/I/610fHfqbeXL._SL1000_.jpg',
      precio: 2900,
      descripcion: 'El Pokemon de los memes en figura coleccionable.',
      cantidad: 1 // Puedes ajustar esto según tus necesidades


    },
    {
      nombre: 'Charizard GX',
      imagen: 'https://images-na.ssl-images-amazon.com/images/I/71mvWo6R8yL._AC_SX679_.jpg',
      precio: 1600,
      descripcion: 'Charizard, uno de los mejores pokemones de Fuego, increíble para coleccionar.',
      cantidad: 1 // Puedes ajustar esto según tus necesidades


    },
    {
      nombre: 'Machamp',
      imagen: 'https://images-na.ssl-images-amazon.com/images/I/71kZ8NCd13L._AC_SX522_.jpg',
      precio: 1200,
      descripcion: 'El Pokemon que más musculoso se ve listo para pertenecer a tu colección de Pokemon.',
      cantidad: 1 // Puedes ajustar esto según tus necesidades


    },
    {
      nombre: 'Flareon GX',
      imagen: 'https://m.media-amazon.com/images/I/71IXnYQvVPL._AC_SL1227_.jpg',
      precio: 3500,
      descripcion: 'La evolución de fuego más versátil para tu colección.',
      cantidad: 1 // Puedes ajustar esto según tus necesidades


    },
    {
      nombre: 'Marshadow GX',
      imagen: 'http://dungeonmarvels.com/41921-medium_default/pokemon-jcc-caja-metalica-otono-2017-marshadow-gx.jpg',
      precio: 2400,
      descripcion: 'Marshadow.',
      cantidad: 1 // Puedes ajustar esto según tus necesidades


    }
    // Agrega más productos según sea necesario
  ];

  ngOnInit(): void {
    this.getProducts()
  }

  constructor(
    private modalController: ModalController,
    private carritoService: CarritoService,
    private toastController: ToastController,
    private navCtrl: NavController,
    private catalogoService: CatalogoService) {}

    getProducts(){
      this.catalogoService.getProducts().subscribe((response:ICatalogo[])=>{
        this.productos= response
      })
    }

  async verDetalles(producto) {
    const modal = await this.modalController.create({
      component: DetallesComprasPage,
      componentProps: {
        producto: producto,
      },
 });

    return await modal.present();
  }

  async agregarAlCarrito(producto) {
    console.log('Agregando al carrito:', producto);
    this.carritoService.agregarAlCarrito(producto);
    const toast = await this.toastController.create({
      message: 'Producto agregado al carrito',
      duration: 2000, // Duración en milisegundos
      position: 'bottom', // Posición del mensaje flotante
      color: 'success', // Color del mensaje (puedes usar 'primary', 'danger', 'warning', etc.)
      buttons: [
        {
          text: 'Ver carrito',
          handler: () => {
            // Navegar a la página de compras
            this.navCtrl.navigateForward('auth/home/compras');
          }
        }
      ]
    });
  
    toast.present();
    this.carritoService.calcularTotalCarrito();

  }
  
}