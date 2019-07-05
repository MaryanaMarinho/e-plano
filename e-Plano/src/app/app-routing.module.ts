import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {FormulariosComponent} from './formularios/formularios.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'formularios', component: FormulariosComponent},
  { path: 'formularios/:id', component: FormulariosComponent}
  //{ path: 'teste', component: PdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
