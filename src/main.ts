import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './modules/app/app.module';
import { environment } from './environments/environment';
import { ThemeService } from './theme.service'; 

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: 'theme', useValue: ThemeService } 
  ]
})
.catch(err => console.error(err));