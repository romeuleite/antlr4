import antlr4 from "antlr4";
import ExprParser from "./ExprParser.js";
import ExprLexer from "./ExprLexer.js";
import ExprListener from "./ExprListener.js";

var input = "(10+2-5)\r\n";
var chars = new antlr4.InputStream(input);
var lexer = new ExprLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new ExprParser(tokens);
parser.buildParseTrees = true;
var tree = parser.prog();

console.log(`parsed successful:\r\n${input}`);

class Visitor {
    visitChildren(ctx) {
        if (!ctx) {
            return;
        }

        if (ctx.children) {
            return ctx.children.map(child => {
                if (child.children && child.children.length != 0) {
                    return child.accept(this);
                } else {
                    return child.getText();
                }
            });
        }
    }
}

tree.accept(new Visitor());