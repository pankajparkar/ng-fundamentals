import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'nf-root',
  standalone: true,
  template: `
    <nf-navbar></nf-navbar>
    <router-outlet></router-outlet>
  `,
  imports: [NavbarComponent, RouterOutlet]
})
export class AppComponent {
  title = 'ng-fundamentals';
}
