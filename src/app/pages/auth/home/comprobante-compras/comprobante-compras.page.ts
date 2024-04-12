import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-comprobante-compras',
  templateUrl: './comprobante-compras.page.html',
  styleUrls: ['./comprobante-compras.page.scss'],
})
export class ComprobanteComprasPage implements OnInit {
  productosComprados: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.productosComprados = this.route.snapshot.paramMap.get('productosComprados');
  }

}
