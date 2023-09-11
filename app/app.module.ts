import { FuncionarioService } from './funcionario.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FuncionarioComponent } from './cadastro/funcionario.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListagemFuncionarioComponent } from './listagemFuncionario/listagem-funcionario.component';
import { DepartamentoComponent } from './cadastro/departamento.component';
import { DepartamentoService } from './departamento.service';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    ListagemFuncionarioComponent,
    DepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FuncionarioService, DepartamentoService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
