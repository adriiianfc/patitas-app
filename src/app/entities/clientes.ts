export interface Clientes {
    id: number; 
    nombre: string;
    email: string; 
    telefono: string; 
}

export class ClientesImpl implements Clientes{
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    constructor(){
        this.id= 0; 
        this.nombre= '';
        this.email= ''; 
        this.telefono= '';
    }
}
