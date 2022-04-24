import { Component, OnInit } from '@angular/core';
import { PedidoService } from './pedido.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit {

  constructor(public pedidoService: PedidoService, private httpClient: HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    
    
  }

  concluir(){
    this.httpClient.post('http://localhost:8080/pedidos', this.pedidoService.itens).subscribe((response: any)=>{
      this.router.navigate(['pedido',response.id,'acompanhar'])
    })
  }
}
