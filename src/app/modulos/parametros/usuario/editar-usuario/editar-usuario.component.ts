import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  fGroup: FormGroup;
  passwordFieldType: string = 'password';
  passwordIcon: string = 'visibility';
  recordId: string = "";

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
  togglePasswordVisibility() {
    this.passwordFieldType = (this.passwordFieldType === 'password') ? 'text' : 'password';
    this.passwordIcon = (this.passwordIcon === 'visibility') ? 'visibility_off' : 'visibility';
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

  ConstruirDatos(): UsuarioModel {
    const datos: UsuarioModel = {
      nombres: this.ObtenerFormGroup['nombres'].value,
      apellidos: this.ObtenerFormGroup['apellidos'].value,
      perfil: this.ObtenerFormGroup['perfil'].value,
      password: this.ObtenerFormGroup['password'].value,
    };
  
    return datos;
  }

  actualizarUsuario() {
    if (this.fGroup.invalid) {
      alert('Datos incompletos');
    } else {
      this.servicio.actualizarUsuario(this.recordId,this.ConstruirDatos()).subscribe({
        next: (respuesta) => {
          alert('Usuario Actualizado Correctamentamente.');
          
          this.router.navigate(['/parametros/usuario-listar']);
        },
        error: (err) => {
          alert('Se ha producido un error en la  actualización el usuario.');
        },
      });
    }
  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;
  }

}
