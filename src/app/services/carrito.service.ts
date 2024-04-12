import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor() {
    console.log('Servicio de carrito inicializado.');
  }
  productosEnCarrito: any[] = [];
  totalCarrito: number = 0;

  agregarAlCarrito(producto: any, cantidad: number = 1) {
    const productoEnCarrito = { ...producto, cantidad };
    this.productosEnCarrito.push(productoEnCarrito);
    this.calcularTotalCarrito();
  }
  
  eliminarDelCarrito(producto: any) {
    const index = this.productosEnCarrito.indexOf(producto);
    if (index !== -1) {
      this.productosEnCarrito.splice(index, 1);
      this.calcularTotalCarrito();
    }
  }

  calcularTotalCarrito() {
    this.totalCarrito = this.productosEnCarrito.reduce(
      (total, producto) => total + (producto.precio * producto.cantidad || 0),
      0
    );
  }

  obtenerProductosEnCarrito() {
    return this.productosEnCarrito;
  }
 
  obtenerTotalCarrito() {
    return this.totalCarrito;
  }
 
  eliminarTodosDelCarrito() {
    this.productosEnCarrito = [];
    this.calcularTotalCarrito();
  }

  vaciarCarrito() {
    this.productosEnCarrito = [];
    this.calcularTotalCarrito();
  }

  limpiarCarrito() {
    this.productosEnCarrito = [];
    this.totalCarrito = 0;
  }
}
