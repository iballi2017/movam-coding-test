import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/interfaces/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  imports: [],
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
  constructor(private _authSvc: AuthService, private toastr: ToastrService) {
    this._authSvc.loggedinUser.subscribe((data) => {
      this.loggedinUser = data;
      console.log({
        loggedinUser: this.loggedinUser,
      });
    });
  }

  ngOnInit(): void {
    if (this.loggedinUser.email === '') {
      this.toastr.error('You are logged out!');
      this._authSvc.logoutUser();
    }
  }
}
