webpackJsonp(["main"],{

/***/ "../../../../../ClienteApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClienteApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ClienteApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n\r\n</router-outlet>"

/***/ }),

/***/ "../../../../../ClienteApp/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Meu primeiro Ap';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root-3',
            template: __webpack_require__("../../../../../ClienteApp/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../ClienteApp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../ClienteApp/app/app.component.ts");
var listaProduto_component_1 = __webpack_require__("../../../../../ClienteApp/app/loja/listaProduto.component.ts");
var dataService_1 = __webpack_require__("../../../../../ClienteApp/app/servicos/dataService.ts");
var carrinho_component_1 = __webpack_require__("../../../../../ClienteApp/app/loja/carrinho/carrinho.component.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var loja_component_1 = __webpack_require__("../../../../../ClienteApp/app/loja/loja.component.ts");
var efetivarCompra_component_1 = __webpack_require__("../../../../../ClienteApp/app/loja/efetivarCompra/efetivarCompra.component.ts");
var router = [
    { path: "", component: loja_component_1.Loja },
    { path: "efetivarCompra", component: efetivarCompra_component_1.EfetivarCompra }
];
var AppModule = (function () {
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


/***/ }),

/***/ "../../../../../ClienteApp/app/loja/carrinho/carrinho.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Carrinho de compras</h3>\r\n<div>Contagem: {{ data.pedido.ItensPedidos.length}}</div>\r\n<div>Total: {{data.pedido.total | currency:\"R$\":true}}</div>\r\n<table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Nome</td>\r\n            <td>Quantidade</td>\r\n            <td>Preço</td>\r\n            <td>Total</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let item of data.pedido.ItensPedidos\">\r\n            <td>{{item.Produto.nome }}</td>\r\n            <td>{{item.Quantidade}}</td>\r\n            <td>{{item.Produto.preco | currency:\"R$\":true}}</td>\r\n            <td>{{(item.Produto.preco * item.Quantidade) | currency:\"R$\":true}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<a routerLink=\"efetivarCompra\" class=\"btn btn-success\" *ngIf=\"data.pedido.ItensPedidos.length > 0\">Efetivar Compra</a>"

/***/ }),

/***/ "../../../../../ClienteApp/app/loja/carrinho/carrinho.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dataService_1 = __webpack_require__("../../../../../ClienteApp/app/servicos/dataService.ts");
var Carrinho = (function () {
    function Carrinho(data) {
        this.data = data;
    }
    Carrinho = __decorate([
        core_1.Component({
            selector: "carrinho",
            template: __webpack_require__("../../../../../ClienteApp/app/loja/carrinho/carrinho.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataServices])
    ], Carrinho);
    return Carrinho;
}());
exports.Carrinho = Carrinho;


/***/ }),

/***/ "../../../../../ClienteApp/app/loja/efetivarCompra/efetivarCompra.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div *ngIf=\"mensagem\" class=\"alert alert-warning\">{{mensagem}}</div>\r\n    <h3>Efetivar Compra</h3>\r\n    <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n            <tr *ngFor=\"let item of data.pedido.ItensPedidos\">\r\n                <td><img src=\"/img/smartphone-lg-k10.jpg\" width=\"200\" height=\"200\" /></td>\r\n                <td>{{item.Produto.nome}}</td>\r\n                <td>{{item.Quantidade}}</td>\r\n                <td>{{item.Produto.preco | currency:\"R$\":true}}</td>\r\n                <td>{{(item.Produto.preco * item.Quantidade) | currency:\"R$\":true}}</td>\r\n            </tr>\r\n        </thead>\r\n    </table>\r\n    <div class=\"col-xs-4 col-xs-offset-8 text-right\">\r\n        <table class=\"table table-condensed\">\r\n            <tr>\r\n                <td>total</td>\r\n                <td>{{data.pedido.total | currency:\"R$\":true}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Frete</td>\r\n                <td>R$ 0.00</td>\r\n            </tr>\r\n        </table>\r\n        <button class=\"btn btn-success\" (click)=\"onEfetivarCompra()\">Comprar</button>\r\n        <a routerLink=\"\" class=\"btn btn-info\">Cancelar</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClienteApp/app/loja/efetivarCompra/efetivarCompra.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dataService_1 = __webpack_require__("../../../../../ClienteApp/app/servicos/dataService.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var EfetivarCompra = (function () {
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
        core_1.Component({
            selector: "efetivar",
            template: __webpack_require__("../../../../../ClienteApp/app/loja/efetivarCompra/efetivarCompra.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataServices, router_1.Router])
    ], EfetivarCompra);
    return EfetivarCompra;
}());
exports.EfetivarCompra = EfetivarCompra;


/***/ }),

