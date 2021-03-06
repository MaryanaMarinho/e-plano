import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EnsinoDto} from '../model/ensino-dto.model';
import {FormularioDto} from '../model/formulario-dto.model';
import { AtividadeDeEnsino } from '../model/atividade-de-ensino.model';
import { ListaDeAtividades } from '../model/lista-de-atividades.model';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-formulario-ensino',
  templateUrl: './formulario-ensino.component.html',
  styleUrls: ['./formulario-ensino.component.sass']
})
export class FormularioEnsinoComponent implements OnInit {

  contador: number;

  atividadesDeEnsinos = [
    'Planejamento e regência de aulas',
    'Número de turmas',
    'Número de disciplinas',
    'Autoria/coordenação de Projeto de Ensino',
    'Participação em Projeto de Ensino',
    'Atendimento ao discente/pais ou responsável de aluno',
    'Supervisão de estágio curricular',
    'Orientação de Trabalho de Conclusão(TCC)',
    'Orientação de monografia de especialização',
    'Orientação de dissertação de mestrado',
    'Co-orientação de dissertação de mestrado',
    'Orientação de tese de doutorado',
    'Co-orientação de tese de doutorado',
    'Participação em comissões de elaboração/revisão/avaliação de projetos de curso e regulamentos acadêmicos',
    'Participação em comissões de elaboração de projetos de modernização, instalação e supervisão de laboratórios',
    'Participação em reuniões convocadas pela Coordenação, Departamento, Direção-Geral do campus ou Reitoria'
  ];

  @Input() formularioCadastro: FormularioDto;
  relatorio: Array<EnsinoDto>;
  constructor() { }

  ngOnInit() {
    this.relatorio = this.montaRelatorio();
  }

  private montaRelatorio(): Array<EnsinoDto> {
    if (this.formularioCadastro.id !== undefined) {
      return this.montaListRelatorio(this.formularioCadastro.ensino);
    } else if (this.formularioCadastro.id === undefined) {
      if (this.formularioCadastro.ensino.length === 0) {
        return new Array<EnsinoDto>();
      } else {
        return this.montaListRelatorio(this.formularioCadastro.ensino);
      }
    }
  }
  private montaListRelatorio(listRelatorio: Array<EnsinoDto>): Array<EnsinoDto> {
    let lista = new Array<EnsinoDto>();
    listRelatorio.forEach(ensino => lista.push(ensino));
    return lista;
  }

  public formulario: FormGroup = new FormGroup({
    ensino: new FormControl(null, [ Validators.required]),
    descricao: new FormControl(null, [Validators.required]),
    cargaHOuPontuacao: new FormControl(null, [Validators.required]),
  });

  // Validando o tipo de ensino selecionado
  public selecionarObjeto(atividadeSelecionada: any): void {

    // Procura o objeto selecionado
    let atividadeEnsino: AtividadeDeEnsino = this.objAtividadesDeEnsinos.find(atividade => atividade.atividade === atividadeSelecionada);
    //console.log("OK");
    //console.log(atividadeEnsino.valorMax);
    this.formulario.controls['cargaHOuPontuacao'].setValidators([Validators.max(atividadeEnsino.valorMax)]);
  }

  public somatorioAtividade(atvCadastrada: any): void {
    let total:number = 20;
    let soma:number = 0;
    if( total >= soma && atvCadastrada.cargaHOuPontuacao <= (total - soma)) {
      soma += atvCadastrada.cargaHOuPontuacao
      console.log(soma);

    }
    else {
      console.log("Desabilita");

    }
  }

  atividadeSelecionada: boolean = true;

  public validarUnicaEscolha(): void {
    if(this.formularioCadastro.ensino.length > 0 &&
      this.formularioCadastro.ensino.find(ensino => ensino.ensino === this.formulario.value.ensino)){
      //console.log( this.formularioCadastro.ensino.find(ensino => ensino.ensino === this.formulario.value.ensino));
      //this.formulario.controls['ensino'].setValidators([invalid]);
      this.atividadeSelecionada = false;
      console.log(this.atividadeSelecionada);

    }
    else {
      this.atividadeSelecionada = true;
    }

  }

