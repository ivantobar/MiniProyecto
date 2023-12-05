import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { 
    path:"usuario-listar",
    component: ListarUsuarioComponent
  },
  {
    path: "usuario-agregar",
    component: CrearUsuarioComponent
  },
  {
    path: "usuario-eliminar/:id",
    component: EliminarUsuarioComponent
  },
  {
    path: "usuario-editar/:id",
    component: EditarUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
