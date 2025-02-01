import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../../models/interfaces/user';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  user = { email: '' };
  isLoading = false;
  constructor(
    private _authSvc: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  onSubmit(data: NgForm) {
    const payload: { email: string } = {
      email: data.value.name,
    };

    this._authSvc.loginUser(payload).subscribe({
      next: (user: User) => {
        this.toastr.success(`Welcome ${user.email}`);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.toastr.error(err.message, 'Error!:');
      },
    });
  }
}
