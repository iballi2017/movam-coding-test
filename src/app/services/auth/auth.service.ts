import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedinUser = new BehaviorSubject<any>({
    email: '',
  });
  constructor(
    private http: HttpClient // , private router: Router
  ) {}

  loginUser(payload: { email: string }) {
    return this.http.get(`${environment.apiUrl}/users/2`).pipe(
      map((res: any) => {
        if (res && res.data) {
          if (res.data.email === payload.email) {
            this.setLoggedinUser(res.data);
            return res.data;
          } else {
            throw new Error('Invalid credentials');
          }
        } else {
          throw new Error('User not found');
        }
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  setLoggedinUser(user: any) {
    this.loggedinUser.next(user);
  }

  logoutUser() {
    this.loggedinUser.next({ email: '' });
    // this.router.navigate(['/auth']);
  }
}
