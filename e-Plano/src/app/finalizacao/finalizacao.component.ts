import {Component, Input, OnInit, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {FormularioDto} from '../model/formulario-dto.model';
import {FormularioPlanoSemestralService} from '../formulario-plano-semestral.service';
import { AtividadeDeExtensao } from '../model/atividade-de-extensao.model';
import { AtividadeDeEnsino } from '../model/atividade-de-ensino.model';
import { AtividadeDePesquisa } from '../model/atividade-de-pesquisa.model';
import { AtividadeDeProducao } from '../model/atividade-de-producao.model';
import { AtividadeDeRepresentacao } from '../model/atividade-de-representacao.model';
import { ListaDeAtividades } from '../model/lista-de-atividades.model';
import { AtividadeDeAtvQualificacao } from '../model/atividade-de-atv-qualificacao.model';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.sass']
})
export class FinalizacaoComponent implements OnInit {

  idRetorno = 0;
  @Input() idSalvo;
  @Input() formularioCadastro: FormularioDto;
  relatorioIdentificacao;
  relatorioQualificacao;
  relatorioEnsino;
  relatorioPesquisa;
  relatorioExtensao;
  relatorioProducaoAcademica;
  relatorioAtvQualificacao;
  relatorioRepresentacao;

  total: number = 0;

  objAtividadesDeEnsinos: AtividadeDeEnsino[] = new ListaDeAtividades().getListaAtividadeEnsino();
  objAtividadesDeExtensao: AtividadeDeExtensao[] = new ListaDeAtividades().getListaAtividadeExtensao();
  objAtividadesDePesquisa: AtividadeDePesquisa[] = new ListaDeAtividades().getListaAtividadePesquisa();
  objAtividadesDeProducao: AtividadeDeProducao[] = new ListaDeAtividades().getListaAtividadeProducao();
  objAtividadesDeRepresentacao: AtividadeDeRepresentacao[] = new ListaDeAtividades().getListaAtividadeRepresentacao();
  objAtividadesDeAtvQualificacoes: AtividadeDeAtvQualificacao[] = new ListaDeAtividades().getListaAtividadeAtvQualificacao();
  
  constructor(private service: FormularioPlanoSemestralService) { }

  ngOnInit() {
    //setTimeout( () => {
      this.relatorioIdentificacao = this.formularioCadastro.identificacao;
      this.relatorioQualificacao = this.formularioCadastro.qualificacao;
      this.relatorioEnsino = this.formularioCadastro.ensino;
      this.relatorioPesquisa = this.formularioCadastro.pesquisa;
      this.relatorioExtensao = this.formularioCadastro.extensao;
      this.relatorioProducaoAcademica = this.formularioCadastro.producaoAcademica;
      this.relatorioAtvQualificacao = this.formularioCadastro.atvQualificacao;
      this.relatorioRepresentacao = this.formularioCadastro.representacao;
      //}, 8000);
  }
  public salvar(): void {

    if(this.formularioCadastro.id !== undefined){
      this.service.atualizaFormularioPlanoSemestral(this.formularioCadastro)
      .then(response => {
        alert("Formulário Atualizado"); 
        this.idSalvo = response;
      })
    }
    else {
      this.service.salvarFormulario(this.formularioCadastro).subscribe(
        (response) => {
          console.log('Ok ', response);
          this.idSalvo = response;
          alert("Formulário Salvo!! Salve o código abaixo para realizar a busca: " + response);
        },
        (error => {
          console.log('ERRO ', error);
        })
      );
    }
  }
  public gerarPDF(): void {
    if(this.idSalvo !== 0){
      window.print();
    } else {
      this.salvar();
    }
    
  }
   

  public geraTotal() {
    let soma=0;
    let totalEnsino=0;
    let totalExtensao=0;
    let totalPesquisa=0;
    let totalProducao=0;
    let totalRepresentacao=0;
    let totalAtvQualificacao=0;

    for(let atividade of this.objAtividadesDeEnsinos) {
      if(this.formularioCadastro.ensino.length > 0) {    
        for(let x of this.formularioCadastro.ensino) {
          
          if(x.ensino === atividade.atividade){
            totalEnsino += x.cargaHOuPontuacao * atividade.valorPonderacao;

          }    
        }
      }
      
    }

    for(let atividade of this.objAtividadesDeExtensao) {
      if(this.formularioCadastro.extensao.length > 0) {    
        for(let x of this.formularioCadastro.extensao) {
          
          if(x.extensao === atividade.atividade){
            totalExtensao += x.cargaHOuPontuacao * atividade.valorPonderacao;

          }    
        }
      }
      
    }

    for(let atividade of this.objAtividadesDePesquisa) {
      if(this.formularioCadastro.pesquisa.length > 0) {    
        for(let x of this.formularioCadastro.pesquisa) {
          
          if(x.pesquisa === atividade.atividade){
            totalPesquisa += x.cargaHOuPontuacao * atividade.valorPonderacao;

          }    
        }
      }
      
    }

    for(let atividade of this.objAtividadesDeProducao) {
      if(this.formularioCadastro.producaoAcademica.length > 0) {    
        for(let x of this.formularioCadastro.producaoAcademica) {
          
          if(x.producaoAcademica === atividade.atividade){
            totalProducao += x.cargaHOuPontuacao * atividade.valorPonderacao;

          }    
        }
      }
      
    }

    for(let atividade of this.objAtividadesDeRepresentacao) {
      if(this.formularioCadastro.representacao.length > 0) {    
        for(let x of this.formularioCadastro.representacao) {
          
          if(x.representacao === atividade.atividade){
            totalRepresentacao += x.cargaHOuPontuacao * atividade.valorPonderacao;

          }    
        }
      }
      
    }

    for(let atividade of this.objAtividadesDeAtvQualificacoes) {
      if(this.formularioCadastro.atvQualificacao.length > 0) {    
        for(let x of this.formularioCadastro.atvQualificacao) {
          
          if(x.atvQualificacao === atividade.atividade){
            totalAtvQualificacao += x.cargaHOuPontuacao * atividade.valorPonderacao;

          }    
        }
      }
      
    }
    soma = totalEnsino + totalExtensao + totalPesquisa + totalProducao + totalRepresentacao + totalAtvQualificacao;
    return soma; 
  }
  
