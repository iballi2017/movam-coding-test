import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  user = { email: '' };
  isLoading = false;
  constructor(private _authSvc: AuthService) {}

  onSubmit(data: NgForm) {
    console.log(data.value);
    const payload = {
      email: data.value.name,
    };

    this._authSvc.loginUser(payload).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
