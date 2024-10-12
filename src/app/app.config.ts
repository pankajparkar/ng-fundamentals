import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { HomeComponent } from './components/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', loadChildren: () => import('./components/users/user.routes').then(i => i.USER_ROUTES), },
  { path: '**', redirectTo: 'home' },
]

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
