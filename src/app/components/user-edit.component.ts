import { Component, inject, signal } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nf-user-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
  ],
  template: `
    <h2>Responsive Form</h2>
    {{ userEditForm.value | json }}
    <div class="container">
      <form [formGroup]="userEditForm" (ngSubmit)="submit()">
      <div class="row">
        <div class="col-25">
          <label for="name">Name</label>
        </div>
        <div class="col-75">
          <input type="text" id="name" formControlName="name" placeholder="Your name..">
          @if(userEditForm.controls.name.hasError('required')) {
            Name is required
          }
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="username">User Name</label>
        </div>
        <div class="col-75">
          <input type="text" id="username" formControlName="username" placeholder="Your username..">
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="phone">Phone</label>
        </div>
        <div class="col-75">
          <input type="text" id="phone" formControlName="phone" placeholder="Your Phone..">
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="website">Website</label>
        </div>
        <div class="col-75">
          <input type="url" id="website" formControlName="website" placeholder="Your website..">
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="email">Email</label>
        </div>
        <div class="col-75">
          <input type="text" id="email" formControlName="email" placeholder="Your email..">
        </div>
      </div>
      <br>
      <div class="row">
        <input [disabled]="userEditForm.invalid" type="submit" value="Submit">
      </div>
      </form>
    </div>
  `,
  styles: `
    * {
      box-sizing: border-box;
    }
    input[type=text], input[type=email], input[type=url], select, textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      resize: vertical;
    }
    label {
      padding: 12px 12px 12px 0;
      display: inline-block;
    }
    input[type=submit] {
      background-color: #04AA6D;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      float: right;
    }
    
    input[disabled] {
      opacity: .5;
    }
    input[type=submit]:hover {
      background-color: #45a049;
    }
    .container {
      border-radius: 5px;
      background-color: #f2f2f2;
      padding: 20px;
    }
    .col-25 {
      float: left;
      width: 25%;
      margin-top: 6px;
    }
    .col-75 {
      float: left;
      width: 75%;
      margin-top: 6px;
    }
    /* Clear floats after the columns */
    .row::after {
      content: "";
      display: table;
      clear: both;
    }
    /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
      .col-25, .col-75, input[type=submit] {
        width: 100%;
        margin-top: 0;
      }
    }
  `
})
export class UserEditComponent {

  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private fb = inject(FormBuilder);

  public userEditForm = this.fb.group({
    id: this.fb.nonNullable.control(1),
    name: this.fb.nonNullable.control('', [Validators.required]),
    username: this.fb.nonNullable.control('', [Validators.required]),
    email: this.fb.nonNullable.control('', [Validators.required]),
    phone: this.fb.nonNullable.control('', [Validators.required]),
    website: this.fb.nonNullable.control('', [Validators.required]),
  });

  ngOnInit() {
    console.log(this.route);
    this.userService.getUserById(this.route.snapshot.params['id'])
      .subscribe({
        next: (user) => {
          console.log(user);
          this.userEditForm.patchValue(user);
        }
      })
  }

  submit() {
    console.log(this.userEditForm);
  }

}