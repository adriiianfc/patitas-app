export interface Usuario {
    id: number; 
    usuario: string;
    password: string; 
    
}

export class UsuarioImpl implements Usuario{
    id: number;
    usuario: string;
    password: string;
    constructor(){
        this.id= 0, 
        this.usuario= '',
        this.password= ''
        
    
    }
}
