import { Component, OnInit, Input } from '@angular/core';
import { FormularioDto } from '../model/formulario-dto.model';
import { AtvQualificacaoDto } from '../model/atv-qualificacao-dto.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListaDeAtividades } from '../model/lista-de-atividades.model';
import { AtividadeDeAtvQualificacao } from '../model/atividade-de-atv-qualificacao.model';

@Component({
  selector: 'app-formulario-atv-qualificacao',
  templateUrl: './formulario-atv-qualificacao.component.html',
  styleUrls: ['./formulario-atv-qualificacao.component.sass']
})
export class FormularioAtvQualificacaoComponent implements OnInit {

  atividadeDeQualificacao = [
    'Matrícula em curso de Especialização',
    'Matrícula em Programa de Mestrado',
    'Matrícula em Programa de Doutorado',
  ];

  @Input() formularioCadastro: FormularioDto;
  relatorio: Array<AtvQualificacaoDto>;

  constructor() { }

  ngOnInit() {
    this.relatorio = this.montaRelatorio();
  }

  private montaRelatorio(): Array<AtvQualificacaoDto> {
    if (this.formularioCadastro.id !== undefined) {
      return this.montaListRelatorio(this.formularioCadastro.atvQualificacao);
    } else if (this.formularioCadastro.id === undefined) {
      if (this.formularioCadastro.atvQualificacao.length === 0) {
        return new Array<AtvQualificacaoDto>();
      } else {
        return this.montaListRelatorio(this.formularioCadastro.atvQualificacao);
      }
    }
  }

  private montaListRelatorio(listRelatorio: Array<AtvQualificacaoDto>): Array<AtvQualificacaoDto> {
    let lista = new Array<AtvQualificacaoDto>();
    listRelatorio.forEach(atvQualificacao => lista.push(atvQualificacao));
    return lista;
  }

  public formulario: FormGroup = new FormGroup({
    atvQualificacao: new FormControl(null, [ Validators.required]),
    descricao: new FormControl(null, [Validators.required]),
    cargaHOuPontuacao: new FormControl(null, [Validators.required]),
  });

  public selecionarObjeto(atividadeSelecionada: any): void {
    
    // Procura o objeto selecionado
    let atividadeAtvQualificacao: AtividadeDeAtvQualificacao = this.objAtividadesDeAtvQualificacoes.find(atividade => atividade.atividade === atividadeSelecionada);
    //console.log("OK");
    //console.log(atividadeAtvQualificacao.valorMax);
    this.formulario.controls['cargaHOuPontuacao'].setValidators([Validators.max(atividadeAtvQualificacao.valorMax)]);
  }

  public cadastrarAtvQualificacao(): void {
    const atvQualificacao: AtvQualificacaoDto = new AtvQualificacaoDto(
      this.formulario.value.atvQualificacao,
      this.formulario.value.descricao,
      this.formulario.value.cargaHOuPontuacao
    );
    this.relatorio.push(atvQualificacao);
    this.formularioCadastro.atvQualificacao.push(atvQualificacao);
    this.formulario.reset();
  }

  public remover(atvQualificacao: AtvQualificacaoDto): void {
    let id = this.relatorio.indexOf(atvQualificacao);
    this.relatorio.splice(id, 1);
    this.formularioCadastro.atvQualificacao.splice(id, 1);
    // this.relatorio = [...this.relatorio];
  }

  objAtividadesDeAtvQualificacoes: AtividadeDeAtvQualificacao[] = new ListaDeAtividades().getListaAtividadeAtvQualificacao();

}
