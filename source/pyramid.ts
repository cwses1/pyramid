import {open} from 'node:fs/promises';
import PyramidInterpreter from './Interpreters/PyramidInterpreter';
import SymbolTable from './SymbolTables/SymbolTable';

async function main ()
{
	const scriptFile = await open('./other/webapp.txt');
	const scriptText = await scriptFile.readFile({encoding: 'utf8'})
	await scriptFile.close();

	const interpreter = new PyramidInterpreter();
	interpreter.scriptText = scriptText;
	interpreter.symbolTable = new SymbolTable();
	interpreter.execute();
}

main();
