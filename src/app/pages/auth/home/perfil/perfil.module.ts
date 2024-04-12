import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
    declarations: [PerfilPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PerfilPageRoutingModule,
        SharedModule
    ]
})
export class PerfilPageModule {}
