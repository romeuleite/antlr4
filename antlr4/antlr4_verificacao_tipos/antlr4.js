// Importações de módulos necessários (assumindo que os módulos correspondentes estejam disponíveis)
import antlr4 from 'antlr4';
import fs from 'fs';
import AlgumaLexer from './AlgumaLexer.js';
import AlgumaParser from './AlgumaParser.js';
import AlgumaSemanticoUtils from './AlgumaSemanticoUtils.js';
import AlgumaSemantico from './AlgumaSemantico.js';

fs.readFile('programa.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    var input = data;
    var chars = new antlr4.InputStream(input);
    var lexer = new AlgumaLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new AlgumaParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.programa();
    var calculador = new AlgumaSemantico;

    var valor = calculador.visitPrograma(tree);
    AlgumaSemanticoUtils.errosSemanticos.forEach((s) => console.log(s));

});
