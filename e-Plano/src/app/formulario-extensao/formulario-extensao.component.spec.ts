import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioExtensaoComponent } from './formulario-extensao.component';

describe('FormularioExtensaoComponent', () => {
  let component: FormularioExtensaoComponent;
  let fixture: ComponentFixture<FormularioExtensaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioExtensaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioExtensaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
