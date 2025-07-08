import { AppStatementContext,
	AppPropContext,
	ExprContext,
	ResourcePropContext,
	ResourceStatementContext} from "../GeneratedParsers/PyramidGrammarParser";
import Expr from '../Entities/Expr';
import ExprType from '../Common/ExprType';
import PyramidException from '../Exceptions/PyramidException';
import Int32Parser from '../Parsers/Int32Parser';
import PropFactory from '../EntityFactories/PropFactory';
import Prop from '../Entities/Prop';
import PyramidBaseConcreteVisitor from './PyramidBaseConcreteVisitor';

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
		appProp: (SYMBOL_ID | 'task' | 'solution' ) ':' expr ';';
		*/
		if (ctx.SYMBOL_ID() != null)
			this.contextSymbol.insertProp(PropFactory.createProp(ctx.SYMBOL_ID().getText(), this.visitExpr(ctx.expr())));
		else
		{
			let prop = new Prop();
			prop.name = ctx.getChild(0).getText();
			prop.type = ExprType.Symbol;
			prop.value = this.visitExpr(ctx.expr()).value;
			this.contextSymbol.insertProp(prop);
		}
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
		if (ctx.SYMBOL_ID() != null)
			this.contextSymbol.insertProp(PropFactory.createProp(ctx.SYMBOL_ID().getText(), this.visitExpr(ctx.expr())));
		else
		{
			let prop = new Prop();
			prop.name = ctx.getChild(0).getText();
			prop.type = ExprType.Symbol;
			prop.value = this.visitExpr(ctx.expr()).value;
			this.contextSymbol.insertProp(prop);
		}
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
			expr.value = ctx.STRING_LITERAL().getText();
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
