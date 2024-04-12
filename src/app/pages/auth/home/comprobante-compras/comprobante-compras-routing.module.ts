import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprobanteComprasPage } from './comprobante-compras.page';

const routes: Routes = [
  {
    path: '',
    component: ComprobanteComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprobanteComprasPageRoutingModule {}
