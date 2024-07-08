// Generated from Expressoes.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ExpressoesListener from './ExpressoesListener.js';
const serializedATN = [4,1,7,55,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,3,2,32,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,44,8,
4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,53,8,5,1,5,0,0,6,0,2,4,6,8,10,0,0,52,0,
12,1,0,0,0,2,16,1,0,0,0,4,31,1,0,0,0,6,33,1,0,0,0,8,43,1,0,0,0,10,52,1,0,
0,0,12,13,3,2,1,0,13,14,5,0,0,1,14,15,6,0,-1,0,15,1,1,0,0,0,16,17,3,6,3,
0,17,18,3,4,2,0,18,19,6,1,-1,0,19,3,1,0,0,0,20,21,5,1,0,0,21,22,3,6,3,0,
22,23,3,4,2,0,23,24,6,2,-1,0,24,32,1,0,0,0,25,26,5,2,0,0,26,27,3,6,3,0,27,
28,3,4,2,0,28,29,6,2,-1,0,29,32,1,0,0,0,30,32,6,2,-1,0,31,20,1,0,0,0,31,
25,1,0,0,0,31,30,1,0,0,0,32,5,1,0,0,0,33,34,3,10,5,0,34,35,3,8,4,0,35,36,
6,3,-1,0,36,7,1,0,0,0,37,38,5,3,0,0,38,39,3,10,5,0,39,40,3,8,4,0,40,41,6,
4,-1,0,41,44,1,0,0,0,42,44,6,4,-1,0,43,37,1,0,0,0,43,42,1,0,0,0,44,9,1,0,
0,0,45,46,5,4,0,0,46,47,3,2,1,0,47,48,5,5,0,0,48,49,6,5,-1,0,49,53,1,0,0,
0,50,51,5,6,0,0,51,53,6,5,-1,0,52,45,1,0,0,0,52,50,1,0,0,0,53,11,1,0,0,0,
3,31,43,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ExpressoesParser extends antlr4.Parser {

    static grammarFileName = "Expressoes.g4";
    static literalNames = [ null, "'+'", "'-'", "'*'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, "NUM", 
                             "WS" ];
    static ruleNames = [ "programa", "expressao", "expressao2", "termo", 
                         "termo2", "fator" ];

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
	        localctx._expressao = this.expressao();
	        this.state = 13;
	        this.match(ExpressoesParser.EOF);
	         localctx.val =  localctx._expressao.val 
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        localctx._termo = this.termo();
	        this.state = 17;
	        localctx._expressao2 = this.expressao2(localctx._termo.val);
	         localctx.val =  localctx._expressao2.sint 
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



	expressao2(her) {
	    let localctx = new Expressao2Context(this, this._ctx, this.state, her);
	    this.enterRule(localctx, 4, ExpressoesParser.RULE_expressao2);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.match(ExpressoesParser.T__0);
	            this.state = 21;
	            localctx._termo = this.termo();
	            this.state = 22;
	            localctx.exp = this.expressao2(localctx._termo.val+localctx.her);
	             localctx.sint =  localctx.exp.sint 
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.match(ExpressoesParser.T__1);
	            this.state = 26;
	            localctx._termo = this.termo();
	            this.state = 27;
	            localctx.exp = this.expressao2(localctx.her-localctx._termo.val);
	             localctx.sint =  localctx.exp.sint 
	            break;
	        case -1:
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	             localctx.sint =  localctx.her 
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



	termo() {
	    let localctx = new TermoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ExpressoesParser.RULE_termo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        localctx._fator = this.fator();
	        this.state = 34;
	        localctx._termo2 = this.termo2(localctx._fator.val);
	         localctx.val =  localctx._termo2.sint 
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



	termo2(her) {
	    let localctx = new Termo2Context(this, this._ctx, this.state, her);
	    this.enterRule(localctx, 8, ExpressoesParser.RULE_termo2);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.match(ExpressoesParser.T__2);
	            this.state = 38;
	            localctx._fator = this.fator();
	            this.state = 39;
	            localctx.term = this.termo2(localctx._fator.val*localctx.her);
	             localctx.sint =  localctx.term.sint 
	            break;
	        case -1:
	        case 1:
	        case 2:
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	             localctx.sint =  localctx.her 
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



	fator() {
	    let localctx = new FatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ExpressoesParser.RULE_fator);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.match(ExpressoesParser.T__3);
	            this.state = 46;
	            localctx._expressao = this.expressao();
	            this.state = 47;
	            this.match(ExpressoesParser.T__4);
	             localctx.val =  localctx._expressao.val 
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            localctx._NUM = this.match(ExpressoesParser.NUM);
	             localctx.val =  Integer.parseInt(localctx._NUM.getText()) 
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


}

ExpressoesParser.EOF = antlr4.Token.EOF;
ExpressoesParser.T__0 = 1;
ExpressoesParser.T__1 = 2;
ExpressoesParser.T__2 = 3;
ExpressoesParser.T__3 = 4;
ExpressoesParser.T__4 = 5;
ExpressoesParser.NUM = 6;
ExpressoesParser.WS = 7;

ExpressoesParser.RULE_programa = 0;
ExpressoesParser.RULE_expressao = 1;
ExpressoesParser.RULE_expressao2 = 2;
ExpressoesParser.RULE_termo = 3;
ExpressoesParser.RULE_termo2 = 4;
ExpressoesParser.RULE_fator = 5;

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
        this.val = null
        this._expressao = null;
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
        this.val = null
        this._termo = null;
        this._expressao2 = null;
    }

	termo() {
	    return this.getTypedRuleContext(TermoContext,0);
	};

	expressao2() {
	    return this.getTypedRuleContext(Expressao2Context,0);
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



class Expressao2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState, her) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpressoesParser.RULE_expressao2;
        this.her = null
        this.sint = null
        this._termo = null;
        this.exp = null;
        this.her = her || null;
    }

	termo() {
	    return this.getTypedRuleContext(TermoContext,0);
	};

	expressao2() {
	    return this.getTypedRuleContext(Expressao2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.enterExpressao2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.exitExpressao2(this);
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
        this.val = null
        this._fator = null;
        this._termo2 = null;
    }

	fator() {
	    return this.getTypedRuleContext(FatorContext,0);
	};

	termo2() {
	    return this.getTypedRuleContext(Termo2Context,0);
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



class Termo2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState, her) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExpressoesParser.RULE_termo2;
        this.her = null
        this.sint = null
        this._fator = null;
        this.term = null;
        this.her = her || null;
    }

	fator() {
	    return this.getTypedRuleContext(FatorContext,0);
	};

	termo2() {
	    return this.getTypedRuleContext(Termo2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.enterTermo2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExpressoesListener ) {
	        listener.exitTermo2(this);
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
        this.val = null
        this._expressao = null;
        this._NUM = null;
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




ExpressoesParser.ProgramaContext = ProgramaContext; 
ExpressoesParser.ExpressaoContext = ExpressaoContext; 
ExpressoesParser.Expressao2Context = Expressao2Context; 
ExpressoesParser.TermoContext = TermoContext; 
ExpressoesParser.Termo2Context = Termo2Context; 
ExpressoesParser.FatorContext = FatorContext; 
