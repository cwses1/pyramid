import {open} from 'node:fs/promises';
import PyramidInterpreter from './Interpreters/PyramidInterpreter';

async function main ()
{
	const file = await open('./other/webapp.txt');
	const scriptText = await file.readFile({encoding: 'utf8'});
	const interpreter = new PyramidInterpreter();
	interpreter.executeScript(scriptText);
}

main();
