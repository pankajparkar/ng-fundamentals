import { Routes } from "@angular/router";
import { UserListComponent } from "./user-list.component";
import { UserEditComponent } from "./user-edit.component";

export const USER_ROUTES = [
    { path: 'list', component: UserListComponent },
    { path: 'edit/:id', component: UserEditComponent },
    { path: '**', redirectTo: 'list' },
]
