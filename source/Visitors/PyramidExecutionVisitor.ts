import { ScriptContext,
	StatementContext,
	AppStatementContext,
	AppPropListContext,
	AppPropContext,
	ExprContext,
	PrintStatementContext } from "../GeneratedParsers/PyramidGrammarParser";
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

export default class PyramidExecutionVisitor extends PyramidBaseConcreteVisitor
{
	constructor ()
	{
		super();
	}

	visitPrintStatement = (ctx: PrintStatementContext) =>
	{
		/*
		printStatement: 'print' ('symbols' | 'symbol' SYMBOL_ID);
		*/
		let appService = new PrintSymbolAppService();
		appService.symbolName = ctx.SYMBOL_ID() != null ? ctx.SYMBOL_ID().getText() : undefined;
		appService.symbolTable = this.symbolTable;
		appService.run();
	}
}
