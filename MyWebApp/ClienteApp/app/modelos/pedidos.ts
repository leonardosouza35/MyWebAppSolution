import { Produto } from "../modelos/produto";
import * as _ from "lodash";
export class Pedido {
    public Id: number;
    public DataPedido: Date;
    public ItensPedidos: Array<ItemPedido> = new Array<ItemPedido>();

    get total(): number {
        return _.sum(_.map(this.ItensPedidos, i => i.Produto.preco * i.Quantidade));
    }
}

export class ItemPedido {
    public Id: number;
    public Produto: Produto;
    public Quantidade: number;      

    constructor() {
        this.Produto = new Produto();
    }
}