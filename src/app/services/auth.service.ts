import { computed, effect, Injectable, signal } from '@angular/core';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';
  currentUser = signal<User | null>(null);

  isAuthenticated = computed(() => this.currentUser() !== null);
  isAdmin = computed(() => this.currentUser()?.role === 'admin');

  constructor() {
    const token = localStorage.getItem(this.AUTH_TOKEN_KEY);
    if (token) {
      try {
        const userJson = atob(token);
        const user: User = JSON.parse(userJson);
        this.currentUser.set(user);
      } catch (error) {
        localStorage.removeItem(this.AUTH_TOKEN_KEY);
        console.error(error);
      }
    }
    effect(() => {
      const user = this.currentUser();
      if (user) {
        const token = btoa(JSON.stringify(user));
        localStorage.setItem(this.AUTH_TOKEN_KEY, token);
      } else {
        localStorage.removeItem(this.AUTH_TOKEN_KEY);
      }
    });
  }
  login(username: string, password: string): void {
    const mockUser: User = {
      id: Date.now(),
      username,
      email: `${username}@example.com`,
      role: username === 'admin' ? 'admin' : 'user',
    };
    this.currentUser.set(mockUser);
  }
  logout(): void {
    this.currentUser.set(null);
  }
  register(username: string, email: string, password: string): void {
    const newUser: User = {
      id: Date.now(),
      username,
      email,
      role: 'user',
    };
    this.currentUser.set(newUser);
  }
  updateUser(userName: string, email: string): void {
    const user = this.currentUser();

    if(user) {
      this.currentUser.set({
        ...user,
        username: userName,
        email
      })
    }
  }
}
