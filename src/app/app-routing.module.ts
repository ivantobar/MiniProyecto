import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccionesModule } from './modulos/acciones/acciones.module';

const routes: Routes = [{
  path:"inicio",
  component: AccionesModule,
},
{
  path:"",
  pathMatch: "full", 
  redirectTo: "acciones/usuario-listar"
},
{
  path:"acciones",
  loadChildren: () => import("./modulos/acciones/acciones.module").then(m => m.AccionesModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
