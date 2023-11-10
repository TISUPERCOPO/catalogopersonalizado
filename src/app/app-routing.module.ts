import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/header/header.module').then(h => h.HeaderModule)
  },
  {
    path: 'nav',
    loadChildren: () => import('./pages/nav/nav.module').then(n => n.NavModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
