import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormularioPlanoSemestralService } from '../formulario-plano-semestral.service';
import { FormularioDto } from '../model/formulario-dto.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router, private service: FormularioPlanoSemestralService) { }

  ngOnInit() {
  }

  public irParaFormulario(): void {
    this.router.navigate(['/formularios']);
  }

  public buscarPorId(): void {
    this.service.getFormularioPlanoSemestral(this.formulario.value.id)
    .then((response : FormularioDto) => {
    this.router.navigate([`/formularios/${this.formulario.value.id}`]);
    });
  }

  public formulario: FormGroup  = new FormGroup({
    id: new FormControl(null, [ Validators.required])
  });
}
