import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPesquisaComponent } from './formulario-pesquisa.component';

describe('FormularioExtensaoComponent', () => {
  let component: FormularioPesquisaComponent;
  let fixture: ComponentFixture<FormularioPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
