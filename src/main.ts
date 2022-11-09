import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Specify root module
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));

console.log('MAIN.TS GOT CALLED');
