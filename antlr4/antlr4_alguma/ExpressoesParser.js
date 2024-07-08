// Generated from Expressoes.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ExpressoesListener from './ExpressoesListener.js';
const serializedATN = [4,1,8,45,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,20,8,1,10,1,12,1,23,9,1,1,2,1,2,
1,2,1,2,5,2,29,8,2,10,2,12,2,32,9,2,1,3,1,3,1,3,1,3,1,3,3,3,39,8,3,1,4,1,
4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,2,1,0,3,4,1,0,5,6,41,0,12,1,0,0,0,2,15,
1,0,0,0,4,24,1,0,0,0,6,38,1,0,0,0,8,40,1,0,0,0,10,42,1,0,0,0,12,13,3,2,1,
0,13,14,5,0,0,1,14,1,1,0,0,0,15,21,3,4,2,0,16,17,3,8,4,0,17,18,3,4,2,0,18,
20,1,0,0,0,19,16,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,3,
1,0,0,0,23,21,1,0,0,0,24,30,3,6,3,0,25,26,3,10,5,0,26,27,3,6,3,0,27,29,1,
0,0,0,28,25,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,5,1,0,0,
0,32,30,1,0,0,0,33,34,5,1,0,0,34,35,3,2,1,0,35,36,5,2,0,0,36,39,1,0,0,0,
37,39,5,7,0,0,38,33,1,0,0,0,38,37,1,0,0,0,39,7,1,0,0,0,40,41,7,0,0,0,41,
9,1,0,0,0,42,43,7,1,0,0,43,11,1,0,0,0,3,21,30,38];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ExpressoesParser extends antlr4.Parser {

    static grammarFileName = "Expressoes.g4";
    static literalNames = [ null, "'('", "')'", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "NUM", 
                             "WS" ];
    static ruleNames = [ "programa", "expressao", "termo", "fator", "op1", 
                         "op2" ];

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
	        this.state = 12;
	        this.expressao();
	        this.state = 13;
	        this.match(ExpressoesParser.EOF);
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



	expressao() {
	    let localctx = new ExpressaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ExpressoesParser.RULE_expressao);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        localctx.termo1 = this.termo();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 16;
	            this.op1();
	            this.state = 17;
	            localctx._termo = this.termo();
	            localctx.outrosTermos.push(localctx._termo);
	            this.state = 23;
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



	termo() {
	    let localctx = new TermoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ExpressoesParser.RULE_termo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        localctx.fator1 = this.fator();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5 || _la===6) {
	            this.state = 25;
	            this.op2();
	            this.state = 26;
	            localctx._fator = this.fator();
	            localctx.outrosFatores.push(localctx._fator);
	            this.state = 32;
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



	fator() {
	    let localctx = new FatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ExpressoesParser.RULE_fator);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.match(ExpressoesParser.T__0);
	            this.state = 34;
	            this.expressao();
	            this.state = 35;
	            this.match(ExpressoesParser.T__1);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.match(ExpressoesParser.NUM);
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



	op1() {
	    let localctx = new Op1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ExpressoesParser.RULE_op1);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	op2() {
	    let localctx = new Op2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ExpressoesParser.RULE_op2);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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


}

ExpressoesParser.EOF = antlr4.Token.EOF;
ExpressoesParser.T__0 = 1;
ExpressoesParser.T__1 = 2;
ExpressoesParser.T__2 = 3;
ExpressoesParser.T__3 = 4;
ExpressoesParser.T__4 = 5;
ExpressoesParser.T__5 = 6;
ExpressoesParser.NUM = 7;
ExpressoesParser.WS = 8;

ExpressoesParser.RULE_programa = 0;
ExpressoesParser.RULE_expressao = 1;
ExpressoesParser.RULE_termo = 2;
ExpressoesParser.RULE_fator = 3;
ExpressoesParser.RULE_op1 = 4;
ExpressoesParser.RULE_op2 = 5;

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

	expressao() {
	    return this.getTypedRuleContext(ExpressaoContext,0);
	};

	EOF() {
	    return this.getToken(ExpressoesParser.EOF, 0);
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


}



class ExpressaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpressoesParser.RULE_expressao;
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

	op1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Op1Context);
	    } else {
	        return this.getTypedRuleContext(Op1Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.enterExpressao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.exitExpressao(this);
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
        this.fator1 = null;
        this._fator = null;
        this.outrosFatores = [];
    }

	fator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FatorContext);
	    } else {
	        return this.getTypedRuleContext(FatorContext,i);
	    }
	};

	op2 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Op2Context);
	    } else {
	        return this.getTypedRuleContext(Op2Context,i);
	    }
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


}



class FatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpressoesParser.RULE_fator;
    }

	expressao() {
	    return this.getTypedRuleContext(ExpressaoContext,0);
	};

	NUM() {
	    return this.getToken(ExpressoesParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.enterFator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.exitFator(this);
		}
	}


}



class Op1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpressoesParser.RULE_op1;
    }


	enterRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.enterOp1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.exitOp1(this);
		}
	}


}



class Op2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpressoesParser.RULE_op2;
    }


	enterRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.enterOp2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.exitOp2(this);
		}
	}


}




ExpressoesParser.ProgramaContext = ProgramaContext; 
ExpressoesParser.ExpressaoContext = ExpressaoContext; 
ExpressoesParser.TermoContext = TermoContext; 
ExpressoesParser.FatorContext = FatorContext; 
ExpressoesParser.Op1Context = Op1Context; 
ExpressoesParser.Op2Context = Op2Context; 
