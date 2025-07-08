import { ScriptContext,
	StatementContext,
	AppStatementContext,
	AppPropListContext,
	AppPropContext,
	ExprContext,
	PrintStatementContext,
	ResourceStatementContext } from "../GeneratedParsers/PyramidGrammarParser";
import Symbol from '../Entities/Symbol';
import Expr from '../Entities/Expr';
import ExprType from '../Common/ExprType';
import SymbolTable from '../SymbolTables/SymbolTable';
import PyramidException from '../Exceptions/PyramidException';
import Int32Parser from '../Parsers/Int32Parser';
import PropFactory from '../EntityFactories/PropFactory';
import Prop from '../Entities/Prop';
import PrintSymbolAppService from '../AppServices/PrintSymbolAppService';
import PyramidBaseConcreteVisitor from './PyramidBaseConcreteVisitor';

export default class PyramidSymbolVisitor extends PyramidBaseConcreteVisitor
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

		if (this.symbolTable.hasSymbolByName(appSymbolName))
			throw new PyramidException(`${appSymbolName}: Symbol already defined.`);

		let appSymbol = new Symbol();
		appSymbol.name = appSymbolName;
		appSymbol.type = ExprType.App;
		appSymbol.value = {};
		this.symbolTable.insertSymbol(appSymbol);
	}

	visitResourceStatement = (ctx: ResourceStatementContext) =>
	{
		/*
		resourceStatement: 'resource' SYMBOL_ID '{' resourcePropList? '}';
		*/
		let resourceSymbolName = ctx.SYMBOL_ID().getText();

		if (this.symbolTable.hasSymbolByName(resourceSymbolName))
			throw new PyramidException(`${resourceSymbolName}: Symbol already defined.`);

		let appSymbol = new Symbol();
		appSymbol.name = resourceSymbolName;
		appSymbol.type = ExprType.Resource;
		appSymbol.value = {};
		this.symbolTable.insertSymbol(appSymbol);
	};

}
