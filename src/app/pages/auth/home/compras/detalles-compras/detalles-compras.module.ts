import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesComprasPageRoutingModule } from './detalles-compras-routing.module';

import { DetallesComprasPage } from './detalles-compras.page';
import { SharedModule } from "../../../../../shared/shared.module";

@NgModule({
    declarations: [DetallesComprasPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetallesComprasPageRoutingModule,
        SharedModule
    ]
})
export class DetallesComprasPageModule {}
