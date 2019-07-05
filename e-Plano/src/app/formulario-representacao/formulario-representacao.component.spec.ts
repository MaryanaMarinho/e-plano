import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRepresentacaoComponent } from './formulario-representacao.component';

describe('FormularioExtensaoComponent', () => {
  let component: FormularioRepresentacaoComponent;
  let fixture: ComponentFixture<FormularioRepresentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRepresentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRepresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
