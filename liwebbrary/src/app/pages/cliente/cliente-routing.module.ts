// src/app/pages/cliente/cliente-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carrinho', component: CarrinhoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
