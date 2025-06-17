import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';


@NgModule({
  declarations: [
    ClienteComponent,
    HomeComponent,
    LivrosComponent,
    BibliotecaComponent,
    LoginComponent,
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
