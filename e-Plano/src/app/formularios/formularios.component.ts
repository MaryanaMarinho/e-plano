import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormularioDto} from '../model/formulario-dto.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormularioPlanoSemestralService} from '../formulario-plano-semestral.service';
import { from } from 'rxjs';
import { FinalizacaoComponent } from '../finalizacao/finalizacao.component';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.sass']
})
export class FormulariosComponent implements OnInit {

  // Objeto do forumlario pai
  public formularioCadastro: FormularioDto = new FormularioDto();

  //ID salvo
  public idSalvo;

  // Variaveis de controle do menu
  isParaFormularioIdentificacao = true;
  isParaFormularioQualificacao = false;
  isParaFormularioEnsino = false;
  isParaFormularioPesquisa = false;
  isParaFormularioExtensao = false;
  isParaFormularioProducao = false;
  isParaFormularioAtvQualificacao = false;
  isParaFormularioRepresentacao = false;
  isParaFinalizacao = false;
  tituloPagina = 'IF';

  // Variaveis da lib ng-sidebar
  public _opened: boolean = false;
  public _modeNum: number = 0;
  public _positionNum: number = 0;
  public _dock: boolean = false;
  public _closeOnClickOutside: boolean = true;
  public _closeOnClickBackdrop: boolean = false;
  public _showBackdrop: boolean = true;
  public _animate: boolean = true;

  public _MODES: Array<string> = ['over', 'push', 'slide'];
  public _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  constructor(private router: Router, private service: FormularioPlanoSemestralService, private routes: ActivatedRoute) { }

  ngOnInit() {
    //Pega o ID da URL
     this.routes.params.subscribe((parametros: Params) => {
       //Verifica se a URL esta com ID
       if(parametros.id !== undefined){
        //Recupera o Formulario do Back
        this.service.getFormularioPlanoSemestral(parametros.id)
          .then((formulario: FormularioDto) => {
            console.log('Resposta ', formulario);
            //Monta o objeto
            this.formularioCadastro = formulario;
          });
        }
     });
    // this.service.getFormularioPlanoSemestral().then((response) => {
    //   console.log('Teste resposta ', response);
    //   this.formularioCadastro = response;
    // });
  }
  // Botão do menu lateral
  public _toggleOpened(): void {
    this._opened = !this._opened;
    // this.isParaFormularioQualificacao = true;
    // this.isParaFormularioIdentificacao = false;
    // this.isParaFormularioEnsino = false;
    // this.isParaFormularioQualificacao = false;
    // this.isParaFormularioExtensao = false;
    // this.isParaFormularioPesquisa = false;
    // this.isParaFormularioProducao = false;
    // this.isParaFormularioRepresentacao = false;
    // this.tituloPagina = 'IF';
  }

  public _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  public _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  public _toggleDock(): void {
    this._dock = !this._dock;
  }

