import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ElimnarComponent } from './eliminar/elimnar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';

const routes: Routes = [
  { 
    path:"usuario-listar",
    component: ListarComponent
  },
  {
    path: "usuario-agregar",
    component: CrearComponent
  },
  {
    path: "usuario-eliminar/:id",
    component: ElimnarComponent
  },
  {
    path: "usuario-editar/:id",
    component: ActualizarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccionesRoutingModule { }
