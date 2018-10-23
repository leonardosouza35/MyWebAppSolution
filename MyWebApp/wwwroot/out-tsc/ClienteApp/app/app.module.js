var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { ListaProduto } from './loja/listaProduto.component';
import { DataServices } from "./servicos/dataService";
import { Carrinho } from "./loja/carrinho/carrinho.component";
import { RouterModule } from "@angular/router";
import { Loja } from "./loja/loja.component";
import { EfetivarCompra } from "./loja/efetivarCompra/efetivarCompra.component";
var router = [
    { path: "", component: Loja },
    { path: "efetivarCompra", component: EfetivarCompra }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                ListaProduto,
                Carrinho,
                Loja,
                EfetivarCompra
            ],
            imports: [
                BrowserModule,
                HttpModule,
                RouterModule.forRoot(router, {
                    useHash: true,
                    enableTracing: false
                })
            ],
            providers: [DataServices],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map