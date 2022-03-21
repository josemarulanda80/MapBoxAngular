import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken='pk.eyJ1Ijoiam9zZW1hcnVsYW5kYTgwIiwiYSI6ImNsMGxpeHlpbDA1YWQzamxtdGI1dTVudjkifQ.Aqws-8PGsKBRhKl88F4yuA';
if(!navigator.geolocation){
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation')
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
