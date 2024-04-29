import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = []
  catchFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ProdutoService) {
    this.catchFormGroup = formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: [''],
      preco: ['', Validators.required],
      quantidade: [''],
    });
  }

  ngOnInit(): void {
    this.service.getProdutos().subscribe({
      next: data => this.produtos = data
    });
  }

  salvar() {
    this.produtos.push(this.catchFormGroup.value);
  }

}
