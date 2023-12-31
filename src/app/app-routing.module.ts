import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/page-home/page-home.module').then(h => h.PageHomeModule)
  },
  {
    path: 'nav',
    loadChildren: () => import('./pages/nav/nav.module').then(n => n.NavModule)
  },
  {
    path: 'catalogos',
    loadChildren: () => import('./pages/catalogo/catalogo.module').then(c => c.CatalogoModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import('./pages/contato/contato.module').then(c => c.ContatoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
