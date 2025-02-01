import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginUser(payload: { email: string }) {
    console.log(payload.email);
    return this.http.get(`${environment.apiUrl}/users`).pipe(
      map((res: any) => {
        console.log({ res });
        const user = res.data.find((user: any) => user.email === payload.email);
        console.log({ user });
        return user ? user : null;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
