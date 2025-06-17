import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) }, { path: 'cliente', loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClienteModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
