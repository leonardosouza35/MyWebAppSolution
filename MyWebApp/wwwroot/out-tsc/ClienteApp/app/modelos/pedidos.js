import { Produto } from "../modelos/produto";
import * as _ from "lodash";
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.ItensPedidos = new Array();
    }
    Object.defineProperty(Pedido.prototype, "total", {
        get: function () {
            return _.sum(_.map(this.ItensPedidos, function (i) { return i.Produto.preco * i.Quantidade; }));
        },
        enumerable: true,
        configurable: true
    });
    return Pedido;
}());
export { Pedido };
var ItemPedido = /** @class */ (function () {
    function ItemPedido() {
        this.Produto = new Produto();
    }
    return ItemPedido;
}());
export { ItemPedido };
//# sourceMappingURL=pedidos.js.map