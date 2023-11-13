import { NgModule } from "@angular/core";
import { PageHomeComponent } from "./page-home.component";
import { MaterialModule } from "src/app/material.module";
import { PageHomeRouting } from "./page-home.routing";






@NgModule({
declarations: [
],
imports: [
MaterialModule,
PageHomeRouting
]
})

export class PageHomeModule {}
