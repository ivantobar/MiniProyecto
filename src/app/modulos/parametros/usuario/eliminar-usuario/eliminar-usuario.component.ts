import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  fGroup: FormGroup;
  passwordFieldType: string = 'password';
  passwordIcon: string = 'visibility';
  recordId: string = "";
  modoEdicion: boolean = true;

  constructor(private fb: FormBuilder,
              private servicio: UsuarioService,
              private router: Router,
              private route: ActivatedRoute) 
              {{this.recordId = this.route.snapshot.params["id"]}}

  ngOnInit() {
    this.ConstruirFormulario();
    this.ConstruirSelect();
    this.BuscarRegistro();
  }

  ConstruirSelect() {
    setTimeout(() => {
      let materializeScript = document.createElement('script');
      materializeScript.src ='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js';
      materializeScript.onload = () => {
        M.AutoInit();
      };
      document.body.appendChild(materializeScript);
    }, 1000); 
  }
  

  BuscarRegistro(){
    console.log(this.recordId )
    this.servicio.BuscarUsuario(this.recordId).subscribe({
      next: (datos: any)=>{
      this.ObtenerFormGroup['identificacion'].setValue(datos.data.identificacion);
      this.ObtenerFormGroup['nombres'].setValue(datos.data.nombres);
      this.ObtenerFormGroup['apellidos'].setValue(datos.data.apellidos);
      this.ObtenerFormGroup['perfil'].setValue(datos.data.perfil);
      this.ObtenerFormGroup['password'].setValue(datos.data.password);
   },
      error: (err)=>{
        alert("El registro no existe.")
      }
    })
  }
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      identificacion: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      perfil: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  
  confirmarEliminarUsuario() {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');

    if (confirmacion) {
      this.EliminarUsuario();
    }
  }

  EliminarUsuario() {
    this.servicio.eliminarUsuario(this.recordId).subscribe({
        next: (respuesta) => {
          alert('Usuario Eliminado Correctamentamente.');
          
          this.router.navigate(['/parametros/usuario-listar']);
        },
        error: (err) => {
          alert('Se ha producido un error al eliminar el usuario.');
        },
      });

  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;
  }

}
