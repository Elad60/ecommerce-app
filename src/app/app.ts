import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ErrorDisplayComponent } from './shared/ui/error-display-component/error-display-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer,ErrorDisplayComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-dashboard');
}
