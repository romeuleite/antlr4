import AlgumaSemanticoUtils from './AlgumaSemanticoUtils.js'
import TabelaDeSimbolos from './TabelaDeSimbolos.js'
import AlgumaVisitor from './AlgumaVisitor.js';

// This class defines a complete generic visitor for a parse tree produced by AlgumaParser.

export default class AlgumaSemantico extends AlgumaVisitor{

	constructor() {
		super();
		this.tabela = null;
	}

	// Visit a parse tree produced by AlgumaParser#programa.
	visitPrograma(ctx) {
		this.tabela = new TabelaDeSimbolos();
		return super.visitPrograma(ctx);
	}


	// Visit a parse tree produced by AlgumaParser#declaracao.
	visitDeclaracao(ctx) {
		const nomeVar = ctx.VARIAVEL().getText();
		const strTipoVar = ctx.TIPO_VAR().getText();
		let tipoVar = TabelaDeSimbolos.TipoAlguma.INVALIDO;
		switch (strTipoVar) {
			case 'INTEIRO':
				tipoVar = TabelaDeSimbolos.TipoAlguma.INTEIRO;
				break;
			case 'REAL':
				tipoVar = TabelaDeSimbolos.TipoAlguma.REAL;
				break;
			default:
				break;
		}

		if (this.tabela.existe(nomeVar)) {
			AlgumaSemanticoUtils.adicionarErroSemantico(ctx.VARIAVEL().getSymbol(), `Variável ${nomeVar} já existe`);
		} else {
			this.tabela.adicionar(nomeVar, tipoVar);
		}

		return super.visitDeclaracao(ctx);
	}


	visitExpressaoAritmetica(ctx) {
		AlgumaSemanticoUtils.verificarTipo(this.tabela, ctx);
		return super.visitExpressaoAritmetica(ctx);
	}


	visitComandoAtribuicao(ctx) {
		const tipoExpressao = AlgumaSemanticoUtils.verificarTipo(this.tabela, ctx.expressaoAritmetica());
		if (tipoExpressao !== TabelaDeSimbolos.TipoAlguma.INVALIDO) {
			const nomeVar = ctx.VARIAVEL().getText();
			if (!this.tabela.existe(nomeVar)) {
				AlgumaSemanticoUtils.adicionarErroSemantico(ctx.VARIAVEL().getSymbol(), `Variável ${nomeVar} não foi declarada antes do uso`);
			} else {
				const tipoVariavel = AlgumaSemanticoUtils.verificarTipo(this.tabela, nomeVar);
				if (tipoVariavel !== tipoExpressao) {
					AlgumaSemanticoUtils.adicionarErroSemantico(ctx.VARIAVEL().getSymbol(), `Tipo da variável ${nomeVar} não é compatível com o tipo da expressão`);
				}
			}
		}
		return super.visitComandoAtribuicao(ctx);
	}


	visitComandoEntrada(ctx) {
		const nomeVar = ctx.VARIAVEL().getText();
		if (!this.tabela.existe(nomeVar)) {
			AlgumaSemanticoUtils.adicionarErroSemantico(ctx.VARIAVEL().getSymbol(), `Variável ${nomeVar} não foi declarada antes do uso`);
		}
		return super.visitComandoEntrada(ctx);
	}


}