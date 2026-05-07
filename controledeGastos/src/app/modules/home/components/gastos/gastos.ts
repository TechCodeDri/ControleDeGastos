import { Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './gastos.html',
  styleUrls: ['./gastos.scss'],
})
export class Gastos {
  form = new FormGroup({
    valor: new FormControl(''),
    categoria: new FormControl(''),
    descricao: new FormControl(''),
    data: new FormControl('')
  });
  onSubmit(){
    
    console.log(this.form.value);
  }
}