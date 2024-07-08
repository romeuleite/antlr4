import TabelaDeSimbolos from './TabelaDeSimbolos.js'
import AlgumaParser from './AlgumaParser.js';

export default class AlgumaSemanticoUtils {
    static errosSemanticos = [];

    static adicionarErroSemantico(token, mensagem) {
        const linha = token.line;
        const coluna = token.column;
        this.errosSemanticos.push(`Erro ${linha}:${coluna} - ${mensagem}`);
    }

    static verificarTipo(tabela, ctx) {
        if (ctx.constructor == AlgumaParser.ExpressaoAritmeticaContext) {
            let ret = null;
            for (const ta of ctx.termoAritmetico()) {
                const aux = this.verificarTipo(tabela, ta);
                if (ret === null) {
                    ret = aux;
                } else if (ret !== aux && aux !== TabelaDeSimbolos.TipoAlguma.INVALIDO) {
                    this.adicionarErroSemantico(ctx.start, `Expressão ${ctx.getText()} contém tipos incompatíveis`);
                    ret = TabelaDeSimbolos.TipoAlguma.INVALIDO;
                }
            }
            return ret;
        }

        else if (ctx.constructor == AlgumaParser.TermoAritmeticoContext) {
            let ret = null;
            for (const fa of ctx.fatorAritmetico()) {
                const aux = this.verificarTipo(tabela, fa);
                if (ret === null) {
                    ret = aux;
                } else if (ret !== aux && aux !== TabelaDeSimbolos.TipoAlguma.INVALIDO) {
                    this.adicionarErroSemantico(ctx.start, `Termo ${ctx.getText()} contém tipos incompatíveis`);
                    ret = TabelaDeSimbolos.TipoAlguma.INVALIDO;
                }
            }
            return ret;
        }

        else if (ctx.constructor == AlgumaParser.FatorAritmeticoContext) {
            if (ctx.NUMINT() !== null) {
                return TabelaDeSimbolos.TipoAlguma.INTEIRO;
            }
            if (ctx.NUMREAL() !== null) {
                return TabelaDeSimbolos.TipoAlguma.REAL;
            }
            if (ctx.VARIAVEL() !== null) {
                const nomeVar = ctx.VARIAVEL().getText();
                if (!tabela.existe(nomeVar)) {
                    this.adicionarErroSemantico(ctx.VARIAVEL().getSymbol(), `Variável ${nomeVar} não foi declarada antes do uso`);
                    return TabelaDeSimbolos.TipoAlguma.INVALIDO;
                }
                return this.verificarTipo(tabela, nomeVar);
            }
            
            return this.verificarTipo(tabela, ctx.expressaoAritmetica());
        }

        else if (ctx.constructor == String) {
            return tabela.verificar(ctx);
        }

    }

}