import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Clientes } from './entities/clientes';
import { ClientesService } from './services/clientes.service';
import { DOCUMENT } from '@angular/common';
import { UsuariosService } from './services/usuarios.service';
import { Usuario } from './entities/usuarios';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  //const _url = '';
  
  constructor(private _http: HttpClient, @Inject(DOCUMENT) private document: Document) { 
    
  }


  public cliente : ClientesService<Clientes> = new ClientesService(this._http);
  public usuarios : UsuariosService<Usuario> = new UsuariosService(this._http);


  getClientes(): Observable<Clientes[]>{
    const headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin" :"*"
    });
    return this._http.get<Clientes[]>('http://localhost:8081/api/clientes/getAll',{headers});
  }
}