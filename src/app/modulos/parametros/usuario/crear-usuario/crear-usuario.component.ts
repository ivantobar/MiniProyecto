import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  fGroup: FormGroup;
  
  passwordFieldType: string = 'password';
  passwordIcon: string = 'visibility';

  constructor(private fb: FormBuilder,
              private servicio: UsuarioService,
              private router: Router) { }

  ngOnInit() {
    this.ConstruirFormulario();
    this.ConstruirSelect();
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
      identificacion: this.ObtenerFormGroup['identificacion'].value,
      nombres: this.ObtenerFormGroup['nombres'].value,
      apellidos: this.ObtenerFormGroup['apellidos'].value,
      perfil: this.ObtenerFormGroup['perfil'].value,
      password: this.ObtenerFormGroup['password'].value,
    };
  
    return datos;
  }

  registrarUsuario() {
    if (this.fGroup.invalid) {
      alert('Datos incompletos');
    } else {
      this.servicio.crearUsuario(this.ConstruirDatos()).subscribe({
        next: (respuesta) => {
          alert('Registro correcto de usuario.');
        },
        error: (err) => {
          alert('Se ha producido un error en el registro de usuario.');
        },
      });
    }
  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;
  }

}


