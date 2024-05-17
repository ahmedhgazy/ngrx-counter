import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { CounterReducer } from './store/counter.reducer';
// import {provideEffects} from '@ngrx/effects'
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideStore({ counter: CounterReducer }),
    // provideEffects(),
  ],
};
