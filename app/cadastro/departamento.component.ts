import { DepartamentoService } from '../departamento.service';
import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/cadastro/Departamento';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {

  readonly apiURL : string;
  titulo : string = '';
  departamentos: Departamento[] = [];


  constructor(private service : DepartamentoService) {
    this.apiURL = 'http://localhost:8080/departamentos/';
  }

  ngOnInit(): void {
      this.titulo = "Novo Departamento";
      this.getDepartamentos();
  }

  getDepartamentos() {
    this.service.getDepartamentos().subscribe((departamentos: Departamento[]) => {
      console.table(departamentos);
      this.departamentos = departamentos;
    });
  }

}
