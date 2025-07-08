import {
	AppStatementContext,
	PrintStatementContext,
	ResourceStatementContext
	} from "../GeneratedParsers/PyramidGrammarParser";
import SymbolTreeNodeFactory from '../EntityFactories/SymbolTreeNodeFactory';
import PrintSymbolAppService from '../AppServices/PrintSymbolAppService';
import PyramidBaseConcreteVisitor from './PyramidBaseConcreteVisitor';
import ResourceSymbolTree from '../Trees/ResourceSymbolTree';
import ResourceSymbolTreeFormatter from '../Formatters/ResourceSymbolTreeFormatter';
import ResourceWatcherProvider from '../ResourceWatchers/ResourceWatcherProvider';
import ResourceWatcherConfiguratorProvider from '../ResourceWatcherConfigurators/ResourceWatcherConfiguratorProvider';

export default class PyramidExecutionVisitor extends PyramidBaseConcreteVisitor
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
	}

	visitResourceStatement = (ctx: ResourceStatementContext) =>
	{
		/*
		resourceStatement: 'resource' SYMBOL_ID '{' resourcePropList? '}';
		*/
		let resourceSymbolName = ctx.SYMBOL_ID().getText();
		let resourceSymbol = this.symbolTable.getSymbolByName(resourceSymbolName);
		let resourceType:string = resourceSymbol.getProp('type').expr.value;

		let resourceWatcher = ResourceWatcherProvider.getResourceWatcher(resourceType);
		ResourceWatcherConfiguratorProvider.getConfigurator(resourceType).configure(resourceWatcher, resourceSymbol);
		resourceWatcher.init();
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

		//console.log(ResourceSymbolTreeFormatter.format(this.resourceSymbolTree));
	}
}
