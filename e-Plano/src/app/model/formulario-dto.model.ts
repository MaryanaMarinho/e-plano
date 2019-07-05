import {IdentificacaoDto} from './identificacao-dto.model';
import {QualificacaoDto} from './qualificacao-dto.model';
import {EnsinoDto} from './ensino-dto.model';
import {PesquisaDto} from './pesquisa-dto.model';
import {ExtensaoDto} from './extensao-dto.model';
import {ProducaoAcademicaDto} from './producao-academica-dto.model';
import {RepresentacaoDto} from './representacao-dto.model';
import { AtvQualificacaoDto } from './atv-qualificacao-dto.model';

export class FormularioDto {

  public id: string;
  public identificacao: Array<IdentificacaoDto> = new Array<IdentificacaoDto>();
  public qualificacao: Array<QualificacaoDto> = new Array<QualificacaoDto>();
  public ensino: Array<EnsinoDto> = new Array<EnsinoDto>();
  public pesquisa: Array<PesquisaDto> = new Array<PesquisaDto>();
  public extensao: Array<ExtensaoDto> = new Array<ExtensaoDto>();
  public producaoAcademica: Array<ProducaoAcademicaDto> = new Array<ProducaoAcademicaDto>();
  public atvQualificacao: Array<AtvQualificacaoDto> = new Array<AtvQualificacaoDto>();
  public representacao: Array<RepresentacaoDto> = new Array<RepresentacaoDto>();

  constructor() {
  }

  get getId(): string {
    return this.id;
  }
  setId(id: string): void {
    this.id = id;
  }
  get getIdentificacao(): Array<IdentificacaoDto> {
    return this.identificacao;
  }
  setIdentificacao(identificacao: IdentificacaoDto): void {
    this.identificacao.push(identificacao);
  }
  get getQualificacao(): Array<QualificacaoDto> {
    return this.qualificacao;
  }
  setQualificacao(qualificacao: QualificacaoDto): void {
    this.qualificacao.push(qualificacao);
  }
  get getEnsino(): Array<EnsinoDto> {
    return this.ensino;
  }
  setEnsino(ensino: EnsinoDto): void {
    this.ensino.push(ensino);
  }
  get getPesquisa(): Array<PesquisaDto> {
    return this.pesquisa;
  }
  setPesquisa(pesquisa: PesquisaDto): void {
    this.pesquisa.push(pesquisa);
  }
  get getExtensao(): Array<ExtensaoDto> {
    return this.extensao;
  }
  setExtensao(extensao: ExtensaoDto): void {
    this.extensao.push(extensao);
  }
  get getProducaoAcademica(): Array<ProducaoAcademicaDto> {
    return this.producaoAcademica;
  }
  setProducaoAcademica(producaoAcademica: ProducaoAcademicaDto): void {
    this.producaoAcademica.push(producaoAcademica);
  }
  get getAtvQualificacao(): Array<AtvQualificacaoDto> {
    return this.atvQualificacao;
  }
  setAtvQualificacao(atvQualificacao: AtvQualificacaoDto): void {
    this.atvQualificacao.push(atvQualificacao);
  }
  get getRepresentacao(): Array<RepresentacaoDto> {
    return this.representacao;
  }
  setRepresentacao(representacao: RepresentacaoDto): void {
    this.representacao.push(representacao);
  }
}
