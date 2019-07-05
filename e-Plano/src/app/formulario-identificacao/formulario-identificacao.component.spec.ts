import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIdentificacaoComponent } from './formulario-identificacao.component';

describe('FormularioExtensaoComponent', () => {
  let component: FormularioIdentificacaoComponent;
  let fixture: ComponentFixture<FormularioIdentificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioIdentificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIdentificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
