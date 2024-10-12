import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'nf-user-card',
  standalone: true,
  imports: [
    RouterLink,
  ],
  template: `
    <div class="card">
      <div class="card-content">
        <h1>{{ user().name }}</h1>
        <p class="title">{{ user().company.name }}</p>
        <p>📌 {{user().address.street}}, {{user().address.city}}, {{user().address.zipcode}}</p>
        <p><small>{{user().email }} | {{ user().website }}</small></p>
      </div>
      <div class="card-actions">
        <button (click)="edit()">📝</button>
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

      button:hover, a:hover {
        opacity: 0.7;
      }
    }
  `
})
export class UserCardComponent {
  user = input.required<User>();
  editClick = output<User>();

  edit() {
    this.editClick.emit(this.user());
  }
}
