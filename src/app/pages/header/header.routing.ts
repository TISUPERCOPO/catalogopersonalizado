import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header.component";

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class HeaderRouting {}
