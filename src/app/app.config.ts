import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { UserListComponent } from './components/user-list.component';
import { UserEditComponent } from './components/user-edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes)
  ]
};
