import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { lastValueFrom } from 'rxjs';

const API_URL = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  getUsers() {
    return lastValueFrom(this.http.get<User[]>(`${API_URL}/users`));
  }

  getUserById(id: number) {
    return this.http.get<User>(`${API_URL}/users/${id}`);
  }

}
