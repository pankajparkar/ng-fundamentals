import { Component, input, output } from '@angular/core';
import { User } from '../models/user.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nf-user-card',
  standalone: true,
  imports: [
    RouterLink,
  ],
  template: `
  <div class="card">
    <div class="card-content">
      <h1>{{user().name}}</h1>
      <p class="title">{{user().company.name}}</p>
      <p>📌 Fernvale, Singapore, 400072</p>
      <p><small>{{user().website}} | {{user().email}}</small></p>
    </div>
    <div class="card-actions">
      <button (click)="editClick.emit(user())">📝</button>
      <button>🗑</button>
    </div>
  </div>
  `,
  styles: `
    .card {
      border-radius: 8px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      display: flex;
      margin: 12px;
      padding: 8px;
      .card-content {
        align-items: start;
        display: flex;
        flex: 1 1 auto;
        flex-flow: column;
        .title {
          color: grey;
          font-size: 18px;
        }
        h1, p {
          margin: 0;
        }
      }
      .card-actions {
        display: flex;
        flex-flow: column nowrap;
      }
    }
    button {
      border: none;
      outline: 0;
      padding: 8px;
      text-align: center;
      cursor: pointer;
      font-size: 18px;
      margin: 4px;
      border-radius: 8px;
    }
    a {
      text-decoration: none;
      font-size: 22px;
      color: black;
    }
    button:hover, a:hover {
      opacity: 0.7;
    }
  `
})
export class UserCardComponent {
  user = input.required<User>();
  editClick = output<User>();
}
