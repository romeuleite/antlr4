import ExpressoesVisitor from "./ExpressoesVisitor.js";
import ExpressoesParser from "./ExpressoesParser.js";
import Escopos from "./Escopos.js";

export default class Calculator extends ExpressoesVisitor {
    constructor() {
        super();
        this.escoposAninhados = new Escopos();
      }
    
      visitPrograma(ctx) {
        return this.visitExp(ctx.exp());
      }
    
      visitExp(ctx) {
        let valor = this.visitTermo(ctx.termo1);
        for (let ot of ctx.outrosTermos) {
          valor += this.visitTermo(ot);
        }
        return valor;
      }
    
      visitTermo(ctx) {
        if (ctx.expParentesis) {
          return this.visitExp(ctx.expParentesis);
        } else if (ctx.constante) {
          return parseFloat(ctx.constante.text);
        } else if (ctx.variavel) {
          let escopos = this.escoposAninhados.percorrerEscoposAninhados();
          for (let ts of escopos) {
            let etds = ts.verificar(ctx.variavel.text);
            if (etds) {
              return etds.valor;
            }
          }
          throw new Error("Erro semântico: " + ctx.variavel.text + " não foi declarada antes do uso");
        } else {
          this.escoposAninhados.criarNovoEscopo();
          this.visitListaDecl(ctx.listaDecl());
          let retorno = this.visitExp(ctx.subexp);
          this.escoposAninhados.abandonarEscopo();
          return retorno;
        }
      }
    
      visitDecl(ctx) {
        let escopoAtual = this.escoposAninhados.obterEscopoAtual();
        if (escopoAtual.verificar(ctx.nome.text)) {
          throw new Error("Erro semântico: " + ctx.nome.text + " declarada duas vezes num mesmo escopo");
        } else {
          escopoAtual.inserir(ctx.nome.text, this.visitExp(ctx.exp()));
        }
        return null;
      }
    
      visitListaDecl(ctx) {
        for (let d of ctx.decl()) {
          this.visitDecl(d);
        }
        return null;
      }
}