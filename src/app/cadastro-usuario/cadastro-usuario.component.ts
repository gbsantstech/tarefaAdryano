import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: 'cadastro-usuario.component.html',
  styleUrls: ['cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {
  backgroundImage = 'assets/fundocadastrosenac.png'; 
  validarSenha(): boolean {
    return true;
    }
}




