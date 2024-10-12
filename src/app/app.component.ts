import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar.component";
import { UserListComponent } from "./components/user-list.component";
import { UserEditComponent } from "./components/user-edit.component";

@Component({
  selector: 'nf-root',
  standalone: true,
  template: `
    <nf-navbar></nf-navbar>
    <!-- <nf-user-list></nf-user-list> -->
    <nf-user-edit></nf-user-edit>
  `,
  imports: [NavbarComponent, UserListComponent, UserEditComponent]
})
export class AppComponent {
  title = 'ng-fundamentals';
}
