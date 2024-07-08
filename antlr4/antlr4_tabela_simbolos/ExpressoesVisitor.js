// Generated from Expressoes.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by ExpressoesParser.

export default class ExpressoesVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by ExpressoesParser#programa.
	visitPrograma(ctx) {
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExpressoesParser#exp.
	visitExp(ctx) {
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExpressoesParser#termo.
	visitTermo(ctx) {
		return this.visitChildren(ctx);
	}


	//Visit a parse tree produced by ExpressoesParser#listaDecl.
	visitListaDecl(ctx) {
		return this.visitChildren(ctx);
	}
	

	// Visit a parse tree produced by ExpressoesParser#decl.
	visitDecl(ctx) {
		return this.visitChildren(ctx);
	}



}