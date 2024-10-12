import { Component } from '@angular/core';

@Component({
  selector: 'nf-home',
  standalone: true,
  imports: [],
  template: `
    <div class="form-control">
      <label for="fname">Search</label>
      <input type="text" id="search" name="search" placeholder="Search..">
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
export class HomeComponent {

}