import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { lastValueFrom } from 'rxjs';

const API_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>(`${API_URL}/users`);
    // return lastValueFrom(users);
  }

  getUserById(id = 1) {
    return lastValueFrom(this.http.get<User>(`${API_URL}/users/${id}`));
  }
}
