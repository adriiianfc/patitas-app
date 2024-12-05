import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalService } from '../../../principal.service';
import { Clientes, ClientesImpl } from '../../../entities/clientes';

@Component({
  selector: 'app-registrar-cliente',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registrar-cliente.component.html',
  styleUrl: './registrar-cliente.component.scss',
  providers: [PrincipalService]
})
export class RegistrarClienteComponent implements OnInit{

  @Input() ent:Clientes = new ClientesImpl;
  @Output() result: EventEmitter<any> = new EventEmitter();

  constructor(
    private _ser : PrincipalService,
    public activeModal: NgbActiveModal
    ){}

  ngOnInit(){}

  registrar(){
    this._ser.cliente.save(this.ent).subscribe((ents)=>{
      this.ent = ents[0];
      this.result.emit(this.ent);
      this.activeModal.close(this.ent);
    });
    
  }

}
