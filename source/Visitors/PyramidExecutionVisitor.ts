import {
	AppStatementContext,
	PrintStatementContext,
	ResourceStatementContext
	} from "../GeneratedParsers/PyramidGrammarParser";
import PrintSymbolAppService from '../AppServices/PrintSymbolAppService';
import PyramidBaseConcreteVisitor from './PyramidBaseConcreteVisitor';
import ResourceWatcherProvider from '../ResourceWatchers/ResourceWatcherProvider';
import ResourceWatcherConfiguratorProvider from '../ResourceWatcherConfigurators/ResourceWatcherConfiguratorProvider';

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
