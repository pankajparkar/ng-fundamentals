import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list.component';
import { UserEditComponent } from './components/user-edit.component';

const routes: Routes = [
  { path: 'user/list', component: UserListComponent },
  { path: 'user/edit', component: UserEditComponent },
  { path: '**', redirectTo: 'user/list' },
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ],
};
