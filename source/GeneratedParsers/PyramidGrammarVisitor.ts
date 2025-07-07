// Generated from PyramidGrammar.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ScriptContext } from "./PyramidGrammarParser.js";
import { StatementContext } from "./PyramidGrammarParser.js";
import { AppStatementContext } from "./PyramidGrammarParser.js";
import { AppPropListContext } from "./PyramidGrammarParser.js";
import { AppPropContext } from "./PyramidGrammarParser.js";
import { ExprContext } from "./PyramidGrammarParser.js";
import { TaskStatementContext } from "./PyramidGrammarParser.js";
import { TaskPropListContext } from "./PyramidGrammarParser.js";
import { TaskPropContext } from "./PyramidGrammarParser.js";
import { CondClauseContext } from "./PyramidGrammarParser.js";
import { CondExprContext } from "./PyramidGrammarParser.js";
import { SimpleCondExprContext } from "./PyramidGrammarParser.js";
import { EnvironmentStatementContext } from "./PyramidGrammarParser.js";
import { EnvironmentPropListContext } from "./PyramidGrammarParser.js";
import { EnvironmentPropContext } from "./PyramidGrammarParser.js";
import { ResourceStatementContext } from "./PyramidGrammarParser.js";
import { ResourcePropListContext } from "./PyramidGrammarParser.js";
import { ResourcePropContext } from "./PyramidGrammarParser.js";
import { SolutionStatementContext } from "./PyramidGrammarParser.js";
import { SolutionPropListContext } from "./PyramidGrammarParser.js";
import { SolutionPropContext } from "./PyramidGrammarParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PyramidGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class PyramidGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript?: (ctx: ScriptContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.appStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAppStatement?: (ctx: AppStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.appPropList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAppPropList?: (ctx: AppPropListContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.appProp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAppProp?: (ctx: AppPropContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.taskStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaskStatement?: (ctx: TaskStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.taskPropList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaskPropList?: (ctx: TaskPropListContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.taskProp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaskProp?: (ctx: TaskPropContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.condClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondClause?: (ctx: CondClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.condExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondExpr?: (ctx: CondExprContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.simpleCondExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCondExpr?: (ctx: SimpleCondExprContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.environmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnvironmentStatement?: (ctx: EnvironmentStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.environmentPropList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnvironmentPropList?: (ctx: EnvironmentPropListContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.environmentProp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnvironmentProp?: (ctx: EnvironmentPropContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.resourceStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceStatement?: (ctx: ResourceStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.resourcePropList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourcePropList?: (ctx: ResourcePropListContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.resourceProp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceProp?: (ctx: ResourcePropContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.solutionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSolutionStatement?: (ctx: SolutionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.solutionPropList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSolutionPropList?: (ctx: SolutionPropListContext) => Result;
	/**
	 * Visit a parse tree produced by `PyramidGrammarParser.solutionProp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSolutionProp?: (ctx: SolutionPropContext) => Result;
}

