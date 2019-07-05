import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QualificacaoDto} from '../model/qualificacao-dto.model';
import {FormularioDto} from '../model/formulario-dto.model';

@Component({
  selector: 'app-formulario-qualificacao',
  templateUrl: './formulario-qualificacao.component.html',
  styleUrls: ['./formulario-qualificacao.component.sass']
})
export class FormularioQualificacaoComponent implements OnInit {

  @Input() formularioCadastro: FormularioDto;
  relatorio: Array<QualificacaoDto>;
  constructor() { }

  ngOnInit() {
    this.relatorio = this.montaRelatorio();
  }
  private montaRelatorio(): Array<QualificacaoDto> {
    if (this.formularioCadastro.id !== undefined) {
      return this.montaListRelatorio(this.formularioCadastro.qualificacao);
    } else if (this.formularioCadastro.id === undefined) {
      if (this.formularioCadastro.qualificacao.length === 0) {
        return new Array<QualificacaoDto>();
      } else {
        return this.montaListRelatorio(this.formularioCadastro.qualificacao);
      }
    }
  }
  private montaListRelatorio(listRelatorio: Array<QualificacaoDto>): Array<QualificacaoDto> {
    let lista = new Array<QualificacaoDto>();
    listRelatorio.forEach(qualificacao => lista.push(qualificacao));
    return lista;
  }
  public formulario: FormGroup = new FormGroup({
    instituicao: new FormControl(null, [ Validators.required]),
    formacao: new FormControl(null, [Validators.required]),
    curso: new FormControl(null, [Validators.required]),
  });

  public cadastrarQualificacao(): void {
    const qualificacao: QualificacaoDto = new QualificacaoDto(
      this.formulario.value.instituicao,
      this.formulario.value.formacao,
      this.formulario.value.curso
    );
    this.relatorio.push(qualificacao);
    this.formularioCadastro.qualificacao.push(qualificacao);
    this.formulario.reset();
  }
  public remover(qualificacao: QualificacaoDto): void {
    let id = this.relatorio.indexOf(qualificacao);
    this.relatorio.splice(id, 1);
    this.formularioCadastro.qualificacao.splice(id, 1);
  }

}
