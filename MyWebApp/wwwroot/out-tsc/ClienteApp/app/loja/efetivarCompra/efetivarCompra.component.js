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
import { DataServices } from "../../servicos/dataService";
import { Router } from "@angular/router";
var EfetivarCompra = /** @class */ (function () {
    function EfetivarCompra(data, router) {
        this.data = data;
        this.router = router;
    }
    EfetivarCompra.prototype.onEfetivarCompra = function () {
        var _this = this;
        this.data.efetivarCompra()
            .subscribe(function (sucesso) {
            if (sucesso) {
                _this.router.navigate([""]);
            }
        }, function (erro) { return _this.mensagem = "Falha ao salvar pedido"; });
    };
    EfetivarCompra = __decorate([
        Component({
            selector: "efetivar",
            templateUrl: "efetivarCompra.component.html",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [DataServices, Router])
    ], EfetivarCompra);
    return EfetivarCompra;
}());
export { EfetivarCompra };
//# sourceMappingURL=efetivarCompra.component.js.map