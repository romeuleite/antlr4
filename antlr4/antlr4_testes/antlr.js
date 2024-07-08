import antlr4 from 'antlr4';
import ExpressoesLexer from './ExpressoesLexer.js';
import ExpressoesParser from './ExpressoesParser.js';
import ExpressoesListener from './ExpressoesListener.js';

const input = 1 + 2;
const chars = new antlr4.InputStream(input);
const lexer = new ExpressoesLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new ExpressoesParser(tokens);
const tree = parser.programa();