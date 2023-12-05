import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';
import { ParametrosModule } from './modulos/parametros/parametros.module';

const routes: Routes = [{
  path:"inicio",
  component: ParametrosModule,
},
{
  path:"",
  pathMatch: "full", 
  redirectTo: "parametros/usuario-listar"
},
{
  path:"parametros",
  loadChildren: () => import("./modulos/parametros/parametros.module").then(m => m.ParametrosModule)
},
{
  path: "**", 
  component: RutaNoEncontradaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
