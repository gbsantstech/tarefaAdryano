import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class UserService {
  private apiUrl = 'URL_DO_SEU_ENDPOINT_SWAGGER'; // Substitua pela URL real

  constructor(private http: HttpClient) {}

  cadastrarUsuario(usuarioData: any): Observable<any> {

    const requestBody = {
      email: usuarioData.email,
      senha: usuarioData.senha,
      emailConfirm: usuarioData.emailConfirm,
      senhaConfirm: usuarioData.senhaConfirm,
      nome: usuarioData.nome,
      cpf: usuarioData.cpf,
      telefone: usuarioData.telefone,
      genero: usuarioData.genero,
      cep: usuarioData.cep,
      estado: usuarioData.estado,
      cidade: usuarioData.cidade,
      complemento: usuarioData.complemento,
      endereco: usuarioData.endereco,
    };
    return this.http.post(this.apiUrl, requestBody);
  }
}