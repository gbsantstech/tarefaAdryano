import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cadrastroadryano';
}
export class SeuComponente {
  constructor(private userService: UserService) {}

  onSubmit(formulario: FormGroup) {
    // Chame o método de cadastro do serviço
    this.userService.cadastrarUsuario(formulario.value).subscribe(
      (parameter:any) => {
        // Lidar com a resposta da API
        console.log('Usuário cadastrado com sucesso!',parameter);
      },
      (parameter:any) => {
        // Lidar com erros
        console.error('Erro ao cadastrar usuário', parameter);
      }
    );
  }
}