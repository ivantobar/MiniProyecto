import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

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
