import { Component } from '@angular/core';
import { Produto } from '../produtos';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produtos: Produto[] = []
  catchFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.catchFormGroup = formBuilder.group({
      id: [''],
      nome: [''],
      descricao: [''],
      preco: [''],
      quantidade: [''],
    });
  }

  salvar() {
    this.produtos.push(this.catchFormGroup.value);
  }

}
