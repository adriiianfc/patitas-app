import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../commons/footer/footer.component';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { SidebarComponent } from '../../commons/sidebar/sidebar.component';

@Component({
  selector: 'app-adm-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, SidebarComponent,RouterModule],
  templateUrl: './adm-layout.component.html',
  styleUrl: './adm-layout.component.scss'
})
export class AdmLayoutComponent {

}
