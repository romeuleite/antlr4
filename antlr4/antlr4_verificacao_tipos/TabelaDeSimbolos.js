export default class TabelaDeSimbolos {
    static TipoAlguma = {
        INTEIRO: 'INTEIRO',
        REAL: 'REAL',
        INVALIDO: 'INVALIDO'
    }

    constructor() {
        this.tabela = new Map();
    }

    adicionar(nome, tipo) {
        this.tabela.set(nome, { nome: nome, tipo: tipo });
    }

    existe(nome) {
        return this.tabela.has(nome);
    }

    verificar(nome) {
        const entrada = this.tabela.get(nome);
        return entrada ? entrada.tipo : null;
    }
}

