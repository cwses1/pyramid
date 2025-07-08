import {
	AppStatementContext,
	ResourceStatementContext
	} from "../GeneratedParsers/PyramidGrammarParser";
import SymbolTreeNodeFactory from '../EntityFactories/SymbolTreeNodeFactory';
import PyramidBaseConcreteVisitor from './PyramidBaseConcreteVisitor';

export default class PyramidDependencyVisitor extends PyramidBaseConcreteVisitor
{
	constructor ()
	{
		super();
	}

	visitAppStatement = (ctx: AppStatementContext) =>
	{
		/*
		appStatement: 'app' SYMBOL_ID '{' appPropList? '}';
		*/
		let appSymbolName = ctx.SYMBOL_ID().getText();
		let appSymbol = this.symbolTable.getSymbolByName(appSymbolName);
		this.resourceSymbolTree.insertNode(SymbolTreeNodeFactory.createSymbolTreeNode(appSymbol));
	}

	visitResourceStatement = (ctx: ResourceStatementContext) =>
	{
		/*
		resourceStatement: 'resource' SYMBOL_ID '{' resourcePropList? '}';
		*/
		let resourceSymbolName = ctx.SYMBOL_ID().getText();
		let resourceSymbol = this.symbolTable.getSymbolByName(resourceSymbolName);
		this.resourceSymbolTree.insertNode(SymbolTreeNodeFactory.createSymbolTreeNode(resourceSymbol));
	}
}
