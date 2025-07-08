import { CharStream, CommonTokenStream } from 'antlr4';
import PyramidGrammarLexer from '../GeneratedParsers/PyramidGrammarLexer';
import PyramidGrammarParser from '../GeneratedParsers/PyramidGrammarParser';
import SymbolTable from '../SymbolTables/SymbolTable';
import PyramidBaseConcreteVisitor from '../Visitors/PyramidBaseConcreteVisitor';
import PyramidSymbolVisitor from '../Visitors/PyramidSymbolVisitor';
import PyramidPropVisitor from '../Visitors/PyramidPropVisitor';
import PyramidDependencyVisitor from '../Visitors/PyramidDependencyVisitor';
import PyramidExecutionVisitor from '../Visitors/PyramidExecutionVisitor';
import ResourceSymbolTree from '../Trees/ResourceSymbolTree';

export default class PyramidInterpreter
{
	execute ()
	{
		this.executeVisitor(new PyramidSymbolVisitor());
		this.executeVisitor(new PyramidPropVisitor());
		this.executeVisitor(new PyramidDependencyVisitor());
		this.executeVisitor(new PyramidExecutionVisitor());
	}

	executeVisitor (visitor:PyramidBaseConcreteVisitor)
	{
		visitor.symbolTable = this.symbolTable;
		visitor.resourceSymbolTree = this.resourceSymbolTree;
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

	scriptText: string | undefined;
	symbolTable: SymbolTable | undefined;
	resourceSymbolTree: ResourceSymbolTree;
}
