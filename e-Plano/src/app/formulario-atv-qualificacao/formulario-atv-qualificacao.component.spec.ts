import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAtvQualificacaoComponent } from './formulario-atv-qualificacao.component';

describe('FormularioAtvQualificacaoComponent', () => {
  let component: FormularioAtvQualificacaoComponent;
  let fixture: ComponentFixture<FormularioAtvQualificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAtvQualificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAtvQualificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
