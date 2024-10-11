import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar.component";
import { UserListComponent } from "./components/user-list.component";
import { UserViewComponent } from "./components/user-view.component";

@Component({
  selector: 'nf-root',
  standalone: true,
  template: `
    <nf-navbar></nf-navbar>
    <nf-user-list></nf-user-list>
    <!-- <nf-user-view></nf-user-view> -->
  `,
  imports: [NavbarComponent, UserListComponent, UserViewComponent]
})
export class AppComponent {
  title = 'ng-fundamentals';
}
