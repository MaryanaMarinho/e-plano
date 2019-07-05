import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEnsinoComponent } from './formulario-ensino.component';

describe('FormularioExtensaoComponent', () => {
  let component: FormularioEnsinoComponent;
  let fixture: ComponentFixture<FormularioEnsinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEnsinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
