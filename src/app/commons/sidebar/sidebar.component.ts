import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { AppModule } from '../../app.module';
import { LocalStorageService } from '../../local-storage.service';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/clientes', title: 'Clientes',  icon:'users_single-02', class: '' },
  { path: '/citas', title: 'Citas',  icon: 'design_app', class: '' }
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AppModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: []
})
export class SidebarComponent implements OnInit {
  public menuItems: any[]=[];

  constructor(private localStorage:LocalStorageService) { }

  ngOnInit() {
    if(this.localStorage.getItem("token")!==null){
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
