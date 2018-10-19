import { Component, OnInit } from "@angular/core"
import { DataServices } from "../servicos/dataService"
import { Produto } from "../modelos/produto";

@Component({
    selector: "lista-produto",
    templateUrl: "./listaProduto.component.html",
    styleUrls: ["listaProduto.component.css"]
})
export class ListaProduto implements OnInit {
        
    constructor(private data: DataServices) {
        this.produtos = data.produtos;
    }

    public produtos: Produto[]; 

    ngOnInit(): void {
        this.data.carregarProdutos()
            .subscribe(() => this.produtos = this.data.produtos)
    }    

    adicionarProduto(produto: Produto) {
        this.data.adicionarProduto(produto);
    }
}