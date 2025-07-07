import {open} from 'node:fs/promises';
import { CharStream, CommonTokenStream } from 'antlr4';
import PyramidGrammarLexer from './GeneratedParsers/PyramidGrammarLexer';
import PyramidGrammarParser from './GeneratedParsers/PyramidGrammarParser';
import PyramidExecutionVisitor from './Visitors/PyramidExecutionVisitor';

async function main ()
{
	const file = await open('./other/webapp.txt');
	const scriptText = await file.readFile({encoding: 'utf8'});
	console.log(scriptText);
	const charStream = new CharStream(scriptText);
	const lexer = new PyramidGrammarLexer(charStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new PyramidGrammarParser(tokenStream);
	parser.script().accept(new PyramidExecutionVisitor());
}

main();
