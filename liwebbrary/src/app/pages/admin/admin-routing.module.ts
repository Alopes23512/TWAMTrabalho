import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LivrosComponent } from './livros/livros.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { UsuariosComponent } from './utilizador/usuarios.component';
import { ComprasComponent } from './compras/compras.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'livros', pathMatch: 'full' },
      { path: 'livros', component: LivrosComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'compras', component: ComprasComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