  public cadastrarEnsino(): void {
    const ensisno: EnsinoDto = new EnsinoDto(
      this.formulario.value.ensino,
      this.formulario.value.descricao,
      this.formulario.value.cargaHOuPontuacao,

    );
    this.relatorio.push(ensisno);
    this.formularioCadastro.ensino.push(ensisno);
    this.formulario.reset();


  //   let ensinoSelecionado = this.formulario.value.ensino;

  //   for(let i = 0; i < this.relatorio.length; i++) {

  //     let atividadeEnsino: AtividadeDeEnsino = this.objAtividadesDeEnsinos.find(atividade => atividade.atividade === ensinoSelecionado);
  //     if(this.relatorio.find(ensisno => this.relatorio[i].mapEnsino.has(ensinoSelecionado)) && this.relatorio[i].mapEnsino.get(ensinoSelecionado) <= atividadeEnsino.valorMax){
  //       let valorAtual = this.relatorio[i].mapEnsino.get(ensinoSelecionado);
  //       valorAtual += this.formulario.value.cargaHOuPontuacao;
  //       this.relatorio[i].mapEnsino.set(this.formulario.value.ensino, valorAtual);
  //       this.formularioCadastro.ensino.push(ensisno);
  //       this.formulario.reset();
  //     } else {
  //       if(atividadeEnsino.valorMax >= this.formulario.value.cargaHOuPontuacao) {
  //         this.relatorio[i].mapEnsino.set(this.formulario.value.ensino, this.formulario.value.cargaHOuPontuacao);
  //         this.formularioCadastro.ensino.push(ensisno);
  //         this.formulario.reset();
  //       } else {
  //         this.relatorio.pop();
  //         console.log('Teste', this.relatorio);
  //       }
  //   }
  // }

    // this.relatorio.forEach(ensisno => {
    //   let atividadeEnsino: AtividadeDeEnsino = this.objAtividadesDeEnsinos.find(atividade => atividade.atividade === ensinoSelecionado);
    //   if(this.relatorio.find(ensisno => ensisno.mapEnsino.has(ensinoSelecionado)) && ensisno.mapEnsino.get(ensinoSelecionado) <= atividadeEnsino.valorMax){
    //     let valorAtual = ensisno.mapEnsino.get(ensinoSelecionado);
    //     valorAtual += this.formulario.value.cargaHOuPontuacao;
    //     ensisno.mapEnsino.set(this.formulario.value.ensino, valorAtual);
    //     this.formularioCadastro.ensino.push(ensisno);
    //     this.formulario.reset();
    //   } else {
    //     if(atividadeEnsino.valorMax >= this.formulario.value.cargaHOuPontuacao) {
    //       ensisno.mapEnsino.set(this.formulario.value.ensino, this.formulario.value.cargaHOuPontuacao);
    //       this.formularioCadastro.ensino.push(ensisno);
    //       this.formulario.reset();
    //     } else {
    //       this.relatorio.pop();
    //       console.log('Teste', this.relatorio);
    //     }
    //   }
    // });



    // this.relatorio.forEach(ensino => {
    //   if(ensino.ensino == this.formulario.value.ensino){
    //     let atividadeEnsino: AtividadeDeEnsino = this.objAtividadesDeEnsinos.find(atividade => atividade.atividade === this.formulario.value.ensino);
    //     //if()
    //     ensino.cargaHOuPontuacao;
    //   }
    // })
  }
  public remover(ensino: EnsinoDto): void {
    let id = this.relatorio.indexOf(ensino);
    this.relatorio.splice(id, 1);
    this.formularioCadastro.ensino.splice(id, 1);
    // this.relatorio = [...this.relatorio];
  }

  objAtividadesDeEnsinos: AtividadeDeEnsino[] = new ListaDeAtividades().getListaAtividadeEnsino();

}
