import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcompanharComponent } from './acompanhar/acompanhar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { GerenciarComponent } from './gerenciar/gerenciar.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  { path: "cardapio", component: CardapioComponent },
  { path: "pedido", component: PedidoComponent },
  { path: "pedido/gerenciar", component: GerenciarComponent },
  { path: "pedido/atualizar", component: AtualizarComponent },
  { path: "pedido/:id/acompanhar", component: AcompanharComponent },
  { path: "", redirectTo: "cardapio", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
