import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LivrosComponent } from './livros/livros.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ComprasComponent } from './compras/compras.component';


@NgModule({
  declarations: [
    AdminComponent,
    LivrosComponent,
    CategoriasComponent,
    UsuariosComponent,
    ComprasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
