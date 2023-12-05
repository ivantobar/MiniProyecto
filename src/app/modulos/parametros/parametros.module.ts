import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametrosRoutingModule } from './parametros-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ]
})
export class ParametrosModule { }
