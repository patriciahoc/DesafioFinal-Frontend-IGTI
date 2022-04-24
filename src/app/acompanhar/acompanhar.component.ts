import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { AcompanharService } from '../acompanhar/acompanhar.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acompanhar',
  templateUrl: './acompanhar.component.html',
  styles: [
  ]
})
export class AcompanharComponent implements OnInit {

  pedido: any;

  constructor( private httpClient: HttpClient, 
    public acompanharService : AcompanharService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.httpClient.get<any>(`http://localhost:8080/pedidos/${params.id}`).subscribe(response => {
        this.pedido = response;
      })
    })
    
  }

}
