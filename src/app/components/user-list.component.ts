import { Component, computed, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../models/user.model';

@Component({
  selector: 'nf-user-list',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
  ],
  template: `
<h2>User List </h2>
<div class="form-control">
  <label for="fname">Search</label>
  <input type="text" id="search" name="search" [(ngModel)]="search" placeholder="Search..">
</div>
<div class="user-list">
  @for (user of searchResults(); track $index) {
    <div class="card">
      <div class="card-content">
        <h1>{{ user.name }}</h1>
        <p class="title">{{ user.company.name }}</p>
        <p>📌 {{user.address.street}}, {{user.address.city}}, {{user.address.zipcode}}</p>
        <p><small>{{user.email }} | {{ user.website }}</small></p>
      </div>
      <div class="card-actions">
        <button [routerLink]="['/user/edit', user.id]">📝</button>
        <button>🗑</button>
      </div>
    </div>
  }
</div>
  `,
  styles: `

    .form-control {
      display: flex;
      flex-flow: column nowrap;
      margin: 12px;
    }

    input[type=text], select {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .user-list {
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
    }
  `
})
export class UserListComponent {
  private userService = inject(UserService);

  users = signal<User[]>([]);
  search = model<string>('');

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users.set(users);
      },
    })
  }

  ngOnInit() {
    this.getUsers();
  }

  searchResults = computed(() => {
    return this.users()?.filter(user => user.name.includes(this.search() || ''))
  });

}
