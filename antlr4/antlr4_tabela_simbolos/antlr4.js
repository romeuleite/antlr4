import antlr4 from "antlr4";
import ExpressoesLexer from "./ExpressoesLexer.js";
import ExpressoesParser from "./ExpressoesParser.js";
import ExpressoesListener from "./ExpressoesListener.js";
import ExpressoesVisitor from "./ExpressoesVisitor.js";
import Calculador from "./Calculador.js";

var input = "let x=2+1, y=3+4 in x+y\r\n"; // valor=10
//var input = "let x=2, y=3 in (let x=x+1, y=(let z=3, x=4 in x+y+z) in (x+y))\r\n"; // valor=13
//var input = "let x=2,y=x+1 in (let x=x+y,y=x+y in y)\r\n"; //valor=8
//var input = "let x=2,x=3 in x+1\r\n"; // x declarada duas vezes
//var input = "let x=2 in x+y\r\n"; // y não declarada
//var input = "let x=2 in (let x=3 in x)\r\n"; //valor=3
//var input = "let x=2+1, y=(let z=3 in z+x) in let z=4 in x+y+z\r\n"; //valor=13
var chars = new antlr4.InputStream(input);
var lexer = new ExpressoesLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new ExpressoesParser(tokens);
parser.buildParseTrees = true;
var tree = parser.programa();
var calculador = new Calculador;

var valor = calculador.visitPrograma(tree);

console.log(`original input:\r\n${input}`);
console.log(`parsed successful:\r\n${valor}`);