import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { InputTextareaModule } from 'primeng/inputtextarea';



@NgModule({

  exports:[
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    InputTextareaModule
  ]
})

export class MaterialModule {}
