import { CharStream, CommonTokenStream } from 'antlr4';
import PyramidGrammarLexer from '../GeneratedParsers/PyramidGrammarLexer';
import PyramidGrammarParser from '../GeneratedParsers/PyramidGrammarParser';
import PyramidExecutionVisitor from '../Visitors/PyramidExecutionVisitor';
import SymbolTable from '../SymbolTables/SymbolTable';

export default class PyramidInterpreter
{
	executeScript (script:string) : SymbolTable
	{
		const charStream = new CharStream(script);
		const lexer = new PyramidGrammarLexer(charStream);
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new PyramidGrammarParser(tokenStream);
		const visitor = new PyramidExecutionVisitor();
		parser.script().accept(visitor);
		return visitor.symbolTable;
	} 
}
