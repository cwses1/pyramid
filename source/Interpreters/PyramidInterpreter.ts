import { CharStream, CommonTokenStream } from 'antlr4';
import PyramidGrammarLexer from '../GeneratedParsers/PyramidGrammarLexer';
import PyramidGrammarParser from '../GeneratedParsers/PyramidGrammarParser';
import SymbolTable from '../SymbolTables/SymbolTable';
import PyramidBaseConcreteVisitor from '../Visitors/PyramidBaseConcreteVisitor';
import PyramidSymbolVisitor from '../Visitors/PyramidSymbolVisitor';
import PyramidPropVisitor from '../Visitors/PyramidPropVisitor';
import PyramidExecutionVisitor from '../Visitors/PyramidExecutionVisitor';

export default class PyramidInterpreter
{
	execute ()
	{
		this.executeVisitor(new PyramidSymbolVisitor());
		this.executeVisitor(new PyramidPropVisitor());
		this.executeVisitor(new PyramidExecutionVisitor());
	}

	executeVisitor (visitor:PyramidBaseConcreteVisitor)
	{
		visitor.symbolTable = this.symbolTable;
		this.createParser().script().accept(visitor);
	}

	createParser (): PyramidGrammarParser
	{
		const charStream = new CharStream(this.scriptText);
		const lexer = new PyramidGrammarLexer(charStream);
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new PyramidGrammarParser(tokenStream);
		return parser;
	}

	symbolTable: SymbolTable | undefined;
	scriptText: string | undefined;
}
