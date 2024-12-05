import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrincipalService } from '../../principal.service';
import { Usuario, UsuarioImpl } from '../../entities/usuarios';
import { LocalStorageService } from '../../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [PrincipalService]
})
export class LoginComponent {
  public user : Usuario = new UsuarioImpl()

  constructor(
    private _ser : PrincipalService,
    private router:Router, private localStorage:LocalStorageService
    ){}

    login() {
      this._ser.usuarios.login(this.user).subscribe({
        next: logUser => {
          console.log(logUser.token);
          if (logUser.token) {
            this.localStorage.setItem('token', logUser.token);
            window.location.reload();
            // this.router.navigate(['/clientes']);
          }
        },
        error: err => {
          console.error('Error al iniciar sesión:', err);
          // Aquí puedes mostrar un mensaje de error al usuario
        }
      });
    }
    
}
