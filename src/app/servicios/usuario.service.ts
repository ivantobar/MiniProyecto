import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UsuarioModel } from '../modelos/usuario.model';
import { ListaUsuarioModel } from '../modelos/listaUsuarios.model';

@Injectable({
    providedIn: 'root',
  })
export class UsuarioService {
    private urlBase: string = "http://localhost:4567/usuarios";  // Cambia la URL según tu configuración del servidor

constructor(private http:HttpClient) { }
   listarUsuarios(): Observable<ListaUsuarioModel> {
    return this.http.get<ListaUsuarioModel>(this.urlBase);
  }

  BuscarUsuario(identificacion: string): Observable<any> {
    return this.http.get<any>(`${this.urlBase}/${identificacion}`);
  }
  crearUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post<any>(this.urlBase, usuario);
  }

  actualizarUsuario(identificacion: string, usuario: UsuarioModel): Observable<any> {
    return this.http.put<any>(`${this.urlBase}/${identificacion}`, usuario);
  }

  eliminarUsuario(identificacion: string): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}/${identificacion}`);
  }
}
