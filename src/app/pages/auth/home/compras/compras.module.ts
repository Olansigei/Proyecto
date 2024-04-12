import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprasPageRoutingModule } from './compras-routing.module';

import { ComprasPage } from './compras.page';
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
    declarations: [ComprasPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComprasPageRoutingModule,
        SharedModule,
    ]
})
export class ComprasPageModule {}
