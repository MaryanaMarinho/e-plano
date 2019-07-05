import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioQualificacaoComponent } from './formulario-qualificacao.component';

describe('FormularioExtensaoComponent', () => {
  let component: FormularioQualificacaoComponent;
  let fixture: ComponentFixture<FormularioQualificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioQualificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioQualificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
