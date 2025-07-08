import { ScriptContext,
	StatementContext,
	AppStatementContext,
	AppPropListContext,
	PrintStatementContext,
	ResourcePropListContext,
	TaskPropListContext,
	SolutionPropListContext,
	EnvironmentPropListContext} from "../GeneratedParsers/PyramidGrammarParser";
import PyramidGrammarVisitor from "../GeneratedParsers/PyramidGrammarVisitor";
import Symbol from '../Entities/Symbol';
import SymbolTable from '../SymbolTables/SymbolTable';

export default class PyramidBaseConcreteVisitor extends PyramidGrammarVisitor<any>
{
	constructor ()
	{
		super();
	}

	visitScript = (ctx: ScriptContext) =>
	{
		//console.log('visitScript');
		this.visitChildren(ctx);
	}

	visitStatement = (ctx: StatementContext) =>
	{
		//console.log('visitStatement');
		this.visitChildren(ctx);
	}

	visitAppStatement = (ctx: AppStatementContext) =>
	{
		//console.log('visitAppStatement');
		this.visitChildren(ctx);
	}

	visitAppPropList = (ctx: AppPropListContext) =>
	{
		/*
		appPropList: appProp+;
		*/
		//console.log('visitAppPropList');
		this.visitChildren(ctx);
	}

	visitPrintStatement = (ctx: PrintStatementContext) =>
	{
		//console.log('visitPrintStatement');
		this.visitChildren(ctx);
	}

	visitResourcePropList = (ctx: ResourcePropListContext) =>
	{
		//console.log('visitResourcePropList');
		this.visitChildren(ctx);
	}

	visitTaskPropList = (ctx: TaskPropListContext) =>
	{
		//console.log('visitTaskPropList');
		this.visitChildren(ctx);
	}
	
	visitSolutionPropList = (ctx: SolutionPropListContext) =>
	{
		//console.log('visitSolutionPropList');
		this.visitChildren(ctx);
	}

	visitEnvironmentPropList = (ctx: EnvironmentPropListContext) =>
	{
		//console.log('visitSolutionPropList');
		this.visitChildren(ctx);
	}

	symbolTable: SymbolTable | undefined;
	contextSymbol: Symbol | undefined;
}
