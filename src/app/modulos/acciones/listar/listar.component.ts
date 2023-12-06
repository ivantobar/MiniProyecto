import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaRegistros: UsuarioModel[]=[];
  constructor(private servicio: UsuarioService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.servicio.listarUsuarios().subscribe({
      next: (datos)=>{
        this.listaRegistros= datos.data;
      },
      error:(err)=>{
        
        alert("Error leyendo la información de los usuarios.")
      }
    });
  }

 
}
