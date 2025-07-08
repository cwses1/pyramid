// Generated from PyramidGrammar.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import PyramidGrammarVisitor from "./PyramidGrammarVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class PyramidGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly WS = 20;
	public static readonly LINE_COMMENT = 21;
	public static readonly BLOCK_COMMENT = 22;
	public static readonly STRING_LITERAL = 23;
	public static readonly SYMBOL_ID = 24;
	public static readonly INT_LITERAL = 25;
	public static readonly REGEX_LITERAL = 26;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_script = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_appStatement = 2;
	public static readonly RULE_appPropList = 3;
	public static readonly RULE_appProp = 4;
	public static readonly RULE_expr = 5;
	public static readonly RULE_taskStatement = 6;
	public static readonly RULE_taskPropList = 7;
	public static readonly RULE_taskProp = 8;
	public static readonly RULE_condClause = 9;
	public static readonly RULE_condExpr = 10;
	public static readonly RULE_simpleCondExpr = 11;
	public static readonly RULE_environmentStatement = 12;
	public static readonly RULE_environmentPropList = 13;
	public static readonly RULE_environmentProp = 14;
	public static readonly RULE_resourceStatement = 15;
	public static readonly RULE_resourcePropList = 16;
	public static readonly RULE_resourceProp = 17;
	public static readonly RULE_solutionStatement = 18;
	public static readonly RULE_solutionPropList = 19;
	public static readonly RULE_solutionProp = 20;
	public static readonly RULE_printStatement = 21;
	public static readonly literalNames: (string | null)[] = [ null, "'app'", 
                                                            "'{'", "'}'", 
                                                            "'task'", "'solution'", 
                                                            "':'", "';'", 
                                                            "'('", "')'", 
                                                            "'and'", "'or'", 
                                                            "'environment'", 
                                                            "'='", "'!='", 
                                                            "'=='", "'resource'", 
                                                            "'print'", "'symbols'", 
                                                            "'symbol'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "WS", "LINE_COMMENT", 
                                                             "BLOCK_COMMENT", 
                                                             "STRING_LITERAL", 
                                                             "SYMBOL_ID", 
                                                             "INT_LITERAL", 
                                                             "REGEX_LITERAL" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"script", "statement", "appStatement", "appPropList", "appProp", "expr", 
		"taskStatement", "taskPropList", "taskProp", "condClause", "condExpr", 
		"simpleCondExpr", "environmentStatement", "environmentPropList", "environmentProp", 
		"resourceStatement", "resourcePropList", "resourceProp", "solutionStatement", 
		"solutionPropList", "solutionProp", "printStatement",
	];
	public get grammarFileName(): string { return "PyramidGrammar.g4"; }
	public get literalNames(): (string | null)[] { return PyramidGrammarParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return PyramidGrammarParser.symbolicNames; }
	public get ruleNames(): string[] { return PyramidGrammarParser.ruleNames; }
	public get serializedATN(): number[] { return PyramidGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, PyramidGrammarParser._ATN, PyramidGrammarParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public script(): ScriptContext {
		let localctx: ScriptContext = new ScriptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, PyramidGrammarParser.RULE_script);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 44;
				this.statement();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 200754) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, PyramidGrammarParser.RULE_statement);
		try {
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 49;
				this.appStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 50;
				this.taskStatement();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 51;
				this.environmentStatement();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 52;
				this.resourceStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 53;
				this.solutionStatement();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 54;
				this.printStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public appStatement(): AppStatementContext {
		let localctx: AppStatementContext = new AppStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, PyramidGrammarParser.RULE_appStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 57;
			this.match(PyramidGrammarParser.T__0);
			this.state = 58;
			this.match(PyramidGrammarParser.SYMBOL_ID);
			this.state = 59;
			this.match(PyramidGrammarParser.T__1);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16777264) !== 0)) {
				{
				this.state = 60;
				this.appPropList();
				}
			}

			this.state = 63;
			this.match(PyramidGrammarParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public appPropList(): AppPropListContext {
		let localctx: AppPropListContext = new AppPropListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, PyramidGrammarParser.RULE_appPropList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 65;
				this.appProp();
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16777264) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public appProp(): AppPropContext {
		let localctx: AppPropContext = new AppPropContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, PyramidGrammarParser.RULE_appProp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16777264) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 71;
			this.match(PyramidGrammarParser.T__5);
			this.state = 72;
			this.expr();
			this.state = 73;
			this.match(PyramidGrammarParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let localctx: ExprContext = new ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, PyramidGrammarParser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 58720256) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public taskStatement(): TaskStatementContext {
		let localctx: TaskStatementContext = new TaskStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, PyramidGrammarParser.RULE_taskStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.match(PyramidGrammarParser.T__3);
			this.state = 78;
			this.match(PyramidGrammarParser.SYMBOL_ID);
			this.state = 79;
			this.match(PyramidGrammarParser.T__1);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4 || _la===24) {
				{
				this.state = 80;
				this.taskPropList();
				}
			}

			this.state = 83;
			this.match(PyramidGrammarParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public taskPropList(): TaskPropListContext {
		let localctx: TaskPropListContext = new TaskPropListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, PyramidGrammarParser.RULE_taskPropList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 85;
				this.taskProp();
				}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===4 || _la===24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public taskProp(): TaskPropContext {
		let localctx: TaskPropContext = new TaskPropContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, PyramidGrammarParser.RULE_taskProp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 90;
			_la = this._input.LA(1);
			if(!(_la===4 || _la===24)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 91;
			this.match(PyramidGrammarParser.T__5);
			this.state = 92;
			this.expr();
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 93;
				this.condClause();
				}
			}

			this.state = 96;
			this.match(PyramidGrammarParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public condClause(): CondClauseContext {
		let localctx: CondClauseContext = new CondClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, PyramidGrammarParser.RULE_condClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 98;
			this.match(PyramidGrammarParser.T__7);
			this.state = 99;
			this.condExpr();
			this.state = 100;
			this.match(PyramidGrammarParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public condExpr(): CondExprContext {
		let localctx: CondExprContext = new CondExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, PyramidGrammarParser.RULE_condExpr);
		let _la: number;
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 102;
				this.simpleCondExpr();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 103;
				this.simpleCondExpr();
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===10 || _la===11) {
					{
					this.state = 104;
					_la = this._input.LA(1);
					if(!(_la===10 || _la===11)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 105;
					this.condExpr();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 108;
				this.match(PyramidGrammarParser.T__7);
				this.state = 109;
				this.condExpr();
				this.state = 110;
				this.match(PyramidGrammarParser.T__8);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleCondExpr(): SimpleCondExprContext {
		let localctx: SimpleCondExprContext = new SimpleCondExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, PyramidGrammarParser.RULE_simpleCondExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 114;
			_la = this._input.LA(1);
			if(!(_la===12 || _la===24)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 115;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 57344) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 116;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public environmentStatement(): EnvironmentStatementContext {
		let localctx: EnvironmentStatementContext = new EnvironmentStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, PyramidGrammarParser.RULE_environmentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 118;
			this.match(PyramidGrammarParser.T__11);
			this.state = 119;
			this.match(PyramidGrammarParser.SYMBOL_ID);
			this.state = 120;
			this.match(PyramidGrammarParser.T__1);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5 || _la===24) {
				{
				this.state = 121;
				this.environmentPropList();
				}
			}

			this.state = 124;
			this.match(PyramidGrammarParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public environmentPropList(): EnvironmentPropListContext {
		let localctx: EnvironmentPropListContext = new EnvironmentPropListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, PyramidGrammarParser.RULE_environmentPropList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 126;
				this.environmentProp();
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===5 || _la===24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public environmentProp(): EnvironmentPropContext {
		let localctx: EnvironmentPropContext = new EnvironmentPropContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, PyramidGrammarParser.RULE_environmentProp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 131;
			_la = this._input.LA(1);
			if(!(_la===5 || _la===24)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 132;
			this.match(PyramidGrammarParser.T__5);
			this.state = 133;
			this.expr();
			this.state = 134;
			this.match(PyramidGrammarParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resourceStatement(): ResourceStatementContext {
		let localctx: ResourceStatementContext = new ResourceStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, PyramidGrammarParser.RULE_resourceStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
			this.match(PyramidGrammarParser.T__15);
			this.state = 137;
			this.match(PyramidGrammarParser.SYMBOL_ID);
			this.state = 138;
			this.match(PyramidGrammarParser.T__1);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 139;
				this.resourcePropList();
				}
			}

			this.state = 142;
			this.match(PyramidGrammarParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resourcePropList(): ResourcePropListContext {
		let localctx: ResourcePropListContext = new ResourcePropListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, PyramidGrammarParser.RULE_resourcePropList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 144;
				this.resourceProp();
				}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resourceProp(): ResourcePropContext {
		let localctx: ResourcePropContext = new ResourcePropContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, PyramidGrammarParser.RULE_resourceProp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 149;
			this.match(PyramidGrammarParser.SYMBOL_ID);
			this.state = 150;
			this.match(PyramidGrammarParser.T__5);
			this.state = 151;
			this.expr();
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 152;
				this.condClause();
				}
			}

			this.state = 155;
			this.match(PyramidGrammarParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public solutionStatement(): SolutionStatementContext {
		let localctx: SolutionStatementContext = new SolutionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, PyramidGrammarParser.RULE_solutionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 157;
			this.match(PyramidGrammarParser.T__4);
			this.state = 158;
			this.match(PyramidGrammarParser.SYMBOL_ID);
			this.state = 159;
			this.match(PyramidGrammarParser.T__1);
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 160;
				this.solutionPropList();
				}
			}

			this.state = 163;
			this.match(PyramidGrammarParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public solutionPropList(): SolutionPropListContext {
		let localctx: SolutionPropListContext = new SolutionPropListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, PyramidGrammarParser.RULE_solutionPropList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 165;
				this.solutionProp();
				}
				}
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public solutionProp(): SolutionPropContext {
		let localctx: SolutionPropContext = new SolutionPropContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, PyramidGrammarParser.RULE_solutionProp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
			this.match(PyramidGrammarParser.SYMBOL_ID);
			this.state = 171;
			this.match(PyramidGrammarParser.T__5);
			this.state = 172;
			this.expr();
			this.state = 173;
			this.match(PyramidGrammarParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public printStatement(): PrintStatementContext {
		let localctx: PrintStatementContext = new PrintStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, PyramidGrammarParser.RULE_printStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 175;
			this.match(PyramidGrammarParser.T__16);
			this.state = 179;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 18:
				{
				this.state = 176;
				this.match(PyramidGrammarParser.T__17);
				}
				break;
			case 19:
				{
				this.state = 177;
				this.match(PyramidGrammarParser.T__18);
				this.state = 178;
				this.match(PyramidGrammarParser.SYMBOL_ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 181;
			this.match(PyramidGrammarParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,26,184,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,1,0,4,0,46,8,0,11,0,12,0,47,
	1,1,1,1,1,1,1,1,1,1,1,1,3,1,56,8,1,1,2,1,2,1,2,1,2,3,2,62,8,2,1,2,1,2,1,
	3,4,3,67,8,3,11,3,12,3,68,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,3,
	6,82,8,6,1,6,1,6,1,7,4,7,87,8,7,11,7,12,7,88,1,8,1,8,1,8,1,8,3,8,95,8,8,
	1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,3,10,107,8,10,1,10,1,10,1,10,
	1,10,3,10,113,8,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,3,12,123,8,12,
	1,12,1,12,1,13,4,13,128,8,13,11,13,12,13,129,1,14,1,14,1,14,1,14,1,14,1,
	15,1,15,1,15,1,15,3,15,141,8,15,1,15,1,15,1,16,4,16,146,8,16,11,16,12,16,
	147,1,17,1,17,1,17,1,17,3,17,154,8,17,1,17,1,17,1,18,1,18,1,18,1,18,3,18,
	162,8,18,1,18,1,18,1,19,4,19,167,8,19,11,19,12,19,168,1,20,1,20,1,20,1,
	20,1,20,1,21,1,21,1,21,1,21,3,21,180,8,21,1,21,1,21,1,21,0,0,22,0,2,4,6,
	8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,0,7,2,0,4,5,24,24,
	1,0,23,25,2,0,4,4,24,24,1,0,10,11,2,0,12,12,24,24,1,0,13,15,2,0,5,5,24,
	24,183,0,45,1,0,0,0,2,55,1,0,0,0,4,57,1,0,0,0,6,66,1,0,0,0,8,70,1,0,0,0,
	10,75,1,0,0,0,12,77,1,0,0,0,14,86,1,0,0,0,16,90,1,0,0,0,18,98,1,0,0,0,20,
	112,1,0,0,0,22,114,1,0,0,0,24,118,1,0,0,0,26,127,1,0,0,0,28,131,1,0,0,0,
	30,136,1,0,0,0,32,145,1,0,0,0,34,149,1,0,0,0,36,157,1,0,0,0,38,166,1,0,
	0,0,40,170,1,0,0,0,42,175,1,0,0,0,44,46,3,2,1,0,45,44,1,0,0,0,46,47,1,0,
	0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,1,1,0,0,0,49,56,3,4,2,0,50,56,3,12,6,
	0,51,56,3,24,12,0,52,56,3,30,15,0,53,56,3,36,18,0,54,56,3,42,21,0,55,49,
	1,0,0,0,55,50,1,0,0,0,55,51,1,0,0,0,55,52,1,0,0,0,55,53,1,0,0,0,55,54,1,
	0,0,0,56,3,1,0,0,0,57,58,5,1,0,0,58,59,5,24,0,0,59,61,5,2,0,0,60,62,3,6,
	3,0,61,60,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,64,5,3,0,0,64,5,1,0,0,
	0,65,67,3,8,4,0,66,65,1,0,0,0,67,68,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,
	69,7,1,0,0,0,70,71,7,0,0,0,71,72,5,6,0,0,72,73,3,10,5,0,73,74,5,7,0,0,74,
	9,1,0,0,0,75,76,7,1,0,0,76,11,1,0,0,0,77,78,5,4,0,0,78,79,5,24,0,0,79,81,
	5,2,0,0,80,82,3,14,7,0,81,80,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,0,83,84,
	5,3,0,0,84,13,1,0,0,0,85,87,3,16,8,0,86,85,1,0,0,0,87,88,1,0,0,0,88,86,
	1,0,0,0,88,89,1,0,0,0,89,15,1,0,0,0,90,91,7,2,0,0,91,92,5,6,0,0,92,94,3,
	10,5,0,93,95,3,18,9,0,94,93,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,5,
	7,0,0,97,17,1,0,0,0,98,99,5,8,0,0,99,100,3,20,10,0,100,101,5,9,0,0,101,
	19,1,0,0,0,102,113,3,22,11,0,103,106,3,22,11,0,104,105,7,3,0,0,105,107,
	3,20,10,0,106,104,1,0,0,0,106,107,1,0,0,0,107,113,1,0,0,0,108,109,5,8,0,
	0,109,110,3,20,10,0,110,111,5,9,0,0,111,113,1,0,0,0,112,102,1,0,0,0,112,
	103,1,0,0,0,112,108,1,0,0,0,113,21,1,0,0,0,114,115,7,4,0,0,115,116,7,5,
	0,0,116,117,3,10,5,0,117,23,1,0,0,0,118,119,5,12,0,0,119,120,5,24,0,0,120,
	122,5,2,0,0,121,123,3,26,13,0,122,121,1,0,0,0,122,123,1,0,0,0,123,124,1,
	0,0,0,124,125,5,3,0,0,125,25,1,0,0,0,126,128,3,28,14,0,127,126,1,0,0,0,
	128,129,1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,27,1,0,0,0,131,132,
	7,6,0,0,132,133,5,6,0,0,133,134,3,10,5,0,134,135,5,7,0,0,135,29,1,0,0,0,
	136,137,5,16,0,0,137,138,5,24,0,0,138,140,5,2,0,0,139,141,3,32,16,0,140,
	139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,143,5,3,0,0,143,31,1,0,
	0,0,144,146,3,34,17,0,145,144,1,0,0,0,146,147,1,0,0,0,147,145,1,0,0,0,147,
	148,1,0,0,0,148,33,1,0,0,0,149,150,5,24,0,0,150,151,5,6,0,0,151,153,3,10,
	5,0,152,154,3,18,9,0,153,152,1,0,0,0,153,154,1,0,0,0,154,155,1,0,0,0,155,
	156,5,7,0,0,156,35,1,0,0,0,157,158,5,5,0,0,158,159,5,24,0,0,159,161,5,2,
	0,0,160,162,3,38,19,0,161,160,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,
	164,5,3,0,0,164,37,1,0,0,0,165,167,3,40,20,0,166,165,1,0,0,0,167,168,1,
	0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,39,1,0,0,0,170,171,5,24,0,0,171,
	172,5,6,0,0,172,173,3,10,5,0,173,174,5,7,0,0,174,41,1,0,0,0,175,179,5,17,
	0,0,176,180,5,18,0,0,177,178,5,19,0,0,178,180,5,24,0,0,179,176,1,0,0,0,
	179,177,1,0,0,0,180,181,1,0,0,0,181,182,5,7,0,0,182,43,1,0,0,0,17,47,55,
	61,68,81,88,94,106,112,122,129,140,147,153,161,168,179];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PyramidGrammarParser.__ATN) {
			PyramidGrammarParser.__ATN = new ATNDeserializer().deserialize(PyramidGrammarParser._serializedATN);
		}

		return PyramidGrammarParser.__ATN;
	}


	static DecisionsToDFA = PyramidGrammarParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ScriptContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_script;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitScript) {
			return visitor.visitScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public appStatement(): AppStatementContext {
		return this.getTypedRuleContext(AppStatementContext, 0) as AppStatementContext;
	}
	public taskStatement(): TaskStatementContext {
		return this.getTypedRuleContext(TaskStatementContext, 0) as TaskStatementContext;
	}
	public environmentStatement(): EnvironmentStatementContext {
		return this.getTypedRuleContext(EnvironmentStatementContext, 0) as EnvironmentStatementContext;
	}
	public resourceStatement(): ResourceStatementContext {
		return this.getTypedRuleContext(ResourceStatementContext, 0) as ResourceStatementContext;
	}
	public solutionStatement(): SolutionStatementContext {
		return this.getTypedRuleContext(SolutionStatementContext, 0) as SolutionStatementContext;
	}
	public printStatement(): PrintStatementContext {
		return this.getTypedRuleContext(PrintStatementContext, 0) as PrintStatementContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_statement;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AppStatementContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
	public appPropList(): AppPropListContext {
		return this.getTypedRuleContext(AppPropListContext, 0) as AppPropListContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_appStatement;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitAppStatement) {
			return visitor.visitAppStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AppPropListContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public appProp_list(): AppPropContext[] {
		return this.getTypedRuleContexts(AppPropContext) as AppPropContext[];
	}
	public appProp(i: number): AppPropContext {
		return this.getTypedRuleContext(AppPropContext, i) as AppPropContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_appPropList;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitAppPropList) {
			return visitor.visitAppPropList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AppPropContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_appProp;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitAppProp) {
			return visitor.visitAppProp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(PyramidGrammarParser.STRING_LITERAL, 0);
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
	public INT_LITERAL(): TerminalNode {
		return this.getToken(PyramidGrammarParser.INT_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_expr;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskStatementContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
	public taskPropList(): TaskPropListContext {
		return this.getTypedRuleContext(TaskPropListContext, 0) as TaskPropListContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_taskStatement;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitTaskStatement) {
			return visitor.visitTaskStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskPropListContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public taskProp_list(): TaskPropContext[] {
		return this.getTypedRuleContexts(TaskPropContext) as TaskPropContext[];
	}
	public taskProp(i: number): TaskPropContext {
		return this.getTypedRuleContext(TaskPropContext, i) as TaskPropContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_taskPropList;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitTaskPropList) {
			return visitor.visitTaskPropList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskPropContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
	public condClause(): CondClauseContext {
		return this.getTypedRuleContext(CondClauseContext, 0) as CondClauseContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_taskProp;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitTaskProp) {
			return visitor.visitTaskProp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CondClauseContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public condExpr(): CondExprContext {
		return this.getTypedRuleContext(CondExprContext, 0) as CondExprContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_condClause;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitCondClause) {
			return visitor.visitCondClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CondExprContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleCondExpr(): SimpleCondExprContext {
		return this.getTypedRuleContext(SimpleCondExprContext, 0) as SimpleCondExprContext;
	}
	public condExpr(): CondExprContext {
		return this.getTypedRuleContext(CondExprContext, 0) as CondExprContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_condExpr;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitCondExpr) {
			return visitor.visitCondExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleCondExprContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_simpleCondExpr;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitSimpleCondExpr) {
			return visitor.visitSimpleCondExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnvironmentStatementContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
	public environmentPropList(): EnvironmentPropListContext {
		return this.getTypedRuleContext(EnvironmentPropListContext, 0) as EnvironmentPropListContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_environmentStatement;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitEnvironmentStatement) {
			return visitor.visitEnvironmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnvironmentPropListContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public environmentProp_list(): EnvironmentPropContext[] {
		return this.getTypedRuleContexts(EnvironmentPropContext) as EnvironmentPropContext[];
	}
	public environmentProp(i: number): EnvironmentPropContext {
		return this.getTypedRuleContext(EnvironmentPropContext, i) as EnvironmentPropContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_environmentPropList;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitEnvironmentPropList) {
			return visitor.visitEnvironmentPropList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnvironmentPropContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_environmentProp;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitEnvironmentProp) {
			return visitor.visitEnvironmentProp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceStatementContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
	public resourcePropList(): ResourcePropListContext {
		return this.getTypedRuleContext(ResourcePropListContext, 0) as ResourcePropListContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_resourceStatement;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitResourceStatement) {
			return visitor.visitResourceStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourcePropListContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public resourceProp_list(): ResourcePropContext[] {
		return this.getTypedRuleContexts(ResourcePropContext) as ResourcePropContext[];
	}
	public resourceProp(i: number): ResourcePropContext {
		return this.getTypedRuleContext(ResourcePropContext, i) as ResourcePropContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_resourcePropList;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitResourcePropList) {
			return visitor.visitResourcePropList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourcePropContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public condClause(): CondClauseContext {
		return this.getTypedRuleContext(CondClauseContext, 0) as CondClauseContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_resourceProp;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitResourceProp) {
			return visitor.visitResourceProp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SolutionStatementContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
	public solutionPropList(): SolutionPropListContext {
		return this.getTypedRuleContext(SolutionPropListContext, 0) as SolutionPropListContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_solutionStatement;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitSolutionStatement) {
			return visitor.visitSolutionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SolutionPropListContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public solutionProp_list(): SolutionPropContext[] {
		return this.getTypedRuleContexts(SolutionPropContext) as SolutionPropContext[];
	}
	public solutionProp(i: number): SolutionPropContext {
		return this.getTypedRuleContext(SolutionPropContext, i) as SolutionPropContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_solutionPropList;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitSolutionPropList) {
			return visitor.visitSolutionPropList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SolutionPropContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_solutionProp;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitSolutionProp) {
			return visitor.visitSolutionProp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStatementContext extends ParserRuleContext {
	constructor(parser?: PyramidGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYMBOL_ID(): TerminalNode {
		return this.getToken(PyramidGrammarParser.SYMBOL_ID, 0);
	}
    public get ruleIndex(): number {
    	return PyramidGrammarParser.RULE_printStatement;
	}
	// @Override
	public accept<Result>(visitor: PyramidGrammarVisitor<Result>): Result {
		if (visitor.visitPrintStatement) {
			return visitor.visitPrintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