  public getAtividadeRealizadaEnsino(objAtividadesDeEnsinos) {
    
    if(this.formularioCadastro.ensino.length > 0) {  
      for(let x of this.formularioCadastro.ensino) {
        if(x.ensino === objAtividadesDeEnsinos.atividade){
          return x.cargaHOuPontuacao;
        }    
      }
      return 0;
    }
    else {
      return 0;
    }
  }

  public calculoPontosEnsino(objAtividadesDeEnsinos) {
    if(this.formularioCadastro.ensino.length > 0) {    
      for(let x of this.formularioCadastro.ensino) {
        
        if(x.ensino === objAtividadesDeEnsinos.atividade){
          return x.cargaHOuPontuacao * objAtividadesDeEnsinos.valorPonderacao;

        }    
      }
      
      return 0;
    }
    else {
      return 0;
    }
  }

  public getAtividadeRealizadaExtensao(objAtividadesDeExtensao) {
    
    if(this.formularioCadastro.extensao.length > 0) {   
      for(let x of this.formularioCadastro.extensao) {
        if(x.extensao === objAtividadesDeExtensao.atividade){
          return x.cargaHOuPontuacao;
        }    
      }
      return 0;
    }
    else {
      return 0;
    }
  }

  public calculoPontosExtensao(objAtividadesDeExtensao) {
    if(this.formularioCadastro.extensao.length > 0) {   
      for(let x of this.formularioCadastro.extensao) {
        if(x.extensao === objAtividadesDeExtensao.atividade){
          return x.cargaHOuPontuacao * objAtividadesDeExtensao.valorPonderacao;
        }    
      }
      return 0;
    }
    else {
      return 0;
    }
  }

  public getAtividadeRealizadaPesquisa(objAtividadesDePesquisa) {
    
    if(this.formularioCadastro.pesquisa.length > 0) {   
      for(let x of this.formularioCadastro.pesquisa) {
        if(x.pesquisa === objAtividadesDePesquisa.atividade){
          return x.cargaHOuPontuacao;
        }    
      }
      return 0;
    }
    else {
      return 0;
    }
  }

  public calculoPontosPesquisa(objAtividadesDePesquisa) {
    if(this.formularioCadastro.pesquisa.length > 0) {   
      for(let x of this.formularioCadastro.pesquisa) {
        if(x.pesquisa === objAtividadesDePesquisa.atividade){
          return x.cargaHOuPontuacao * objAtividadesDePesquisa.valorPonderacao;
        }    
      }
      return 0;
    }
    else {
      return 0;
    }
  }

  public getAtividadeRealizadaProducao(objAtividadesDeProducao) {
    
    if(this.formularioCadastro.producaoAcademica.length > 0) {   
      for(let x of this.formularioCadastro.producaoAcademica) {
        if(x.producaoAcademica === objAtividadesDeProducao.atividade){
          return x.cargaHOuPontuacao;
        }    
      }
      return 0;
    }
    else {
      return 0;
    }
  }

  public calculoPontosProducao(objAtividadesDeProducao) {
    if(this.formularioCadastro.producaoAcademica.length > 0) {   
      for(let x of this.formularioCadastro.producaoAcademica) {
        if(x.producaoAcademica === objAtividadesDeProducao.atividade){
          return x.cargaHOuPontuacao * objAtividadesDeProducao.valorPonderacao;
        }    
      }
      return 0;
    }
    else {
      return 0;
    }
  }

  public getAtividadeRealizadaRepresentacao(objAtividadesDeRepresentacao) {
    
    if(this.formularioCadastro.representacao.length > 0) {   
      for(let x of this.formularioCadastro.representacao) {
        if(x.representacao === objAtividadesDeRepresentacao.atividade){
          return x.cargaHOuPontuacao;
        }    
      }
      return 0;
    }
    else {
      return 0;
    }
  }

  public calculoPontosRepresentacao(objAtividadesDeRepresentacao) {
    if(this.formularioCadastro.representacao.length > 0) {   
      for(let x of this.formularioCadastro.representacao) {
        if(x.representacao === objAtividadesDeRepresentacao.atividade){
          return x.cargaHOuPontuacao * objAtividadesDeRepresentacao.valorPonderacao;
        }    
      }
      return 0;
    }
    else {
      return 0;
    }
  }

  public getAtividadeRealizadaAtvQualificacao(objAtividadesDeAtvQualificacoes) {
    
    if(this.formularioCadastro.atvQualificacao.length > 0) {   
      for(let x of this.formularioCadastro.atvQualificacao) {
        if(x.atvQualificacao === objAtividadesDeAtvQualificacoes.atividade){
          return x.cargaHOuPontuacao;
        }    
      }
      return 0;
    }
    else {
      return 0;
    }
  }

  public calculoPontosAtvQualificacao(objAtividadesDeAtvQualificacoes) {
    if(this.formularioCadastro.atvQualificacao.length > 0) {   
      for(let x of this.formularioCadastro.atvQualificacao) {
        if(x.atvQualificacao === objAtividadesDeAtvQualificacoes.atividade){
          return x.cargaHOuPontuacao * objAtividadesDeAtvQualificacoes.valorPonderacao;
        }    
      }
      return 0;
    }
    else {
      return 0;
    }
  }
  
  
}
