import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'etude-info', loadChildren: () => import('./etude-info/etude-info.module').then(m => m.EtudeInfoModule) },
  { path: '**', redirectTo: 'etude-info'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
