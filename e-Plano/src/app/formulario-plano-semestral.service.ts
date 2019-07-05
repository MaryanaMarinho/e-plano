import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormularioDto} from './model/formulario-dto.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class FormularioPlanoSemestralService {

  // para testar a aplicacao com api-fake, bastar ter instalado o json-server
  // e rodar o comando json-server bd-teste.json
  //URL_API = 'http://localhost:3000';
  URL_API = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getFormularioPlanoSemestral(id: string): Promise<FormularioDto> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers,
    };

    return this.http.get(`${this.URL_API}/formularios/${id}`, options)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public salvarFormulario(formulario: FormularioDto): Observable<number> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers,
    };

    return this.http.post(`${this.URL_API}/formularios`, JSON.stringify(formulario), options).pipe(
      map((resposta: any) => resposta.id)
    );
  }

  public atualizaFormularioPlanoSemestral(formularioAtualizado: FormularioDto): Promise<FormularioDto> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers,
    };

    return this.http.put(`${this.URL_API}/formularios/${formularioAtualizado.id}`, JSON.stringify(formularioAtualizado), options)
      .toPromise()
      .then((resposta: any) => resposta);
  }
}
