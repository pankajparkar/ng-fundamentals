import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nf-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <ul>
      <li>
        <a routerLinkActive="active" [routerLink]="'/home'">Home</a>
      </li>
      <li>
        <a routerLinkActive="active" [routerLink]="'/user'">Users</a>
      </li>
    </ul>
  `,
  styles: `
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
    }

    li {
      float: left;
    }

    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover:not(.active) {
      background-color: #111;
    }

    .active {
      background-color: #04AA6D;
    }
  `
})
export class NavbarComponent {

}
