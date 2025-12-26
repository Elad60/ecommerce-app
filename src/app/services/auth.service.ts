import { computed, effect, Injectable, signal } from '@angular/core';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<User | null>(null);

  isAuthenticated = computed(() => this.currentUser() !== null);
  isAdmin = computed(() => this.currentUser()?.role === 'admin');

  constructor() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const userJson = atob(token);
        const user: User = JSON.parse(userJson);
        this.currentUser.set(user);
      } catch (error) {
        localStorage.removeItem('auth_token');
        console.error(error);
      }
    }
    effect(() => {
      const user = this.currentUser();
      if(user) {
      const token = btoa(JSON.stringify(user));
      localStorage.setItem('auth_token', token);
      } else {
        localStorage.removeItem('auth_token')
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
}
