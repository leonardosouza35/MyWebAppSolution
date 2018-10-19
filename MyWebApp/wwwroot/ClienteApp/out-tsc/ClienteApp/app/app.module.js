"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var listaProduto_component_1 = require("./loja/listaProduto.component");
var dataService_1 = require("./servicos/dataService");
var carrinho_component_1 = require("./loja/carrinho/carrinho.component");
var router_1 = require("@angular/router");
var loja_component_1 = require("./loja/loja.component");
var efetivarCompra_component_1 = require("./loja/efetivarCompra/efetivarCompra.component");
var router = [
    { path: "", component: loja_component_1.Loja },
    { path: "efetivarCompra", component: efetivarCompra_component_1.EfetivarCompra }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                listaProduto_component_1.ListaProduto,
                carrinho_component_1.Carrinho,
                loja_component_1.Loja,
                efetivarCompra_component_1.EfetivarCompra
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(router, {
                    useHash: true,
                    enableTracing: false
                })
            ],
            providers: [dataService_1.DataServices],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map