var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { DataServices } from "../servicos/dataService";
var ListaProduto = /** @class */ (function () {
    function ListaProduto(data) {
        this.data = data;
        this.produtos = data.produtos;
    }
    ListaProduto.prototype.ngOnInit = function () {
        var _this = this;
        this.data.carregarProdutos()
            .subscribe(function () { return _this.produtos = _this.data.produtos; });
    };
    ListaProduto.prototype.adicionarProduto = function (produto) {
        this.data.adicionarProduto(produto);
    };
    ListaProduto = __decorate([
        Component({
            selector: "lista-produto",
            templateUrl: "./listaProduto.component.html",
            styleUrls: ["listaProduto.component.css"]
        }),
        __metadata("design:paramtypes", [DataServices])
    ], ListaProduto);
    return ListaProduto;
}());
export { ListaProduto };
//# sourceMappingURL=listaProduto.component.js.map