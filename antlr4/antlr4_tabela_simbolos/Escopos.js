import TabelaDeSimbolos from "./TabelaDeSimbolos.js";

export default class Escopos {
    constructor() {
        this.pilhaDeTabelas = [];
        this.criarNovoEscopo();
    }

    criarNovoEscopo() {
        this.pilhaDeTabelas.unshift(new TabelaDeSimbolos());
    }

    obterEscopoAtual() {
        return this.pilhaDeTabelas[0];
    }

    percorrerEscoposAninhados() {
        return this.pilhaDeTabelas;
    }

    abandonarEscopo() {
        this.pilhaDeTabelas.shift();
    }
}
