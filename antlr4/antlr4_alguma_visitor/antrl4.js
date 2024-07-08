import antlr4 from "antlr4";
import ExpressoesLexer from "./ExpressoesLexer.js";
import ExpressoesParser from "./ExpressoesParser.js";
import ExpressoesListener from "./ExpressoesListener.js";
import ExpressoesVisitor from "./ExpressoesVisitor.js";

var input = "(41 + 3)\r\n";
var chars = new antlr4.InputStream(input);
var lexer = new ExpressoesLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new ExpressoesParser(tokens);
parser.buildParseTrees = true;
var tree = parser.programa();
var calculador = new ExpressoesVisitor;

var valor = calculador.visitPrograma(tree);

console.log(`original input:\r\n${input}`);
console.log(`parsed successful:\r\n${valor}`);