import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ExtensaoDto} from '../model/extensao-dto.model';
import {FormularioDto} from '../model/formulario-dto.model';
import { AtividadeDeExtensao } from '../model/atividade-de-extensao.model';
import { ListaDeAtividades } from '../model/lista-de-atividades.model';

@Component({
  selector: 'app-formulario-extensao',
  templateUrl: './formulario-extensao.component.html',
  styleUrls: ['./formulario-extensao.component.sass']
})
export class FormularioExtensaoComponent implements OnInit {

  atividadesDeExtensao = [
    'Planejamento e regêngia de aulas em cursos de Formação Inicial e Continuada (FIC)',
    'Autoria/coordenação de Projeto de Extensao',
    'Participação em Projeto de Extensao',
    'Orientação de Projeto de Extensao'

  ];
  @Input() formularioCadastro: FormularioDto;
  relatorio: Array<ExtensaoDto>;
  constructor() { }

  ngOnInit() {
    this.relatorio = this.montaRelatorio();
  }

  private montaRelatorio(): Array<ExtensaoDto> {
    if (this.formularioCadastro.id !== undefined) {
      return this.montaListRelatorio(this.formularioCadastro.extensao);
    } else if (this.formularioCadastro.id === undefined) {
      if (this.formularioCadastro.extensao.length === 0) {
        return new Array<ExtensaoDto>();
      } else {
        return this.montaListRelatorio(this.formularioCadastro.extensao);
      }
    }
  }
  private montaListRelatorio(listRelatorio: Array<ExtensaoDto>): Array<ExtensaoDto> {
    let lista = new Array<ExtensaoDto>();
    listRelatorio.forEach(extensao => lista.push(extensao));
    return lista;
  }

  public formulario: FormGroup = new FormGroup({
    extensao: new FormControl(null, [ Validators.required]),
    descricao: new FormControl(null, [Validators.required]),
    cargaHOuPontuacao: new FormControl(null, [Validators.required]),
  });

  public selecionarObjeto(atividadeSelecionada: any): void {
    
    // Procura o objeto selecionado
    let atividadeExtensao: AtividadeDeExtensao = this.objAtividadesDeExtensao.find(atividade => atividade.atividade === atividadeSelecionada);
    // console.log("OK");
    // console.log(atividadeExtensao.valorMax);
    this.formulario.controls['cargaHOuPontuacao'].setValidators([Validators.max(atividadeExtensao.valorMax)]);
  }

  public cadastrarExtensao(): void {
    const extensao: ExtensaoDto = new ExtensaoDto(
      this.formulario.value.extensao,
      this.formulario.value.descricao,
      this.formulario.value.cargaHOuPontuacao
    );
    this.relatorio.push(extensao);
    this.formularioCadastro.extensao.push(extensao);
    this.formulario.reset();
  }
  public remover(extensao: ExtensaoDto): void {
    let id = this.relatorio.indexOf(extensao);
    this.relatorio.splice(id, 1);
    this.formularioCadastro.extensao.splice(id, 1);
  }

  objAtividadesDeExtensao: AtividadeDeExtensao[] = new ListaDeAtividades().getListaAtividadeExtensao();

}
