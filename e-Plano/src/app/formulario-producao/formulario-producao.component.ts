import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProducaoAcademicaDto} from '../model/producao-academica-dto.model';
import {FormularioDto} from '../model/formulario-dto.model';
import { AtividadeDeProducao } from '../model/atividade-de-producao.model';
import { ListaDeAtividades } from '../model/lista-de-atividades.model';

@Component({
  selector: 'app-formulario-producao',
  templateUrl: './formulario-producao.component.html',
  styleUrls: ['./formulario-producao.component.sass']
})
export class FormularioProducaoComponent implements OnInit {

  atividadesDeProducao = [
    'Autoria de livro',
    'Autoria de capítulo de livro',
    'Publicação de artigo em periódicos Qualis A ou B',
    'Apresentação de trabalho, palestra e mesa-redonda',
    'Obra, curadoria e mostra'
  ];
  @Input() formularioCadastro: FormularioDto;
  relatorio: Array<ProducaoAcademicaDto>;
  constructor() { }

  ngOnInit() {
    this.relatorio = this.montaRelatorio();
  }
  private montaRelatorio(): Array<ProducaoAcademicaDto> {
    if (this.formularioCadastro.id !== undefined) {
      return this.montaListRelatorio(this.formularioCadastro.producaoAcademica);
    } else if (this.formularioCadastro.id === undefined) {
      if (this.formularioCadastro.producaoAcademica.length === 0) {
        return new Array<ProducaoAcademicaDto>();
      } else {
        return this.montaListRelatorio(this.formularioCadastro.producaoAcademica);
      }
    }
  }
  private montaListRelatorio(listRelatorio: Array<ProducaoAcademicaDto>): Array<ProducaoAcademicaDto> {
    let lista = new Array<ProducaoAcademicaDto>();
    listRelatorio.forEach(producao => lista.push(producao));
    return lista;
  }
  public formulario: FormGroup = new FormGroup({
    producaoAcademica: new FormControl(null, [ Validators.required]),
    descricao: new FormControl(null, [Validators.required]),
    cargaHOuPontuacao: new FormControl(null, [Validators.required]),
  });

  public selecionarObjeto(atividadeSelecionada: any): void {
    
    // Procura o objeto selecionado
    let atividadeProducao: AtividadeDeProducao = this.objAtividadesDeProducao.find(atividade => atividade.atividade === atividadeSelecionada);
    //console.log("OK");
    //console.log(atividadeProducao.valorMax);
    this.formulario.controls['cargaHOuPontuacao'].setValidators([Validators.max(atividadeProducao.valorMax)]);
  }

  public cadastrarProducaoAcademica(): void {
    const producaoAcademica: ProducaoAcademicaDto = new ProducaoAcademicaDto(
      this.formulario.value.producaoAcademica,
      this.formulario.value.descricao,
      this.formulario.value.cargaHOuPontuacao
    );
    this.relatorio.push(producaoAcademica);
    this.formularioCadastro.producaoAcademica.push(producaoAcademica);
    this.formulario.reset();
  }
  public remover(producaoAcamdeica: ProducaoAcademicaDto): void {
    let id = this.relatorio.indexOf(producaoAcamdeica);
    this.relatorio.splice(id, 1);
    this.formularioCadastro.producaoAcademica.splice(id, 1);
  }

  objAtividadesDeProducao: AtividadeDeProducao[] = new ListaDeAtividades().getListaAtividadeProducao();

}
