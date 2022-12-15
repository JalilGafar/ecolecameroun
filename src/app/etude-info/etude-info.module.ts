import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudeInfoRoutingModule } from './etude-info-routing.module';
import { TopVideoComponent } from './components/top-video/top-video.component';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { CatalogeOffreComponent } from './components/cataloge-offre/cataloge-offre.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TopVideoComponent,
    TopNewsComponent,
    CatalogeOffreComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    EtudeInfoRoutingModule,
    SharedModule
  ]
})
export class EtudeInfoModule { }
