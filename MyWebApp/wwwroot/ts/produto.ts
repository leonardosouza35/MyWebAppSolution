export class Produto {
    public id: number = 0;
    public nome: string


    constructor(private sigla: string, private preco:number) {

    }

    public exibirSigla() {
        alert(this.sigla);
    }
    public obterNome():string {
        return this.nome;
    }

    public obterId(): number {
        return this.id;
    }

    set descricao(val) {

    }

    get descricao() {
        return this.nome;
    }
}

