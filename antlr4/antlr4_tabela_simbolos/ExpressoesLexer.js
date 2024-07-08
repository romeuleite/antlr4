// Generated from Expressoes.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,54,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,1,1,1,1,2,1,2,1,
3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,5,7,41,8,7,10,7,12,7,44,
9,7,1,8,4,8,47,8,8,11,8,12,8,48,1,9,1,9,1,9,1,9,0,0,10,1,1,3,2,5,3,7,4,9,
5,11,6,13,7,15,8,17,9,19,10,1,0,3,3,0,65,90,95,95,97,122,4,0,48,57,65,90,
95,95,97,122,3,0,9,10,13,13,32,32,55,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,
0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,
0,0,0,19,1,0,0,0,1,21,1,0,0,0,3,23,1,0,0,0,5,25,1,0,0,0,7,27,1,0,0,0,9,31,
1,0,0,0,11,34,1,0,0,0,13,36,1,0,0,0,15,38,1,0,0,0,17,46,1,0,0,0,19,50,1,
0,0,0,21,22,5,43,0,0,22,2,1,0,0,0,23,24,5,40,0,0,24,4,1,0,0,0,25,26,5,41,
0,0,26,6,1,0,0,0,27,28,5,108,0,0,28,29,5,101,0,0,29,30,5,116,0,0,30,8,1,
0,0,0,31,32,5,105,0,0,32,33,5,110,0,0,33,10,1,0,0,0,34,35,5,44,0,0,35,12,
1,0,0,0,36,37,5,61,0,0,37,14,1,0,0,0,38,42,7,0,0,0,39,41,7,1,0,0,40,39,1,
0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,16,1,0,0,0,44,42,1,0,
0,0,45,47,2,48,57,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,1,0,
0,0,49,18,1,0,0,0,50,51,7,2,0,0,51,52,1,0,0,0,52,53,6,9,0,0,53,20,1,0,0,
0,3,0,42,48,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ExpressoesLexer extends antlr4.Lexer {

    static grammarFileName = "Expressoes.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'+'", "'('", "')'", "'let'", "'in'", "','", 
                         "'='" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          "ID", "INT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "ID", "INT", "WS" ];

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
ExpressoesLexer.T__5 = 6;
ExpressoesLexer.T__6 = 7;
ExpressoesLexer.ID = 8;
ExpressoesLexer.INT = 9;
ExpressoesLexer.WS = 10;



