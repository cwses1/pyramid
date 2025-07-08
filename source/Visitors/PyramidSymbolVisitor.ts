import {AppStatementContext,
	ResourceStatementContext,
	TaskStatementContext,
	SolutionStatementContext,
	EnvironmentStatementContext} from "../GeneratedParsers/PyramidGrammarParser";
import Symbol from '../Entities/Symbol';
import ExprType from '../Common/ExprType';
import PyramidException from '../Exceptions/PyramidException';
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

		let resourceSymbol = new Symbol();
		resourceSymbol.name = resourceSymbolName;
		resourceSymbol.type = ExprType.Resource;
		this.symbolTable.insertSymbol(resourceSymbol);
	};

	visitTaskStatement = (ctx: TaskStatementContext) =>
	{
		/*
		taskStatement: 'task' SYMBOL_ID '{' taskPropList? '}';
		*/
		let taskSymbolName = ctx.SYMBOL_ID().getText();

		if (this.symbolTable.hasSymbolByName(taskSymbolName))
			throw new PyramidException(`${taskSymbolName}: Symbol already defined.`);

		let taskSymbol = new Symbol();
		taskSymbol.name = taskSymbolName;
		taskSymbol.type = ExprType.Task;
		this.symbolTable.insertSymbol(taskSymbol);
	}

	visitSolutionStatement = (ctx: SolutionStatementContext) =>
	{
		/*
		solutionStatement: 'solution' SYMBOL_ID '{' solutionPropList? '}';
		*/
		let solutionSymbolName = ctx.SYMBOL_ID().getText();

		if (this.symbolTable.hasSymbolByName(solutionSymbolName))
			throw new PyramidException(`${solutionSymbolName}: Symbol already defined.`);

		let solutionSymbol = new Symbol();
		solutionSymbol.name = solutionSymbolName;
		solutionSymbol.type = ExprType.Solution;
		this.symbolTable.insertSymbol(solutionSymbol);
	}

	visitEnvironmentStatement = (ctx: EnvironmentStatementContext) =>
	{
		/*
		environmentStatement: 'environment' SYMBOL_ID '{' environmentPropList? '}';
		*/
		let environmentSymbolName = ctx.SYMBOL_ID().getText();

		if (this.symbolTable.hasSymbolByName(environmentSymbolName))
			throw new PyramidException(`${environmentSymbolName}: Symbol already defined.`);

		let environmentSymbol = new Symbol();
		environmentSymbol.name = environmentSymbolName;
		environmentSymbol.type = ExprType.Environment;
		this.symbolTable.insertSymbol(environmentSymbol);
	}
}
