import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../../models/interfaces/user';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, CommonModule, SharedModule],
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
    this.isLoading = true;
    const payload: { email: string } = {
      email: data.value.name,
    };

    this._authSvc.loginUser(payload).subscribe({
      next: (user: User) => {
        this.toastr.success(`Welcome ${user.email}`);
        this.router.navigate(['/dashboard']);
        this.isLoading = false;
      },
      error: (err) => {
        this.toastr.error(err.message, 'Error!:');
        this.isLoading = false;
      },
    });
  }
}
