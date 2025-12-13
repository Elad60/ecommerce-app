import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
import { Card } from '../../shared/card/card';
import { Spinner } from '../../shared/spinner/spinner';
import { CurrencyPipe } from '../../shared/pipes/currency-pipe';
import { TruncatePipe } from '../../shared/pipes/truncate-pipe';
import { Highlight } from '../../shared/directives/highlight';

@Component({
  selector: 'app-home',
  imports: [Button,Card,Spinner,CurrencyPipe,TruncatePipe,Highlight],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  price = 1234.56
  longText = "Very long text here abcdefghijklmnopqrstuvwxyz"
}
