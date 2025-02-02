import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
// import { User } from '../models/interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  loggedinUser: User = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };
  users: Users = [];
  constructor(
    private _authSvc: AuthService,
    private toastr: ToastrService,
    private _userSvc: UserService,
    private router: Router
  ) {
    this._authSvc.loggedinUser.subscribe((data) => {
      this.loggedinUser = data;
    });
  }

  ngOnInit(): void {
    if (this.loggedinUser.email === '') {
      const response = this._authSvc.logoutUser();
      response && this.toastr.error('You are logged out!');
      response && this.router.navigate(['/auth/sign-in']);
    }

    /**fetch list of users */
    this.getUsers();
  }

  getUsers() {
    this._userSvc.getUsers().subscribe({
      next: (users: any) => {
        console.log(users);
        this.users = users.data as Users;
      },
      error: (err) => {
        this.toastr.error(err.message, 'Error!');
      },
    });
  }

  logout() {
    const response = this._authSvc.logoutUser();
    response && this.toastr.error('You are logged out!');
    response && this.router.navigate(['/auth/sign-in']);
  }
}

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
type Users = User[];
