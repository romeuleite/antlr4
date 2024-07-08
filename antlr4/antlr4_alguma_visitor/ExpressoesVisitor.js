// Generated from Expressoes.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by ExpressoesParser.

export default class ExpressoesVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by ExpressoesParser#programa.
	visitPrograma(ctx) {
		return this.visitExpressao(ctx.expressao());
	}


	// Visit a parse tree produced by ExpressoesParser#expressao.
	visitExpressao(ctx) {
		let valor = this.visitTermo(ctx.termo1);
		for (let i = 0; i < ctx.outrosTermos.length; i++) {
			let op1 = ctx.op1(i);
			let ot = ctx.outrosTermos[i];
			let strOp1 = op1.getText();
			if (strOp1 === "+") {
				valor += this.visitTermo(ot);
			} else {
				valor -= this.visitTermo(ot);
			}
		}
		return valor;
	}


	// Visit a parse tree produced by ExpressoesParser#termo.
	visitTermo(ctx) {
		let valor = this.visitFator(ctx.fator1);
		for (let i = 0; i < ctx.outrosFatores.length; i++) {
			let op2 = ctx.op2(i);
			let of = ctx.outrosFatores[i];
			let strOp2 = op2.getText();
			if (strOp2 === "*") {
				valor *= this.visitFator(of);
			} else {
				valor /= this.visitFator(of);
			}
		}
		return valor;
	}


	// Visit a parse tree produced by ExpressoesParser#fator.
	visitFator(ctx) {
		if (ctx.NUM() != null) {
			return parseFloat(ctx.NUM().getText());
		} else {
			return this.visitExpressao(ctx.expressao());
		}
	}


	// Visit a parse tree produced by ExpressoesParser#op1.
	visitOp1(ctx) {
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExpressoesParser#op2.
	visitOp2(ctx) {
		return this.visitChildren(ctx);
	}



}