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
}
