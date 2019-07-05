import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProducaoComponent } from './formulario-producao.component';

describe('FormularioExtensaoComponent', () => {
  let component: FormularioProducaoComponent;
  let fixture: ComponentFixture<FormularioProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
