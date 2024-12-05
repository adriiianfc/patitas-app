import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Constants } from "../configs/constants";
import { Observable } from "rxjs";
import { Clientes } from "../entities/clientes";
import { LocalStorageService } from "../local-storage.service";

export class ClientesService<T extends Clientes> {
    private constants: Constants = new Constants;
    private url: String = this.constants.urlWS + '' + this.constants.pathCliente;
    private localStorage = LocalStorageService;
    constructor(private _http: HttpClient) {

    }

    getAll(): Observable<T[]> {
        const headers: HttpHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": "Bearer " + localStorage.getItem("token")
        });
        return this._http.get<T[]>(this.url + '' + this.constants.methodGetAll, { headers });
    }

    save(ent:T): Observable<T[]> {
        const headers: HttpHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Authorization': localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ''
        });
        return this._http.post<T[]>(this.url + '' +this.constants.methodSave, ent, {headers});
    }

    filter(ent:T): Observable<T[]> {
        const headers: HttpHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Authorization': localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ''
        });
        return this._http.post<T[]>(this.url + '' +this.constants.methodFilter, ent, {headers});
    }

    delete(ent:T): Observable<T> {
        const headers: HttpHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Authorization': localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ''
        });
        return this._http.post<T>(this.url + '' +this.constants.methodDelete, ent, {headers});
    }
}