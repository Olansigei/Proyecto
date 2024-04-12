import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprobanteComprasPageRoutingModule } from './comprobante-compras-routing.module';

import { ComprobanteComprasPage } from './comprobante-compras.page';
import { SharedModule } from "../../../../shared/shared.module";
import { Routes } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      component: ComprobanteComprasPage
    }
  ];
  

@NgModule({
    declarations: [ComprobanteComprasPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComprobanteComprasPageRoutingModule,
        SharedModule
    ]
})
export class ComprobanteComprasPageModule {}
