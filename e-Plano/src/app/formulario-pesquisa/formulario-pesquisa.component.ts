import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PesquisaDto} from '../model/pesquisa-dto.model';
import {FormularioDto} from '../model/formulario-dto.model';
import { AtividadeDePesquisa } from '../model/atividade-de-pesquisa.model';
import { ListaDeAtividades } from '../model/lista-de-atividades.model';

@Component({
  selector: 'app-formulario-pesquisa',
  templateUrl: './formulario-pesquisa.component.html',
  styleUrls: ['./formulario-pesquisa.component.sass']
})
export class FormularioPesquisaComponent implements OnInit {

  atividadesDePesquisa = [
    'Orientação de Projeto de Iniciação Cientifica e Tecnológica',
    'Autoria/coordenação de Projeto de Pesquisa',
    'Participação em Projeto de Pesquisa',
    'Coordenação de Núcleo de Pesquisa cadastrado no Diretório de Grupos de Pesquisa do CNPq e certificado pelo IFG',
    'Participação em Núcleo de Pesquisa cadastrado no Diretório de Grupos de Pesquisa do CNPq e certificado pelo IFG'

];
  @Input() formularioCadastro: FormularioDto;
  relatorio: Array<PesquisaDto>;
  constructor() { }

  ngOnInit() {
    this.relatorio = this.montaRelatorio();
  }
  private montaRelatorio(): Array<PesquisaDto> {
    if (this.formularioCadastro.id !== undefined) {
      return this.montaListRelatorio(this.formularioCadastro.pesquisa);
    } else if (this.formularioCadastro.id === undefined) {
      if (this.formularioCadastro.pesquisa.length === 0) {
        return new Array<PesquisaDto>();
      } else {
        return this.montaListRelatorio(this.formularioCadastro.pesquisa);
      }
    }
  }
  private montaListRelatorio(listRelatorio: Array<PesquisaDto>): Array<PesquisaDto> {
    let lista = new Array<PesquisaDto>();
    listRelatorio.forEach(pesquisa => lista.push(pesquisa));
    return lista;
  }

  public formulario: FormGroup = new FormGroup({
    pesquisa: new FormControl(null, [ Validators.required]),
    descricao: new FormControl(null, [Validators.required]),
    cargaHOuPontuacao: new FormControl(null, [Validators.required]),
  });

  public selecionarObjeto(atividadeSelecionada: any): void {
    
    // Procura o objeto selecionado
    let atividadePesquisa: AtividadeDePesquisa = this.objAtividadesDePesquisa.find(atividade => atividade.atividade === atividadeSelecionada);
    //console.log("OK");
    //console.log(atividadePesquisa.valorMax);
    this.formulario.controls['cargaHOuPontuacao'].setValidators([Validators.max(atividadePesquisa.valorMax)]);
  }

  public cadastrarPesquisa(): void {
    const pesquisa: PesquisaDto = new PesquisaDto(
      this.formulario.value.pesquisa,
      this.formulario.value.descricao,
      this.formulario.value.cargaHOuPontuacao
    );
    this.relatorio.push(pesquisa);
    this.formularioCadastro.pesquisa.push(pesquisa);
    this.formulario.reset();
  }
  public remover(pesquisa: PesquisaDto): void {
    let id = this.relatorio.indexOf(pesquisa);
    this.relatorio.splice(id, 1);
    this.formularioCadastro.pesquisa.splice(id, 1);
  }

  objAtividadesDePesquisa: AtividadeDePesquisa[] = new ListaDeAtividades().getListaAtividadePesquisa();

}
