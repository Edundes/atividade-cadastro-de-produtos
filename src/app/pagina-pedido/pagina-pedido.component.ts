import { Component } from '@angular/core';
import { TabelaPedidosComponent } from "../tabela-pedidos/tabela-pedidos.component";
import { CadastroPedidosComponent } from "../cadastro-pedidos/cadastro-pedidos.component";

@Component({
    selector: 'app-pagina-pedido',
    standalone: true,
    templateUrl: './pagina-pedido.component.html',
    styleUrl: './pagina-pedido.component.css',
    imports: [TabelaPedidosComponent, CadastroPedidosComponent]
})
export class PaginaPedidoComponent {

}
