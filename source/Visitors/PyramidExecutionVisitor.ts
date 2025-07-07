import PyramidGrammarVisitor from "../GeneratedParsers/PyramidGrammarVisitor";
import { ScriptContext,
	StatementContext,
	AppStatementContext,
	AppPropListContext,
	AppPropContext,
	ExprContext } from "../GeneratedParsers/PyramidGrammarParser";
import Symbol from '../Entities/Symbol';
import Expr from '../Entities/Expr';
import ExprType from '../Common/ExprType';
import SymbolTable from '../SymbolTables/SymbolTable';
import PyramidException from '../Exceptions/PyramidException';
import Int32Parser from '../Parsers/Int32Parser';

export default class PyramidExecutionVisitor extends PyramidGrammarVisitor<any>
{
	constructor ()
	{
		super();
		this.symbolTable = new SymbolTable();
	}

	visitScript = (ctx: ScriptContext) =>
	{
		this.visitChildren(ctx);
	}

	visitStatement = (ctx: StatementContext) =>
	{
		this.visitChildren(ctx);
	}

	visitAppStatement = (ctx: AppStatementContext) =>
	{
		/*
		appStatement: 'app' SYMBOL_ID '{' appPropList? '}';
		*/
		console.log('visitAppStatement');
		let appSymbolName = ctx.SYMBOL_ID().getText();

		if (this.symbolTable.hasSymbolByName(appSymbolName))
			throw new PyramidException(`${appSymbolName}: Symbol already defined.`);

		let appSymbol = new Symbol();
		appSymbol.name = appSymbolName;
		appSymbol.type = ExprType.App;
		appSymbol.value = {};
		this.symbolTable.insertSymbol(appSymbol);

		this.contextSymbol = appSymbol;
		this.visitChildren(ctx);
		this.contextSymbol = undefined;
	}

	visitAppPropList = (ctx: AppPropListContext) =>
	{
		/*
		appPropList: appProp+;
		*/
		this.visitChildren(ctx);
	}

	visitAppProp = (ctx: AppPropContext) =>
	{
		/*
		appProp: (SYMBOL_ID | 'task' | 'solution' ) ':' expr ';';
		*/
		console.log('visitAppProp');
		
		let expr:Expr = this.visitExpr(ctx.expr());

		if (ctx.SYMBOL_ID() != null)
			this.contextSymbol.insertProp(ctx.SYMBOL_ID().getText(), expr);
		else
		{
			let propExpr = new Expr();
			propExpr.type = ExprType.ReferenceToSymbol;
			propExpr.value = expr;

			this.contextSymbol.insertProp(ctx.getChild(0).getText(), propExpr);
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
			expr.type = ExprType.ReferenceToSymbol;
			expr.value = this.symbolTable.getSymbolByName(ctx.SYMBOL_ID().getText());
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

	public symbolTable: SymbolTable | undefined;
	private contextSymbol: Symbol | undefined;
}
