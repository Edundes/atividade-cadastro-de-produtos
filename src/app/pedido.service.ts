import { Injectable } from '@angular/core';


export interface Pedido {

  numeroPedido: number;
  cpfCliente: string;
  codigoProduto: number;
  dataDoPedido: string;
  quantidadeDeProdutos: number;

}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private pedidos: Pedido[] = [];

  constructor() { }

  adicionarPedido(pedido: Pedido) {
    this.pedidos.push(pedido);
  }

  obterPedido(): Pedido[] {
    return this.pedidos;
  }
}
