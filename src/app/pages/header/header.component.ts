import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  languages: any[];
  selectedLanguage: any;

  @Output() languageChanged = new EventEmitter<string>();

  constructor(private translate: TranslateService) {
    this.languages = [
      { label: 'Português', value: 'pt' },
      { label: 'Inglês', value: 'en' }
    ];

    this.selectedLanguage = this.languages[0].value; // Defina o idioma padrão aqui
  }

  changeLanguage() {
    this.translate.use(this.selectedLanguage);
    this.languageChanged.emit(this.selectedLanguage);
  }
}
