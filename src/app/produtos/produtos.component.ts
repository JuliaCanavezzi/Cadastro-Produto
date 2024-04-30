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
  isEdting : boolean = false;

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
    this.loadProdutos();
  }

  loadProdutos(){
    this.service.getProdutos().subscribe({
      next: data => this.produtos = data
    });
  }

  salvar() {
    if(this.isEdting){
      this.service.update(this.catchFormGroup.value).subscribe({
        next: () => {
          this.loadProdutos()
          this.isEdting = false;
          this.catchFormGroup.reset();
        }
      })
    }
    else{
      this.service.salvar(this.catchFormGroup.value).subscribe ({
        next: data => {
          this.produtos.push(data)
          this.catchFormGroup.reset();
         }
        });
    }
  }

  delete(produto: Produto){
    this.service.delete(produto).subscribe
    ({
      next: () => this.loadProdutos()
    });
  }

  update(produto: Produto){
    this.isEdting = true;
    this.catchFormGroup.setValue(produto);
   }
}
