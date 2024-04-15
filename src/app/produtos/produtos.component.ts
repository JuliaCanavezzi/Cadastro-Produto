import { Component } from '@angular/core';
import { Produto } from '../produtos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      id: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: [''],
      preco: ['', Validators.required],
      quantidade: [''],
    });
  }

  salvar() {
    this.produtos.push(this.catchFormGroup.value);
  }

}
