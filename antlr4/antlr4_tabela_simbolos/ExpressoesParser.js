// Generated from Expressoes.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ExpressoesListener from './ExpressoesListener.js';
import ExpressoesVisitor from './ExpressoesVisitor.js';

const serializedATN = [4,1,10,46,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,1,1,1,1,1,5,1,16,8,1,10,1,12,1,19,9,1,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,3,2,32,8,2,1,3,1,3,1,3,5,3,37,8,3,10,3,12,3,40,9,3,1,
4,1,4,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,0,45,0,10,1,0,0,0,2,12,1,0,0,0,4,31,
1,0,0,0,6,33,1,0,0,0,8,41,1,0,0,0,10,11,3,2,1,0,11,1,1,0,0,0,12,17,3,4,2,
0,13,14,5,1,0,0,14,16,3,4,2,0,15,13,1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,
17,18,1,0,0,0,18,3,1,0,0,0,19,17,1,0,0,0,20,21,5,2,0,0,21,22,3,2,1,0,22,
23,5,3,0,0,23,32,1,0,0,0,24,32,5,8,0,0,25,32,5,9,0,0,26,27,5,4,0,0,27,28,
3,6,3,0,28,29,5,5,0,0,29,30,3,2,1,0,30,32,1,0,0,0,31,20,1,0,0,0,31,24,1,
0,0,0,31,25,1,0,0,0,31,26,1,0,0,0,32,5,1,0,0,0,33,38,3,8,4,0,34,35,5,6,0,
0,35,37,3,8,4,0,36,34,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,
39,7,1,0,0,0,40,38,1,0,0,0,41,42,5,8,0,0,42,43,5,7,0,0,43,44,3,2,1,0,44,
9,1,0,0,0,3,17,31,38];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ExpressoesParser extends antlr4.Parser {

    static grammarFileName = "Expressoes.g4";
    static literalNames = [ null, "'+'", "'('", "')'", "'let'", "'in'", 
                            "','", "'='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "ID", "INT", "WS" ];
    static ruleNames = [ "programa", "exp", "termo", "listaDecl", "decl" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ExpressoesParser.ruleNames;
        this.literalNames = ExpressoesParser.literalNames;
        this.symbolicNames = ExpressoesParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ExpressoesParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.exp();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exp() {
	    let localctx = new ExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ExpressoesParser.RULE_exp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        localctx.termo1 = this.termo();
	        this.state = 17;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 13;
	                this.match(ExpressoesParser.T__0);
	                this.state = 14;
	                localctx._termo = this.termo();
	                localctx.outrosTermos.push(localctx._termo); 
	            }
	            this.state = 19;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termo() {
	    let localctx = new TermoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ExpressoesParser.RULE_termo);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.match(ExpressoesParser.T__1);
	            this.state = 21;
	            localctx.expParentesis = this.exp();
	            this.state = 22;
	            this.match(ExpressoesParser.T__2);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            localctx.variavel = this.match(ExpressoesParser.ID);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            localctx.constante = this.match(ExpressoesParser.INT);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 26;
	            this.match(ExpressoesParser.T__3);
	            this.state = 27;
	            this.listaDecl();
	            this.state = 28;
	            this.match(ExpressoesParser.T__4);
	            this.state = 29;
	            localctx.subexp = this.exp();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listaDecl() {
	    let localctx = new ListaDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ExpressoesParser.RULE_listaDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.decl();
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 34;
	            this.match(ExpressoesParser.T__5);
	            this.state = 35;
	            this.decl();
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decl() {
	    let localctx = new DeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ExpressoesParser.RULE_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        localctx.nome = this.match(ExpressoesParser.ID);
	        this.state = 42;
	        this.match(ExpressoesParser.T__6);
	        this.state = 43;
	        this.exp();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ExpressoesParser.EOF = antlr4.Token.EOF;
ExpressoesParser.T__0 = 1;
ExpressoesParser.T__1 = 2;
ExpressoesParser.T__2 = 3;
ExpressoesParser.T__3 = 4;
ExpressoesParser.T__4 = 5;
ExpressoesParser.T__5 = 6;
ExpressoesParser.T__6 = 7;
ExpressoesParser.ID = 8;
ExpressoesParser.INT = 9;
ExpressoesParser.WS = 10;

ExpressoesParser.RULE_programa = 0;
ExpressoesParser.RULE_exp = 1;
ExpressoesParser.RULE_termo = 2;
ExpressoesParser.RULE_listaDecl = 3;
ExpressoesParser.RULE_decl = 4;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpressoesParser.RULE_programa;
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExpressoesVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpressoesParser.RULE_exp;
        this.termo1 = null;
        this._termo = null;
        this.outrosTermos = [];
    }

	termo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermoContext);
	    } else {
	        return this.getTypedRuleContext(TermoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.exitExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExpressoesVisitor ) {
	        return visitor.visitExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpressoesParser.RULE_termo;
        this.expParentesis = null;
        this.variavel = null;
        this.constante = null;
        this.subexp = null;
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	ID() {
	    return this.getToken(ExpressoesParser.ID, 0);
	};

	INT() {
	    return this.getToken(ExpressoesParser.INT, 0);
	};

	listaDecl() {
	    return this.getTypedRuleContext(ListaDeclContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.enterTermo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.exitTermo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExpressoesVisitor ) {
	        return visitor.visitTermo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpressoesParser.RULE_listaDecl;
    }

	decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclContext);
	    } else {
	        return this.getTypedRuleContext(DeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.enterListaDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.exitListaDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExpressoesVisitor ) {
	        return visitor.visitListaDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpressoesParser.RULE_decl;
        this.nome = null;
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	ID() {
	    return this.getToken(ExpressoesParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.exitDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExpressoesVisitor ) {
	        return visitor.visitDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ExpressoesParser.ProgramaContext = ProgramaContext; 
ExpressoesParser.ExpContext = ExpContext; 
ExpressoesParser.TermoContext = TermoContext; 
ExpressoesParser.ListaDeclContext = ListaDeclContext; 
ExpressoesParser.DeclContext = DeclContext; 
