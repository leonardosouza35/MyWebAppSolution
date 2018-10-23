var Produto = /** @class */ (function () {
    function Produto(sigla, preco) {
        this.sigla = sigla;
        this.preco = preco;
        this.id = 0;
    }
    Produto.prototype.exibirSigla = function () {
        alert(this.sigla);
    };
    Produto.prototype.obterNome = function () {
        return this.nome;
    };
    Produto.prototype.obterId = function () {
        return this.id;
    };
    Object.defineProperty(Produto.prototype, "descricao", {
        get: function () {
            return this.nome;
        },
        set: function (val) {
        },
        enumerable: true,
        configurable: true
    });
    return Produto;
}());
export { Produto };
//# sourceMappingURL=produto.js.map