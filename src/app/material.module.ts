import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';



@NgModule({

  exports:[
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})

export class MaterialModule {}
