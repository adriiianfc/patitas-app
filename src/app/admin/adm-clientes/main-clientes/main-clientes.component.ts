import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrarClienteComponent } from '../registrar-cliente/registrar-cliente.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalService } from '../../../principal.service';
import { Clientes, ClientesImpl } from '../../../entities/clientes';
import { Datatable, DatatableImpl, DatatableUtils } from '../../../configs/datatables';
import { LocalStorageService } from '../../../local-storage.service';

@Component({
  selector: 'app-main-clientes',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    RegistrarClienteComponent],
  templateUrl: './main-clientes.component.html',
  styleUrl: './main-clientes.component.scss',
  providers: [PrincipalService, LocalStorageService]
})
export class MainClientesComponent implements OnInit {
  public ents: Clientes[] = [];
  public filter: Clientes = new ClientesImpl;
  public genFilter:string = '';
  public modulosStr:String = 'Clientes';
  public moduloStr:String = 'Cliente';
  public dataDatable: Datatable<Clientes> = new DatatableImpl;
  public dataTableUtils: DatatableUtils<Clientes> = new DatatableUtils;
  public pages: number[] = [1];
  public token: any = null;
  constructor(
    private _ser: PrincipalService,
    private _modal: NgbModal,
    private localStorage:LocalStorageService
  ) {
    
  }
  ngOnInit() {
    this.token = this.localStorage.getItem("token");
    this._ser.cliente.getAll().subscribe(ents => {
      this.loadDataTable(ents);
    });
  }

  consultar() {
    this.filter.nombre = this.genFilter;
    this._ser.cliente.filter(this.filter).subscribe(ents => {
      this.loadDataTable(ents);
    });
  }

  loadDataTable(ents: Clientes[]) {
    this.dataDatable = this.dataTableUtils.getData(this.dataDatable, ents);
    this.ents = this.dataDatable._data;
    this.pages = [];
    for (let i = 0; i < this.dataDatable._pages; i++) {
      this.pages.push(i + 1);
    }

  }

  goToPage(page: number) {
    this.dataDatable._current_page = page;
    this.consultar();
  }

  agregar() {
    const modalRef = this._modal.open(RegistrarClienteComponent,
      { backdrop: false, scrollable: true, size: 'xl' });
    modalRef.result.then((result) => {
      this.consultar();
    });

  }

  editar(ent: Clientes) {
    const modalRef = this._modal.open(RegistrarClienteComponent,
      { backdrop: false, scrollable: true, size: 'xl' });
    modalRef.componentInstance.ent = ent;
    modalRef.result.then((result) => {
      this.consultar();
    });

  }

  borrar(ent: Clientes) {
    this._ser.cliente.delete(ent).subscribe(res => {
      this.consultar();
    })
  }
}

