import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IdentificacaoDto} from '../model/identificacao-dto.model';
import {FormularioDto} from '../model/formulario-dto.model';

@Component({
  selector: 'app-formulario-identificacao',
  templateUrl: './formulario-identificacao.component.html',
  styleUrls: ['./formulario-identificacao.component.sass']
})
export class FormularioIdentificacaoComponent implements OnInit {

  relatorio: Array<IdentificacaoDto>;
  identificacao = true;
  @Input() formularioCadastro: FormularioDto;
  constructor() { }

  ngOnInit() {
    setTimeout( () => {this.relatorio = this.montaRelatorio(); }, 1000);
  }
  private montaRelatorio(): Array<IdentificacaoDto> {
    if (this.formularioCadastro.id !== undefined) {
      return this.montaListRelatorio(this.formularioCadastro.identificacao);
    } else if (this.formularioCadastro.id === undefined) {
      if (this.formularioCadastro.identificacao.length === 0) {
        return new Array<IdentificacaoDto>();
      } else {
        return this.montaListRelatorio(this.formularioCadastro.identificacao);
      }
    }
  }
  private montaListRelatorio(listRelatorio: Array<IdentificacaoDto>): Array<IdentificacaoDto> {
    let lista = new Array<IdentificacaoDto>();
    listRelatorio.forEach(identificacao => lista.push(identificacao));
    return lista;
  }

  public formulario: FormGroup = new FormGroup({
    professor: new FormControl(null, [ Validators.required]),
    matricula: new FormControl(null, [Validators.required]),
    anoSemestre: new FormControl(null, [Validators.required, Validators.pattern('(?=.*\\d)(20\\d{2}\\-[1-2])$')]),
    categoriaFuncional: new FormControl('DOCENTE EBTT'),
    email: new FormControl(null, [Validators.email, Validators.required]),
    regimeTrabalho: new FormControl(null, [Validators.required])
  });

  public cadastrarIdentificacao(): void {
    const identificacao: IdentificacaoDto = new IdentificacaoDto(
      this.formulario.value.professor,
      this.formulario.value.matricula,
      this.formulario.value.anoSemestre,
      this.formulario.value.regimeTrabalho,
      this.formulario.value.categoriaFuncional,
      this.formulario.value.email
    );
    this.relatorio.push(identificacao);
    this.formularioCadastro.identificacao.push(identificacao);
    this.formulario.reset();
    this.identificacao = false;
  }
  public remover(identificacao: IdentificacaoDto): void {
    let id = this.relatorio.indexOf(identificacao);
    this.relatorio.splice(id, 1);
    this.formularioCadastro.identificacao.splice(id, 1);
    this.relatorio = new Array<IdentificacaoDto>();
    this.identificacao = true;
  }

}
