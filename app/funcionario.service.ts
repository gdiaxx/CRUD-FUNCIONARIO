import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Funcionario } from 'src/app/cadastro/Funcionario';




@Injectable({

  providedIn: 'root'

})

export class FuncionarioService {

   readonly apiURL : string;

             titulo: string = '';

    private funcionarios : any[];



    constructor(private http : HttpClient) {

      this.apiURL =  'http://localhost:8080/funcionarios/';

      this.funcionarios = [];

    }



    httpOptions = {

      headers: new HttpHeaders({ 'Content-Type': 'application/json' })

    }



    // Obtem todos os funcionarios

    getFuncionarios(): Observable<Funcionario[]> {

      return this.http.get<Funcionario[]>(this.apiURL);

   }



    salvar(funcionario: Funcionario) {

      this.funcionarios.push(funcionario);

      return this.http.post<Funcionario>(this.apiURL, funcionario);

    }



    todas() {

      return this.http.get<Funcionario[]>(this.apiURL);

    }



  }
