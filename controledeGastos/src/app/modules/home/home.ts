import { Component } from '@angular/core';
import { Gastos } from './components/gastos/gastos';

@Component({
  selector: 'app-home',
  imports: [Gastos],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
