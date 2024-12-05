import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Constants } from "../configs/constants";
import { Observable } from "rxjs";
import { Usuario } from "../entities/usuarios";

export class UsuariosService<T extends Usuario> {
    private constants: Constants = new Constants;
    private url: String = this.constants.urlWS + 'usuarios' ;
    
    constructor(private _http: HttpClient) {

    }

    getAll(): Observable<T[]> {
        const headers: HttpHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
        return this._http.get<T[]>(this.url + '' + this.constants.methodGetAll, { headers });
    }

    save(ent:T): Observable<T[]> {
        const headers: HttpHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
        return this._http.post<T[]>(this.url + '' +this.constants.methodSave, ent, {headers});
    }

    delete(ent:T): Observable<T> {
        const headers: HttpHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
        return this._http.post<T>(this.url + '' +this.constants.methodDelete, ent, {headers});
    }

    filter(ent:T): Observable<T[]> {
        const headers: HttpHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
        return this._http.post<T[]>(this.url + '' +this.constants.methodFilter, ent, {headers});
    }

    login(ent:T): Observable<any> {
        const headers: HttpHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
        return this._http.post<any>(this.url + '/token', ent, {headers});
    }
}