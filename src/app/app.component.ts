import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './commons/footer/footer.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { SidebarComponent } from './commons/sidebar/sidebar.component';
import { AppModule } from './app.module';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, SidebarComponent,RouterModule, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[LocalStorageService]
})

export class AppComponent {
  title = 'patitas-app';
  constructor(private router:Router, private localStorage:LocalStorageService){
    
  }
  ngOnInit(): void {
    if(this.localStorage.getItem("token")===null){
      this.router.navigate(['/login'])
    }else{
      this.router.navigate(['/clientes'])
    }
  }
}
