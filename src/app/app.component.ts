import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UserListComponent } from "./components/user-list.component";

@Component({
  selector: 'nf-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavbarComponent, UserListComponent]
})
export class AppComponent {
  title = 'ng-fundamentals';
}
