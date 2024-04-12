import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesComprasPage } from './detalles-compras.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesComprasPageRoutingModule {}
