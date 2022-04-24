import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PedidoComponent } from './pedido/pedido.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AcompanharComponent } from './acompanhar/acompanhar.component';
import { GerenciarComponent } from './gerenciar/gerenciar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { ListaItemComponent } from './lista-item/lista-item.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent,
    PedidoComponent,
    AcompanharComponent,
    GerenciarComponent,
    AtualizarComponent,
    ListaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
