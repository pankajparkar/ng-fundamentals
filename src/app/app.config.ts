import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { UserListComponent } from './components/user-list.component';
import { UserEditComponent } from './components/user-edit.component';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: '**', redirectTo: 'user/list' },
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
