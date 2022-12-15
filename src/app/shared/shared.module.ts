import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHeroComponent } from './components/header-hero/header-hero.component';
import { PlayerComponent } from './components/player/player.component';



@NgModule({
  declarations: [
    HeaderHeroComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderHeroComponent,
    PlayerComponent
  ]
})
export class SharedModule { }
