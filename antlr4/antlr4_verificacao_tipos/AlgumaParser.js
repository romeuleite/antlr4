// Generated from Alguma.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import AlgumaListener from './AlgumaListener.js';
import AlgumaVisitor from './AlgumaVisitor.js';

const serializedATN = [4,1,26,136,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,1,0,5,0,32,8,0,10,0,12,0,35,9,0,1,0,1,0,1,0,5,0,40,8,0,
10,0,12,0,43,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,54,8,2,10,2,12,
2,57,9,2,1,3,1,3,1,3,5,3,62,8,3,10,3,12,3,65,9,3,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,3,4,74,8,4,1,5,1,5,1,5,5,5,79,8,5,10,5,12,5,82,9,5,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,3,6,92,8,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,100,8,7,1,8,1,8,1,8,
1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,3,10,113,8,10,1,11,1,11,1,11,1,11,1,11,
1,11,3,11,121,8,11,1,12,1,12,1,12,1,12,1,13,1,13,5,13,129,8,13,10,13,12,
13,132,9,13,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,
0,138,0,28,1,0,0,0,2,46,1,0,0,0,4,50,1,0,0,0,6,58,1,0,0,0,8,73,1,0,0,0,10,
75,1,0,0,0,12,91,1,0,0,0,14,99,1,0,0,0,16,101,1,0,0,0,18,106,1,0,0,0,20,
109,1,0,0,0,22,114,1,0,0,0,24,122,1,0,0,0,26,126,1,0,0,0,28,29,5,1,0,0,29,
33,5,2,0,0,30,32,3,2,1,0,31,30,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,
1,0,0,0,34,36,1,0,0,0,35,33,1,0,0,0,36,37,5,1,0,0,37,41,5,3,0,0,38,40,3,
14,7,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,44,1,0,
0,0,43,41,1,0,0,0,44,45,5,0,0,1,45,1,1,0,0,0,46,47,5,24,0,0,47,48,5,1,0,
0,48,49,5,16,0,0,49,3,1,0,0,0,50,55,3,6,3,0,51,52,5,20,0,0,52,54,3,6,3,0,
53,51,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,5,1,0,0,0,57,
55,1,0,0,0,58,63,3,8,4,0,59,60,5,21,0,0,60,62,3,8,4,0,61,59,1,0,0,0,62,65,
1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,7,1,0,0,0,65,63,1,0,0,0,66,74,5,17,
0,0,67,74,5,18,0,0,68,74,5,24,0,0,69,70,5,4,0,0,70,71,3,4,2,0,71,72,5,5,
0,0,72,74,1,0,0,0,73,66,1,0,0,0,73,67,1,0,0,0,73,68,1,0,0,0,73,69,1,0,0,
0,74,9,1,0,0,0,75,80,3,12,6,0,76,77,5,23,0,0,77,79,3,12,6,0,78,76,1,0,0,
0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,11,1,0,0,0,82,80,1,0,0,0,
83,84,3,4,2,0,84,85,5,22,0,0,85,86,3,4,2,0,86,92,1,0,0,0,87,88,5,4,0,0,88,
89,3,10,5,0,89,90,5,5,0,0,90,92,1,0,0,0,91,83,1,0,0,0,91,87,1,0,0,0,92,13,
1,0,0,0,93,100,3,16,8,0,94,100,3,18,9,0,95,100,3,20,10,0,96,100,3,22,11,
0,97,100,3,24,12,0,98,100,3,26,13,0,99,93,1,0,0,0,99,94,1,0,0,0,99,95,1,
0,0,0,99,96,1,0,0,0,99,97,1,0,0,0,99,98,1,0,0,0,100,15,1,0,0,0,101,102,5,
6,0,0,102,103,3,4,2,0,103,104,5,7,0,0,104,105,5,24,0,0,105,17,1,0,0,0,106,
107,5,8,0,0,107,108,5,24,0,0,108,19,1,0,0,0,109,112,5,9,0,0,110,113,3,4,
2,0,111,113,5,19,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,21,1,0,0,0,114,
115,5,10,0,0,115,116,3,10,5,0,116,117,5,11,0,0,117,120,3,14,7,0,118,119,
5,12,0,0,119,121,3,14,7,0,120,118,1,0,0,0,120,121,1,0,0,0,121,23,1,0,0,0,
122,123,5,13,0,0,123,124,3,10,5,0,124,125,3,14,7,0,125,25,1,0,0,0,126,130,
5,14,0,0,127,129,3,14,7,0,128,127,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,
0,130,131,1,0,0,0,131,133,1,0,0,0,132,130,1,0,0,0,133,134,5,15,0,0,134,27,
1,0,0,0,11,33,41,55,63,73,80,91,99,112,120,130];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AlgumaParser extends antlr4.Parser {

    static grammarFileName = "Alguma.g4";
    static literalNames = [ null, "':'", "'DECLARACOES'", "'ALGORITMO'", 
                            "'('", "')'", "'ATRIBUIR'", "'A'", "'LER'", 
                            "'IMPRIMIR'", "'SE'", "'ENTAO'", "'SENAO'", 
                            "'ENQUANTO'", "'INICIO'", "'FIM'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "TIPO_VAR", "NUMINT", "NUMREAL", "CADEIA", 
                             "OP_ARIT1", "OP_ARIT2", "OP_REL", "OP_BOOL", 
                             "VARIAVEL", "COMENTARIO", "WS" ];
    static ruleNames = [ "programa", "declaracao", "expressaoAritmetica", 
                         "termoAritmetico", "fatorAritmetico", "expressaoRelacional", 
                         "termoRelacional", "comando", "comandoAtribuicao", 
                         "comandoEntrada", "comandoSaida", "comandoCondicao", 
                         "comandoRepeticao", "subAlgoritmo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AlgumaParser.ruleNames;
        this.literalNames = AlgumaParser.literalNames;
        this.symbolicNames = AlgumaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AlgumaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(AlgumaParser.T__0);
	        this.state = 29;
	        this.match(AlgumaParser.T__1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24) {
	            this.state = 30;
	            this.declaracao();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 36;
	        this.match(AlgumaParser.T__0);
	        this.state = 37;
	        this.match(AlgumaParser.T__2);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 26432) !== 0)) {
	            this.state = 38;
	            this.comando();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this.match(AlgumaParser.EOF);
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



	declaracao() {
	    let localctx = new DeclaracaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AlgumaParser.RULE_declaracao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(AlgumaParser.VARIAVEL);
	        this.state = 47;
	        this.match(AlgumaParser.T__0);
	        this.state = 48;
	        this.match(AlgumaParser.TIPO_VAR);
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



	expressaoAritmetica() {
	    let localctx = new ExpressaoAritmeticaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AlgumaParser.RULE_expressaoAritmetica);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.termoAritmetico();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 51;
	            this.match(AlgumaParser.OP_ARIT1);
	            this.state = 52;
	            this.termoAritmetico();
	            this.state = 57;
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



	termoAritmetico() {
	    let localctx = new TermoAritmeticoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AlgumaParser.RULE_termoAritmetico);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.fatorAritmetico();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 59;
	            this.match(AlgumaParser.OP_ARIT2);
	            this.state = 60;
	            this.fatorAritmetico();
	            this.state = 65;
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



	fatorAritmetico() {
	    let localctx = new FatorAritmeticoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AlgumaParser.RULE_fatorAritmetico);
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.match(AlgumaParser.NUMINT);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.match(AlgumaParser.NUMREAL);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.match(AlgumaParser.VARIAVEL);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 69;
	            this.match(AlgumaParser.T__3);
	            this.state = 70;
	            this.expressaoAritmetica();
	            this.state = 71;
	            this.match(AlgumaParser.T__4);
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



	expressaoRelacional() {
	    let localctx = new ExpressaoRelacionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AlgumaParser.RULE_expressaoRelacional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.termoRelacional();
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 76;
	            this.match(AlgumaParser.OP_BOOL);
	            this.state = 77;
	            this.termoRelacional();
	            this.state = 82;
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



	termoRelacional() {
	    let localctx = new TermoRelacionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AlgumaParser.RULE_termoRelacional);
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.expressaoAritmetica();
	            this.state = 84;
	            this.match(AlgumaParser.OP_REL);
	            this.state = 85;
	            this.expressaoAritmetica();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.match(AlgumaParser.T__3);
	            this.state = 88;
	            this.expressaoRelacional();
	            this.state = 89;
	            this.match(AlgumaParser.T__4);
	            break;

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



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AlgumaParser.RULE_comando);
	    try {
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 93;
	            this.comandoAtribuicao();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 94;
	            this.comandoEntrada();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 95;
	            this.comandoSaida();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 96;
	            this.comandoCondicao();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 97;
	            this.comandoRepeticao();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 98;
	            this.subAlgoritmo();
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



	comandoAtribuicao() {
	    let localctx = new ComandoAtribuicaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AlgumaParser.RULE_comandoAtribuicao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(AlgumaParser.T__5);
	        this.state = 102;
	        this.expressaoAritmetica();
	        this.state = 103;
	        this.match(AlgumaParser.T__6);
	        this.state = 104;
	        this.match(AlgumaParser.VARIAVEL);
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



	comandoEntrada() {
	    let localctx = new ComandoEntradaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, AlgumaParser.RULE_comandoEntrada);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(AlgumaParser.T__7);
	        this.state = 107;
	        this.match(AlgumaParser.VARIAVEL);
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



	comandoSaida() {
	    let localctx = new ComandoSaidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, AlgumaParser.RULE_comandoSaida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(AlgumaParser.T__8);
	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 17:
	        case 18:
	        case 24:
	            this.state = 110;
	            this.expressaoAritmetica();
	            break;
	        case 19:
	            this.state = 111;
	            this.match(AlgumaParser.CADEIA);
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



	comandoCondicao() {
	    let localctx = new ComandoCondicaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, AlgumaParser.RULE_comandoCondicao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(AlgumaParser.T__9);
	        this.state = 115;
	        this.expressaoRelacional();
	        this.state = 116;
	        this.match(AlgumaParser.T__10);
	        this.state = 117;
	        this.comando();
	        this.state = 120;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 118;
	            this.match(AlgumaParser.T__11);
	            this.state = 119;
	            this.comando();

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



	comandoRepeticao() {
	    let localctx = new ComandoRepeticaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, AlgumaParser.RULE_comandoRepeticao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(AlgumaParser.T__12);
	        this.state = 123;
	        this.expressaoRelacional();
	        this.state = 124;
	        this.comando();
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



	subAlgoritmo() {
	    let localctx = new SubAlgoritmoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, AlgumaParser.RULE_subAlgoritmo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(AlgumaParser.T__13);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 26432) !== 0)) {
	            this.state = 127;
	            this.comando();
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 133;
	        this.match(AlgumaParser.T__14);
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

AlgumaParser.EOF = antlr4.Token.EOF;
AlgumaParser.T__0 = 1;
AlgumaParser.T__1 = 2;
AlgumaParser.T__2 = 3;
AlgumaParser.T__3 = 4;
AlgumaParser.T__4 = 5;
AlgumaParser.T__5 = 6;
AlgumaParser.T__6 = 7;
AlgumaParser.T__7 = 8;
AlgumaParser.T__8 = 9;
AlgumaParser.T__9 = 10;
AlgumaParser.T__10 = 11;
AlgumaParser.T__11 = 12;
AlgumaParser.T__12 = 13;
AlgumaParser.T__13 = 14;
AlgumaParser.T__14 = 15;
AlgumaParser.TIPO_VAR = 16;
AlgumaParser.NUMINT = 17;
AlgumaParser.NUMREAL = 18;
AlgumaParser.CADEIA = 19;
AlgumaParser.OP_ARIT1 = 20;
AlgumaParser.OP_ARIT2 = 21;
AlgumaParser.OP_REL = 22;
AlgumaParser.OP_BOOL = 23;
AlgumaParser.VARIAVEL = 24;
AlgumaParser.COMENTARIO = 25;
AlgumaParser.WS = 26;

AlgumaParser.RULE_programa = 0;
AlgumaParser.RULE_declaracao = 1;
AlgumaParser.RULE_expressaoAritmetica = 2;
AlgumaParser.RULE_termoAritmetico = 3;
AlgumaParser.RULE_fatorAritmetico = 4;
AlgumaParser.RULE_expressaoRelacional = 5;
AlgumaParser.RULE_termoRelacional = 6;
AlgumaParser.RULE_comando = 7;
AlgumaParser.RULE_comandoAtribuicao = 8;
AlgumaParser.RULE_comandoEntrada = 9;
AlgumaParser.RULE_comandoSaida = 10;
AlgumaParser.RULE_comandoCondicao = 11;
AlgumaParser.RULE_comandoRepeticao = 12;
AlgumaParser.RULE_subAlgoritmo = 13;

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
        this.ruleIndex = AlgumaParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(AlgumaParser.EOF, 0);
	};

	declaracao = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracaoContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracaoContext,i);
	    }
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_declaracao;
    }

	VARIAVEL() {
	    return this.getToken(AlgumaParser.VARIAVEL, 0);
	};

	TIPO_VAR() {
	    return this.getToken(AlgumaParser.TIPO_VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterDeclaracao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitDeclaracao(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitDeclaracao(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressaoAritmeticaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_expressaoAritmetica;
    }

	termoAritmetico = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermoAritmeticoContext);
	    } else {
	        return this.getTypedRuleContext(TermoAritmeticoContext,i);
	    }
	};

	OP_ARIT1 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AlgumaParser.OP_ARIT1);
	    } else {
	        return this.getToken(AlgumaParser.OP_ARIT1, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterExpressaoAritmetica(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitExpressaoAritmetica(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitExpressaoAritmetica(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermoAritmeticoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_termoAritmetico;
    }

	fatorAritmetico = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FatorAritmeticoContext);
	    } else {
	        return this.getTypedRuleContext(FatorAritmeticoContext,i);
	    }
	};

	OP_ARIT2 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AlgumaParser.OP_ARIT2);
	    } else {
	        return this.getToken(AlgumaParser.OP_ARIT2, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterTermoAritmetico(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitTermoAritmetico(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitTermoAritmetico(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FatorAritmeticoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_fatorAritmetico;
    }

	NUMINT() {
	    return this.getToken(AlgumaParser.NUMINT, 0);
	};

	NUMREAL() {
	    return this.getToken(AlgumaParser.NUMREAL, 0);
	};

	VARIAVEL() {
	    return this.getToken(AlgumaParser.VARIAVEL, 0);
	};

	expressaoAritmetica() {
	    return this.getTypedRuleContext(ExpressaoAritmeticaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterFatorAritmetico(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitFatorAritmetico(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitFatorAritmetico(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressaoRelacionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_expressaoRelacional;
    }

	termoRelacional = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermoRelacionalContext);
	    } else {
	        return this.getTypedRuleContext(TermoRelacionalContext,i);
	    }
	};

	OP_BOOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AlgumaParser.OP_BOOL);
	    } else {
	        return this.getToken(AlgumaParser.OP_BOOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterExpressaoRelacional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitExpressaoRelacional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitExpressaoRelacional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermoRelacionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_termoRelacional;
    }

	expressaoAritmetica = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressaoAritmeticaContext);
	    } else {
	        return this.getTypedRuleContext(ExpressaoAritmeticaContext,i);
	    }
	};

	OP_REL() {
	    return this.getToken(AlgumaParser.OP_REL, 0);
	};

	expressaoRelacional() {
	    return this.getTypedRuleContext(ExpressaoRelacionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterTermoRelacional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitTermoRelacional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitTermoRelacional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_comando;
    }

	comandoAtribuicao() {
	    return this.getTypedRuleContext(ComandoAtribuicaoContext,0);
	};

	comandoEntrada() {
	    return this.getTypedRuleContext(ComandoEntradaContext,0);
	};

	comandoSaida() {
	    return this.getTypedRuleContext(ComandoSaidaContext,0);
	};

	comandoCondicao() {
	    return this.getTypedRuleContext(ComandoCondicaoContext,0);
	};

	comandoRepeticao() {
	    return this.getTypedRuleContext(ComandoRepeticaoContext,0);
	};

	subAlgoritmo() {
	    return this.getTypedRuleContext(SubAlgoritmoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoAtribuicaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_comandoAtribuicao;
    }

	expressaoAritmetica() {
	    return this.getTypedRuleContext(ExpressaoAritmeticaContext,0);
	};

	VARIAVEL() {
	    return this.getToken(AlgumaParser.VARIAVEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterComandoAtribuicao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitComandoAtribuicao(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitComandoAtribuicao(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoEntradaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_comandoEntrada;
    }

	VARIAVEL() {
	    return this.getToken(AlgumaParser.VARIAVEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterComandoEntrada(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitComandoEntrada(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitComandoEntrada(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoSaidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_comandoSaida;
    }

	expressaoAritmetica() {
	    return this.getTypedRuleContext(ExpressaoAritmeticaContext,0);
	};

	CADEIA() {
	    return this.getToken(AlgumaParser.CADEIA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterComandoSaida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitComandoSaida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitComandoSaida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoCondicaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_comandoCondicao;
    }

	expressaoRelacional() {
	    return this.getTypedRuleContext(ExpressaoRelacionalContext,0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterComandoCondicao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitComandoCondicao(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitComandoCondicao(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoRepeticaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_comandoRepeticao;
    }

	expressaoRelacional() {
	    return this.getTypedRuleContext(ExpressaoRelacionalContext,0);
	};

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterComandoRepeticao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitComandoRepeticao(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitComandoRepeticao(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubAlgoritmoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AlgumaParser.RULE_subAlgoritmo;
    }

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.enterSubAlgoritmo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AlgumaListener ) {
	        listener.exitSubAlgoritmo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AlgumaVisitor ) {
	        return visitor.visitSubAlgoritmo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AlgumaParser.ProgramaContext = ProgramaContext; 
AlgumaParser.DeclaracaoContext = DeclaracaoContext; 
AlgumaParser.ExpressaoAritmeticaContext = ExpressaoAritmeticaContext; 
AlgumaParser.TermoAritmeticoContext = TermoAritmeticoContext; 
AlgumaParser.FatorAritmeticoContext = FatorAritmeticoContext; 
AlgumaParser.ExpressaoRelacionalContext = ExpressaoRelacionalContext; 
AlgumaParser.TermoRelacionalContext = TermoRelacionalContext; 
AlgumaParser.ComandoContext = ComandoContext; 
AlgumaParser.ComandoAtribuicaoContext = ComandoAtribuicaoContext; 
AlgumaParser.ComandoEntradaContext = ComandoEntradaContext; 
AlgumaParser.ComandoSaidaContext = ComandoSaidaContext; 
AlgumaParser.ComandoCondicaoContext = ComandoCondicaoContext; 
AlgumaParser.ComandoRepeticaoContext = ComandoRepeticaoContext; 
AlgumaParser.SubAlgoritmoContext = SubAlgoritmoContext; 
