import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from "../../../shared/shared.module";
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [HomePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        SharedModule,
    ]
})
export class HomePageModule {}
