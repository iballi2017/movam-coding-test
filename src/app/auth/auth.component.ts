import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AuthNavigationComponent } from './components/auth-navigation/auth-navigation.component';

@Component({
  selector: 'app-auth',
  imports: [RouterModule, AuthNavigationComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  title: string = '';
  tagline: string = '';
  currentRoute: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setTitle(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.setTitle(this.currentRoute);
      }
    });
  }

  setTitle(currentRoute: string) {
    switch (currentRoute) {
      case '/auth':
        this.title = 'Welcome Back';
        this.tagline = 'Welcome back, please enter your details';
        break;
      case '/auth/sign-in':
        this.title = 'Welcome Back';
        this.tagline = 'Welcome back, please enter your details';
        break;
      case '/auth/signup':
        this.title = 'Create an Account';
        this.tagline = 'Create an account to get started';
        break;

      default:
        break;
    }
  }
}