/***/ "../../../../../ClienteApp/app/loja/listaProduto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".produto-info img {       \r\n    margin: 0 2px;    \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClienteApp/app/loja/listaProduto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\" produto-info col-xs-4 well\" *ngFor=\"let p of produtos\">\r\n        <img src=\"/img/smartphone-lg-k10.jpg\" width=\"200\" height=\"200\" />        \r\n        <h4>{{p.nome}}</h4>\r\n        <h3><strong>{{p.preco | currency:\"R$\":true}}</strong></h3>        \r\n        <button id=\"meu-button\" class=\"btn btn-success btn-sm\" (click)=\"adicionarProduto(p)\">Comprar</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../ClienteApp/app/loja/listaProduto.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dataService_1 = __webpack_require__("../../../../../ClienteApp/app/servicos/dataService.ts");
var ListaProduto = (function () {
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
        core_1.Component({
            selector: "lista-produto",
            template: __webpack_require__("../../../../../ClienteApp/app/loja/listaProduto.component.html"),
            styles: [__webpack_require__("../../../../../ClienteApp/app/loja/listaProduto.component.css")]
        }),
        __metadata("design:paramtypes", [dataService_1.DataServices])
    ], ListaProduto);
    return ListaProduto;
}());
exports.ListaProduto = ListaProduto;


/***/ }),

/***/ "../../../../../ClienteApp/app/loja/loja.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-7\">\r\n        <lista-produto></lista-produto>\r\n    </div>\r\n    <div class=\"col-xs-5\">\r\n        <div class=\"well well-sm\">\r\n            <carrinho></carrinho>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../ClienteApp/app/loja/loja.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Loja = (function () {
    function Loja() {
    }
    Loja = __decorate([
        core_1.Component({
            selector: "loja",
            template: __webpack_require__("../../../../../ClienteApp/app/loja/loja.component.html"),
            styleUrls: []
        })
    ], Loja);
    return Loja;
}());
exports.Loja = Loja;


/***/ }),

/***/ "../../../../../ClienteApp/app/modelos/pedidos.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = __webpack_require__("../../../../../ClienteApp/app/modelos/produto.ts");
var _ = __webpack_require__("../../../../lodash/lodash.js");
var Pedido = (function () {
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
var ItemPedido = (function () {
    function ItemPedido() {
        this.Produto = new produto_1.Produto();
    }
    return ItemPedido;
}());
exports.ItemPedido = ItemPedido;


/***/ }),

/***/ "../../../../../ClienteApp/app/modelos/produto.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Produto = (function () {
    function Produto() {
    }
    return Produto;
}());
exports.Produto = Produto;


/***/ }),

/***/ "../../../../../ClienteApp/app/servicos/dataService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var pedidos_1 = __webpack_require__("../../../../../ClienteApp/app/modelos/pedidos.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var DataServices = (function () {
    function DataServices(http) {
        this.http = http;
        this.pedido = new pedidos_1.Pedido();
    }
    DataServices.prototype.carregarProdutos = function () {
        var _this = this;
        return this.http.get("/api/produto")
            .map(function (result) { return _this.produtos = result.json(); });
    };
    DataServices.prototype.adicionarProduto = function (produto) {
        var itemSelecionado = this.pedido.ItensPedidos.find(function (i) { return i.Produto.id == produto.id; });
        if (itemSelecionado) {
            itemSelecionado.Quantidade++;
        }
        else {
            var item = void 0;
            item = new pedidos_1.ItemPedido();
            item.Produto.id = produto.id;
            item.Produto.nome = produto.nome;
            item.Produto.descricao = produto.descricao;
            item.Produto.preco = produto.preco;
            item.Quantidade = 1;
            this.pedido.ItensPedidos.push(item);
        }
    };
    DataServices.prototype.efetivarCompra = function () {
        var _this = this;
        return this.http.post("/api/pedido", this.pedido)
            .map(function (resposta) {
            _this.pedido = new pedidos_1.Pedido();
            return true;
        });
    };
    DataServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DataServices);
    return DataServices;
}());
exports.DataServices = DataServices;


/***/ }),

/***/ "../../../../../ClienteApp/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ClienteApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../ClienteApp/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../ClienteApp/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClienteApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map