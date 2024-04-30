import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  url = "http://localhost:3000/produtos"

  constructor(private http: HttpClient ) { }

  getProdutos(): Observable < Produto[]> {
    return this.http.get <Produto[]> (this.url);
  }

  salvar(produto: Produto): Observable < Produto > {
    return this.http.post<Produto>(this.url, produto);
  }

  delete(produto: Produto): Observable < void > {
    return this.http.delete<void>(`${this.url}/${produto.id}`);
  }
  update(produto: Produto): Observable < Produto > {
    return this.http.put<Produto>(`${this.url}/${produto.id}`, produto);
  }
}
