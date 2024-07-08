import EntradaTabelaDeSimbolos from "./EntradaTabelaDeSimbolos.js";

export default class TabelaDeSimbolos {
    constructor() {
        this.tabelaDeSimbolos = new Map();
    }

    inserir(nome, valor) {
        const etds = new EntradaTabelaDeSimbolos(nome, valor);
        this.tabelaDeSimbolos.set(nome, etds);
    }

    verificar(nome) {
        return this.tabelaDeSimbolos.get(nome);
    }
}
