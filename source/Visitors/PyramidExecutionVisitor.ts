import PyramidGrammarVisitor from "../GeneratedParsers/PyramidGrammarVisitor";
import { ScriptContext, StatementContext } from "../GeneratedParsers/PyramidGrammarParser";

export default class PyramidExecutionVisitor extends PyramidGrammarVisitor<any>
{
	visitScript = (ctx: ScriptContext) =>
	{
		console.log('visitScript');
	}

	visitStatement = (ctx: StatementContext) =>
	{
		console.log('visitStatement');
	}
}