  // Click fora do menu para fechar
  public _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
     this.isParaFormularioQualificacao = true;
    // this.isParaFormularioIdentificacao = false;
    // this.isParaFormularioEnsino = false;
    // this.isParaFormularioQualificacao = false;
    // this.isParaFormularioExtensao = false;
    // this.isParaFormularioPesquisa = false;
    // this.isParaFormularioProducao = false;
    // this.isParaFormularioRepresentacao = false;
    // this.isParaFinalizacao = false;
    // this.tituloPagina = 'IF';
  }

  public _toggleCloseOnClickBackdrop(): void {
    //this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  public _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  public _toggleAnimate(): void {
    this._animate = !this._animate;
  }
  public _onBackdropClicked(): void {
  }

  public irParaFormularioQualificacao(): void {
    this.isParaFormularioQualificacao = true;
    this.isParaFormularioIdentificacao = false;
    this.isParaFormularioEnsino = false;
    this.isParaFormularioPesquisa = false;
    this.isParaFormularioExtensao = false;
    this.isParaFormularioProducao = false;
    this.isParaFormularioAtvQualificacao = false;
    this.isParaFormularioRepresentacao = false;
    this.isParaFinalizacao = false;
    this.tituloPagina = 'Qualificação Docente';
  }
  public irParaFormularioIdentificacao(): void {
    this.isParaFormularioIdentificacao = true;
    this.isParaFormularioQualificacao = false;
    this.isParaFormularioEnsino = false;
    this.isParaFormularioPesquisa = false;
    this.isParaFormularioExtensao = false;
    this.isParaFormularioProducao = false;
    this.isParaFormularioAtvQualificacao = false;
    this.isParaFormularioRepresentacao = false;
    this.isParaFinalizacao = false;
    this.tituloPagina = 'Identificação';
  }
  public irParaFormularioEnsino(): void {
    this.isParaFormularioIdentificacao = false;
    this.isParaFormularioQualificacao = false;
    this.isParaFormularioEnsino = true;
    this.isParaFormularioPesquisa = false;
    this.isParaFormularioExtensao = false;
    this.isParaFormularioProducao = false;
    this.isParaFormularioAtvQualificacao = false;
    this.isParaFormularioRepresentacao = false;
    this.isParaFinalizacao = false;
    this.tituloPagina = 'Ensino';
  }
  public irParaFormularioPesquisa(): void {
    this.isParaFormularioIdentificacao = false;
    this.isParaFormularioQualificacao = false;
    this.isParaFormularioEnsino = false;
    this.isParaFormularioPesquisa = true;
    this.isParaFormularioExtensao = false;
    this.isParaFormularioProducao = false;
    this.isParaFormularioAtvQualificacao = false;
    this.isParaFormularioRepresentacao = false;
    this.isParaFinalizacao = false;
    this.tituloPagina = 'Pesquisa';
  }
  public irParaFormularioExtensao(): void {
    this.isParaFormularioIdentificacao = false;
    this.isParaFormularioQualificacao = false;
    this.isParaFormularioEnsino = false;
    this.isParaFormularioPesquisa = false;
    this.isParaFormularioExtensao = true;
    this.isParaFormularioProducao = false;
    this.isParaFormularioAtvQualificacao = false;
    this.isParaFormularioRepresentacao = false;
    this.isParaFinalizacao = false;
    this.tituloPagina = 'Extensão';
  }
  public irParaFormularioProducao(): void {
    this.isParaFormularioIdentificacao = false;
    this.isParaFormularioQualificacao = false;
    this.isParaFormularioEnsino = false;
    this.isParaFormularioPesquisa = false;
    this.isParaFormularioExtensao = false;
    this.isParaFormularioProducao = true;
    this.isParaFormularioAtvQualificacao = false;
    this.isParaFormularioRepresentacao = false;
    this.isParaFinalizacao = false;
    this.tituloPagina = 'Produção Acadêmica Cultural';
  }
  public irParaFormularioAtvQualificacao(): void {
    this.isParaFormularioIdentificacao = false;
    this.isParaFormularioQualificacao = false;
    this.isParaFormularioEnsino = false;
    this.isParaFormularioPesquisa = false;
    this.isParaFormularioExtensao = false;
    this.isParaFormularioProducao = false;
    this.isParaFormularioAtvQualificacao = true;
    this.isParaFormularioRepresentacao = false;
    this.isParaFinalizacao = false;
    this.tituloPagina = 'Atividade de Qualificação';
  }
  public irParaFormularioRepresentacao(): void {
    this.isParaFormularioIdentificacao = false;
    this.isParaFormularioQualificacao = false;
    this.isParaFormularioEnsino = false;
    this.isParaFormularioPesquisa = false;
    this.isParaFormularioExtensao = false;
    this.isParaFormularioProducao = false;
    this.isParaFormularioAtvQualificacao = false;
    this.isParaFormularioRepresentacao = true;
    this.isParaFinalizacao = false;
    this.tituloPagina = 'Representação';
  }
  public irParaFinalizacao(): void {
    this.isParaFormularioIdentificacao = false;
    this.isParaFormularioQualificacao = false;
    this.isParaFormularioEnsino = false;
    this.isParaFormularioPesquisa = false;
    this.isParaFormularioExtensao = false;
    this.isParaFormularioProducao = false;
    this.isParaFormularioAtvQualificacao = false;
    this.isParaFormularioRepresentacao = false;
    this.isParaFinalizacao = true;
    this.tituloPagina = 'Finalizar Formulário';
  }
  public irParaInicio(): void {
    this.router.navigate(['']);
  }
}
