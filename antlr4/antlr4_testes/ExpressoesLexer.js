// Generated from Expressoes.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,7,33,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,4,5,27,8,
5,11,5,12,5,28,1,6,1,6,1,6,0,0,7,1,1,3,2,5,3,7,4,9,5,11,6,13,7,1,0,1,3,0,
9,10,13,13,32,32,33,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,
1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,1,15,1,0,0,0,3,17,1,0,0,0,5,19,1,0,0,0,
7,21,1,0,0,0,9,23,1,0,0,0,11,26,1,0,0,0,13,30,1,0,0,0,15,16,5,43,0,0,16,
2,1,0,0,0,17,18,5,45,0,0,18,4,1,0,0,0,19,20,5,42,0,0,20,6,1,0,0,0,21,22,
5,40,0,0,22,8,1,0,0,0,23,24,5,41,0,0,24,10,1,0,0,0,25,27,2,48,57,0,26,25,
1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,12,1,0,0,0,30,31,7,
0,0,0,31,32,6,6,0,0,32,14,1,0,0,0,2,0,28,1,1,6,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ExpressoesLexer extends antlr4.Lexer {

    static grammarFileName = "Expressoes.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'+'", "'-'", "'*'", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, null, null, "NUM", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "NUM", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

ExpressoesLexer.EOF = antlr4.Token.EOF;
ExpressoesLexer.T__0 = 1;
ExpressoesLexer.T__1 = 2;
ExpressoesLexer.T__2 = 3;
ExpressoesLexer.T__3 = 4;
ExpressoesLexer.T__4 = 5;
ExpressoesLexer.NUM = 6;
ExpressoesLexer.WS = 7;

ExpressoesLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 6:
		this.WS_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};


ExpressoesLexer.prototype.WS_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:
		 skip(); 
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};



