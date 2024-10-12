import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home.component";
import { NavbarComponent } from "./components/navbar.component";
import { UserListComponent } from "./components/user-list.component";
import { UserEditComponent } from "./components/user-edit.component";

@Component({
  selector: 'nf-root',
  standalone: true,
  template: `
    <nf-navbar></nf-navbar>
    <router-outlet></router-outlet>
  `,
  styles: ``,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, UserListComponent, UserEditComponent],
})
export class AppComponent {
  title = 'ng-fundamentals';

  myValue = 'myValue';

  changeTitle() {
    this.title = 'Soemthing changed';
  }
}
