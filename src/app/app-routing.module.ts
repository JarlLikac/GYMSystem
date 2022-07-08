import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListadoClientesComponent} from "./listado-clientes/listado-clientes.component";
import {AgregarClienteComponent} from "./agregar-cliente/agregar-cliente.component";

const routes: Routes = [
  {
    path: 'listadoClientes', component: ListadoClientesComponent
  },
  {
    path: 'agregarClientes', component: AgregarClienteComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
