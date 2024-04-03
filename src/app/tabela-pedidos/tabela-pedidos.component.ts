import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pedido, PedidoService } from '../pedido.service';


@Component({
  selector: 'app-tabela-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-pedidos.component.html',
  styleUrl: './tabela-pedidos.component.css'
})
export class TabelaPedidosComponent {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidos = this.pedidoService.obterPedido();
  }

}
