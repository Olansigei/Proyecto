import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPageRoutingModule } from './catalogo-routing.module';

import { CatalogoPage } from './catalogo.page';
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
    declarations: [CatalogoPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CatalogoPageRoutingModule,
        SharedModule
    ]
})
export class CatalogoPageModule {}
