import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormularioIdentificacaoComponent } from './formulario-identificacao/formulario-identificacao.component';
import { InicioComponent } from './inicio/inicio.component';
import {SidebarModule} from 'ng-sidebar';
import { FormulariosComponent } from './formularios/formularios.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormularioQualificacaoComponent} from './formulario-qualificacao/formulario-qualificacao.component';
import {FormularioEnsinoComponent} from './formulario-ensino/formulario-ensino.component';
import {FormularioPesquisaComponent} from './formulario-pesquisa/formulario-pesquisa.component';
import {FormularioExtensaoComponent} from './formulario-extensao/formulario-extensao.component';
import {FormularioProducaoComponent} from './formulario-producao/formulario-producao.component';
import {FormularioRepresentacaoComponent} from './formulario-representacao/formulario-representacao.component';
import { FinalizacaoComponent } from './finalizacao/finalizacao.component';
import {FormularioPlanoSemestralService} from './formulario-plano-semestral.service';
import {HttpClientModule} from '@angular/common/http';
import { PdfComponent } from './pdf/pdf.component';
import { FormularioAtvQualificacaoComponent } from './formulario-atv-qualificacao/formulario-atv-qualificacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FormularioIdentificacaoComponent,
    InicioComponent,
    FormulariosComponent,
    FormularioQualificacaoComponent,
    FormularioEnsinoComponent,
    FormularioPesquisaComponent,
    FormularioExtensaoComponent,
    FormularioProducaoComponent,
    FormularioRepresentacaoComponent,
    FinalizacaoComponent,
    PdfComponent,
    FormularioAtvQualificacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormularioPlanoSemestralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
