import { NgModule } from "@angular/core";
import { NavComponent } from "./nav.component";
import { MaterialModule } from "src/app/material.module";
import { NavRouting } from "./nav.routing";



@NgModule({
  declarations:[ ],
  imports:[
    MaterialModule,
    NavRouting
  ]
})

export class NavModule {}
