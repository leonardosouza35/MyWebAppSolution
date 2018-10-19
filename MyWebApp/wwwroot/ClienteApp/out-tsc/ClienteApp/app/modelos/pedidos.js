"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = require("../modelos/produto");
var _ = require("lodash");
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
exports.Pedido = Pedido;
var ItemPedido = /** @class */ (function () {
    function ItemPedido() {
        this.Produto = new produto_1.Produto();
    }
    return ItemPedido;
}());
exports.ItemPedido = ItemPedido;
//# sourceMappingURL=pedidos.js.map