import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavComponent } from "./nav.component";

const routes: Routes = [
  {
    path: 'nav',
    component: NavComponent
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

export class NavRouting {}
