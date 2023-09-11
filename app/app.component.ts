import { FuncionarioService } from './funcionario.service';
import { Component } from '@angular/core';
import { Funcionario } from './cadastro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjetoFuncionario';
  funcionarios: any[] = [];

  constructor(private service: FuncionarioService) {}

  salvar($event : any) {
    this.service.salvar($event).subscribe(x => console.log(x));
  }

}
