import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccionesRoutingModule } from './acciones-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ElimnarComponent } from './eliminar/elimnar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ElimnarComponent,
    ActualizarComponent
  ],
  imports: [
    CommonModule,
    AccionesRoutingModule, 
    ReactiveFormsModule,
  ]
})
export class AccionesModule { }
