import { Component, computed, inject, model, signal } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { UserCardComponent } from './user-card.component';
import { User } from '../models/user.model';
import { Router, RouterLink } from '@angular/router';

interface UserForm {
  id: FormControl<number>;
  name: FormControl<string>;
  username: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
  website: FormControl<string>;
}

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
      <label for="search">Search {{search()}}</label>
      <input type="text"
        id="search" [(ngModel)]="search" placeholder="Search..">
    </div>
    <div class="user-list">
      @for (user of filteredUsers(); track $index) {
        <nf-user-card [user]="user" (editClick)="editUser($event)"></nf-user-card>
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
  search = model('');

  users = signal<User[]>([]);

  filteredUsers = computed(() => {
    const filtered = this.users().filter(
      user => user.name.includes(this.search()),
    );
    return filtered;
  })

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    const users = await this.userService.getUsers();
    console.log(users);
    this.users.set(users);
  }

  valueChange(event: Event) {
    this.search.set((event.target as HTMLInputElement).value)
  }

  editUser(user: User) {
    console.log(user);
    this.router.navigate(['/user/edit', user.id]);
  }
}