import { Component, computed, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { UserCardComponent } from "./user-card.component";

@Component({
  selector: 'nf-user-list',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    UserCardComponent,
  ],
  template: `
<h2>User List </h2>
<div class="form-control">
  <label for="fname">Search</label>
  <input type="text" id="search" name="search" [(ngModel)]="search" placeholder="Search..">
</div>
<div class="user-list">
  @for (user of searchResults(); track $index) {
    <nf-user-card
      [user]="user" 
      (editClick)="editUser($event)"
      />
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
  `
})
export class UserListComponent {
  private userService = inject(UserService);
  private router = inject(Router);

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

  editUser({ id }: User) {
    console.log(id);
    this.router.navigate(['/user/edit', id]);
  }

  searchResults = computed(() => {
    return this.users()?.filter(user => user.name.includes(this.search() || ''))
  });

}
