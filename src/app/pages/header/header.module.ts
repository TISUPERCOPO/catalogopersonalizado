import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { MaterialModule } from "src/app/material.module";
import { HeaderRouting } from "./header.routing";




@NgModule({
declarations: [
  HeaderComponent
],
imports: [
  MaterialModule,
  HeaderRouting
]
})

export class HeaderModule {}
