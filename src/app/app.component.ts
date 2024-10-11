import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'nf-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavbarComponent]
})
export class AppComponent {
  title = 'ng-fundamentals';
}
