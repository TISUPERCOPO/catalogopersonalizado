import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderModule } from './pages/header/header.module';
import { NavModule } from './pages/nav/nav.module';
import { NavComponent } from './pages/nav/nav.component';
import { HeaderComponent } from './pages/header/header.component';
import { PageHomeComponent } from './pages/home/page-home/page-home.component';
import { PageHomeModule } from './pages/home/page-home/page-home.module';
import { CatalogoModule } from './pages/catalogo/catalogo.module';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ContatoComponent } from './pages/contato/contato.component';

import { CarouselModule } from 'primeng/carousel';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    PageHomeComponent ,
    CatalogoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderModule,
    NavModule,
    PageHomeModule,
    CatalogoModule,
    CarouselModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt');
    translate.use('pt');
  }
}
