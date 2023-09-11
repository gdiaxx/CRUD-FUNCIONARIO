import { Departamento } from './cadastro/Departamento';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  readonly apiURL : string;
            titulo: string = '';
  private departamentos : any[];

  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8080/departamentos/';
    this.departamentos = [];
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getDepartamentos(): Observable<Departamento[]> {
      return this.http.get<Departamento[]>(this.apiURL);
  }
}
