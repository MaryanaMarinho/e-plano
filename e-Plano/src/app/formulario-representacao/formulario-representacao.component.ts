import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RepresentacaoDto} from '../model/representacao-dto.model';
import {FormularioDto} from '../model/formulario-dto.model';
import { AtividadeDeRepresentacao } from '../model/atividade-de-representacao.model';
import { ListaDeAtividades } from '../model/lista-de-atividades.model';

@Component({
  selector: 'app-formulario-representacao',
  templateUrl: './formulario-representacao.component.html',
  styleUrls: ['./formulario-representacao.component.sass']
})
export class FormularioRepresentacaoComponent implements OnInit {

  atividadesDeRepresentacao = [
    'Coordenação ou presidência de comissão ou outro fórum permante, constituído por Portaria, com exceção aqueles inerentes ao exercício do cargo de chefia',
    'Participação em conselho, comissão ou outro fórum ou instância de representação da Instituição nomeado por Portaria',
    'Participação em instâncias externas indicado pela Instituição, por meio de Portaria',
    'Participação em comissão organizadora de eventos institucionais, nomeado por Portaria',
    'Organização de eventos e outras atividades definidas pelo Conselho Departamental, Direção-Geral do campus ou Reitoria'
];
  @Input() formularioCadastro: FormularioDto;
  relatorio: Array<RepresentacaoDto>;
  constructor() { }

  ngOnInit() {
    this.relatorio = this.montaRelatorio();
  }
  private montaRelatorio(): Array<RepresentacaoDto> {
    if (this.formularioCadastro.id !== undefined) {
      return this.montaListRelatorio(this.formularioCadastro.representacao);
    } else if (this.formularioCadastro.id === undefined) {
      if (this.formularioCadastro.representacao.length === 0) {
        return new Array<RepresentacaoDto>();
      } else {
        return this.montaListRelatorio(this.formularioCadastro.representacao);
      }
    }
  }
  private montaListRelatorio(listRelatorio: Array<RepresentacaoDto>): Array<RepresentacaoDto> {
    let lista = new Array<RepresentacaoDto>();
    listRelatorio.forEach(representacao => lista.push(representacao));
    return lista;
  }
  public formulario: FormGroup = new FormGroup({
    representacao: new FormControl(null, [ Validators.required]),
    descricao: new FormControl(null, [Validators.required]),
    cargaHOuPontuacao: new FormControl(null, [Validators.required]),
  });

  public selecionarObjeto(atividadeSelecionada: any): void {
    
    // Procura o objeto selecionado
    let atividadeRepresentacao: AtividadeDeRepresentacao = this.objAtividadesDeRepresentacao.find(atividade => atividade.atividade === atividadeSelecionada);
    //console.log("OK");
    //console.log(atividadeRepresentacao.valorMax);
    this.formulario.controls['cargaHOuPontuacao'].setValidators([Validators.max(atividadeRepresentacao.valorMax)]);
  }

  public cadastrarRepresentacao(): void {
    const representacao: RepresentacaoDto = new RepresentacaoDto(
      this.formulario.value.representacao,
      this.formulario.value.descricao,
      this.formulario.value.cargaHOuPontuacao
    );
    this.relatorio.push(representacao);
    this.formularioCadastro.representacao.push(representacao);
    this.formulario.reset();
  }
  public remover(representacao: RepresentacaoDto): void {
    let id = this.relatorio.indexOf(representacao);
    this.relatorio.splice(id, 1);
    this.formularioCadastro.representacao.splice(id, 1);
  }

  objAtividadesDeRepresentacao: AtividadeDeRepresentacao[] = new ListaDeAtividades().getListaAtividadeRepresentacao();

}
