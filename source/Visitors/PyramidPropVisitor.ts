import {trim} from 'lodash';
import { AppStatementContext,
	AppPropContext,
	ExprContext,
	ResourcePropContext,
	ResourceStatementContext,
	TaskPropContext,
	SolutionPropContext,
	TaskStatementContext,
	SolutionStatementContext,
	EnvironmentStatementContext,
	EnvironmentPropContext} from "../GeneratedParsers/PyramidGrammarParser";
import Expr from '../Entities/Expr';
import ExprType from '../Common/ExprType';
import PyramidException from '../Exceptions/PyramidException';
import Int32Parser from '../Parsers/Int32Parser';
import PropFactory from '../EntityFactories/PropFactory';
import Prop from '../Entities/Prop';
import PyramidBaseConcreteVisitor from './PyramidBaseConcreteVisitor';
import AppReference from '../EntityReferences/AppReference';
import EnvironmentReference from '../EntityReferences/EnvironmentReference';
import ResourceReference from '../EntityReferences/ResourceReference';
import SolutionReference from '../EntityReferences/SolutionReference';
import TaskReference from '../EntityReferences/TaskReference';

export default class PyramidPropVisitor extends PyramidBaseConcreteVisitor
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

		if (!this.symbolTable.hasSymbolByName(appSymbolName))
			throw new PyramidException(`${appSymbolName}: Symbol not defined.`);

		this.contextSymbol = this.symbolTable.getSymbolByName(appSymbolName);
		this.visitChildren(ctx);
		this.contextSymbol = undefined;
	}

	visitAppProp = (ctx: AppPropContext) =>
	{
		/*
		appProp: (SYMBOL_ID | 'task' | 'solution' | 'resource') ':' expr ';';
		*/
		let propName:string = ctx.SYMBOL_ID() != null ? ctx.SYMBOL_ID().getText() : ctx.getChild(0).getText();
		let prop = PropFactory.createProp(propName, this.visitExpr(ctx.expr()));
		AppReference.propIsMultiValue(propName) ? this.contextSymbol.appendProp(prop) : this.contextSymbol.insertProp(prop);
	}

	visitResourceStatement = (ctx: ResourceStatementContext) =>
	{
		/*
		resourceStatement: 'resource' SYMBOL_ID '{' resourcePropList? '}';
		*/
		let resourceSymbolName = ctx.SYMBOL_ID().getText();

		if (!this.symbolTable.hasSymbolByName(resourceSymbolName))
			throw new PyramidException(`${resourceSymbolName}: Symbol not defined.`);

		this.contextSymbol = this.symbolTable.getSymbolByName(resourceSymbolName);
		this.visitChildren(ctx);
		this.contextSymbol = undefined;
	}

	visitResourceProp = (ctx: ResourcePropContext) =>
	{
		/*
		resourceProp: SYMBOL_ID ':' expr condClause? ';';
		*/
		let propName:string = ctx.SYMBOL_ID() != null ? ctx.SYMBOL_ID().getText() : ctx.getChild(0).getText();
		let prop = PropFactory.createProp(propName, this.visitExpr(ctx.expr()));
		ResourceReference.propIsMultiValue(propName) ? this.contextSymbol.appendProp(prop) : this.contextSymbol.insertProp(prop);
	}

	visitTaskStatement = (ctx: TaskStatementContext) =>
	{
		/*
		taskStatement: 'task' SYMBOL_ID '{' taskPropList? '}';
		*/
		let taskSymbolName = ctx.SYMBOL_ID().getText();

		if (!this.symbolTable.hasSymbolByName(taskSymbolName))
			throw new PyramidException(`${taskSymbolName}: Symbol not defined.`);

		this.contextSymbol = this.symbolTable.getSymbolByName(taskSymbolName);
		this.visitChildren(ctx);
		this.contextSymbol = undefined;
	}

	visitTaskProp = (ctx: TaskPropContext) =>
	{
		/*
		taskProp: (SYMBOL_ID | 'task') ':' expr condClause? ';';
		*/
		let propName:string = ctx.SYMBOL_ID() != null ? ctx.SYMBOL_ID().getText() : ctx.getChild(0).getText();
		let prop = PropFactory.createProp(propName, this.visitExpr(ctx.expr()));
		TaskReference.propIsMultiValue(propName) ? this.contextSymbol.appendProp(prop) : this.contextSymbol.insertProp(prop);
	}

	visitSolutionStatement = (ctx: SolutionStatementContext) =>
	{
		/*
		solutionStatement: 'solution' SYMBOL_ID '{' solutionPropList? '}';
		*/
		let solutionSymbolName = ctx.SYMBOL_ID().getText();

		if (!this.symbolTable.hasSymbolByName(solutionSymbolName))
			throw new PyramidException(`${solutionSymbolName}: Symbol not defined.`);

		this.contextSymbol = this.symbolTable.getSymbolByName(solutionSymbolName);
		this.visitChildren(ctx);
		this.contextSymbol = undefined;
	}

	visitSolutionProp = (ctx: SolutionPropContext) =>
	{
		/*
		solutionProp: SYMBOL_ID ':' expr ';';
		*/
		let propName:string = ctx.SYMBOL_ID() != null ? ctx.SYMBOL_ID().getText() : ctx.getChild(0).getText();
		let prop = PropFactory.createProp(propName, this.visitExpr(ctx.expr()));
		SolutionReference.propIsMultiValue(propName) ? this.contextSymbol.appendProp(prop) : this.contextSymbol.insertProp(prop);
	}

	visitEnvironmentStatement = (ctx: EnvironmentStatementContext) =>
	{
		/*
		solutionStatement: 'solution' SYMBOL_ID '{' solutionPropList? '}';
		*/
		let solutionSymbolName = ctx.SYMBOL_ID().getText();

		if (!this.symbolTable.hasSymbolByName(solutionSymbolName))
			throw new PyramidException(`${solutionSymbolName}: Symbol not defined.`);

		this.contextSymbol = this.symbolTable.getSymbolByName(solutionSymbolName);
		this.visitChildren(ctx);
		this.contextSymbol = undefined;
	}

	visitEnvironmentProp = (ctx: EnvironmentPropContext) =>
	{
		/*
		environmentStatement: 'environment' SYMBOL_ID '{' environmentPropList? '}';
		*/
		let propName:string = ctx.SYMBOL_ID() != null ? ctx.SYMBOL_ID().getText() : ctx.getChild(0).getText();
		let prop = PropFactory.createProp(propName, this.visitExpr(ctx.expr()));
		EnvironmentReference.propIsMultiValue(propName) ? this.contextSymbol.appendProp(prop) : this.contextSymbol.insertProp(prop);
	}

	visitExpr = (ctx: ExprContext) =>
	{
		/*
		expr: STRING_LITERAL | SYMBOL_ID | INT_LITERAL;
		*/
		let expr = new Expr();

		if (ctx.STRING_LITERAL() != null)
		{
			expr.type = ExprType.String;
			expr.value = trim(ctx.STRING_LITERAL().getText(), '\'');
		}
		else if (ctx.SYMBOL_ID() != null)
		{
			let symbolName = ctx.SYMBOL_ID().getText();

			if (!this.symbolTable.hasSymbolByName(symbolName))
				throw new PyramidException(`${symbolName}: symbol not defined.`);

			expr.type = ExprType.Symbol;
			expr.value = this.symbolTable.getSymbolByName(symbolName);
		}
		else if (ctx.INT_LITERAL() != null)
		{
			expr.type = ExprType.Int32;
			expr.value = Int32Parser.parse(ctx.INT_LITERAL().getText());
		}
		else
			throw new PyramidException('visitExpr: Could not parse expression.');

		return expr;
	}
}
