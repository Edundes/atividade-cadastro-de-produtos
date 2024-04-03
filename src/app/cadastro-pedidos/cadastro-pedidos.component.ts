import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-cadastro-pedidos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-pedidos.component.html',
  styleUrl: './cadastro-pedidos.component.css',
})
export class CadastroPedidosComponent {
  numeroPedido = 0;
  cpfCliente = '';
  codigoProduto = 0;
  dataDoPedido = '';
  quantidadeDeProdutos = 0;

  constructor(private pedidoService: PedidoService) {}

  adicionarPedido() {
    this.pedidoService.adicionarPedido({
      numeroPedido: this.numeroPedido,
      cpfCliente: this.cpfCliente,
      codigoProduto: this.codigoProduto,
      dataDoPedido: this.dataDoPedido,
      quantidadeDeProdutos: this.quantidadeDeProdutos,
    });
  }
}
