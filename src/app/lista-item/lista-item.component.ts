import { Component, Input, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styles: [
  ]
})
export class ListaItemComponent implements OnInit {
  @Input()
  itens: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  get valorTotal() {
    let valor = 0;
    for (const item of this.itens) {
      valor += item.produto.preco * item.quantidade;
    }
    return valor;
  }


  // "id": 103,
  //   "dataHora": "2022-04-20T14:24:08.766451",
  //   "situacao": "Aguardando",
  //   "itens": [
  //       {
  //           "produto": {
  //               "id": 1,
  //               "categoria": "Sanduiches de Boi",
  //               "descricao": "Hamburguer",
  //               "preco": 14.5
  //           },
  //           "quantidade": 1
  //       },
  //       {
  //           "produto": {
  //               "id": 2,
  //               "categoria": "Sanduiches de Boi",
  //               "descricao": "X - Burguer",
  //               "preco": 16.0
  //           },
  //           "quantidade": 1
  //       }
  //   ],

}
