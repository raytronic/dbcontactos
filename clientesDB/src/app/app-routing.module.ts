import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesAddComponent } from './components/clientes-add/clientes-add.component';
import { ClientesCreateComponent } from './components/clientes-create/clientes-create.component';
import { ClientesEditComponent } from './components/clientes-edit/clientes-edit.component';
import { ClientesViewComponent } from './components/clientes-view/clientes-view.component';

const routes: Routes = [
  {path: '', redirectTo : 'clientes/admin', pathMatch: 'full'},
  {path: 'clientes/admin', component: ClientesViewComponent},
  {path: 'clientes/add', component: ClientesCreateComponent},
  {path: 'clientes/edit/:clientId', component: ClientesEditComponent},
  {path: 'clientes/view/:clientId', component: ClientesAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
