import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
import { Card } from '../../shared/card/card';
import { Spinner } from '../../shared/spinner/spinner';

@Component({
  selector: 'app-home',
  imports: [Button,Card,Spinner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
