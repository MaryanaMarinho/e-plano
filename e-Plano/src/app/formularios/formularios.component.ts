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
  private _opened: boolean = false;
  private _modeNum: number = 0;
  private _positionNum: number = 0;
  private _dock: boolean = false;
  private _closeOnClickOutside: boolean = true;
  private _closeOnClickBackdrop: boolean = false;
  private _showBackdrop: boolean = true;
  private _animate: boolean = true;

  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

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
  private _toggleOpened(): void {
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

  private _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  private _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  private _toggleDock(): void {
    this._dock = !this._dock;
  }

  // Click fora do menu para fechar
  private _toggleCloseOnClickOutside(): void {
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

  private _toggleCloseOnClickBackdrop(): void {
    //this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  private _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  private _toggleAnimate(): void {
    this._animate = !this._animate;
  }
  private _onBackdropClicked(): void {
  }

  private irParaFormularioQualificacao(): void {
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
  private irParaFormularioIdentificacao(): void {
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
  private irParaFormularioEnsino(): void {
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
  private irParaFormularioPesquisa(): void {
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
  private irParaFormularioExtensao(): void {
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
  private irParaFormularioProducao(): void {
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
  private irParaFormularioAtvQualificacao(): void {
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
  private irParaFormularioRepresentacao(): void {
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
  private irParaFinalizacao(): void {
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
