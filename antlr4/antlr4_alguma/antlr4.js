import antlr4 from "antlr4";
import ExpressoesLexer from "./ExpressoesLexer.js";
import ExpressoesParser from "./ExpressoesParser.js";
import ExpressoesListener from "./ExpressoesListener.js";

var input = "(34 - 3 + 2) * (41 + 3)\r\n";
var chars = new antlr4.InputStream(input);
var lexer = new ExpressoesLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new ExpressoesParser(tokens);
parser.buildParseTrees = true;
var tree = parser.programa();

console.log(`parsed successful:\r\n${input}`);