import {open} from 'node:fs/promises';
import PyramidInterpreter from './Interpreters/PyramidInterpreter';
import SymbolTable from './SymbolTables/SymbolTable';
import ResourceSymbolTree from './Trees/ResourceSymbolTree';
import ResourceWatcherTreeVisitor from './TreeVisitors/ResourceWatcherTreeVisitor';
import ResourceSymbolTreeFormatter from './Formatters/ResourceSymbolTreeFormatter';

async function main ()
{
	if (process.argv.length != 3)
	{
		console.log('USAGE:');
		console.log('pyramid <file-path>');
		return false;
	}

	const scriptFilePath = process.argv[2];

	const scriptFileHandle = await open(scriptFilePath);
	const scriptText = await scriptFileHandle.readFile({encoding: 'utf8'})
	await scriptFileHandle.close();

	let resourceSymbolTree = new ResourceSymbolTree();

	const interpreter = new PyramidInterpreter();
	interpreter.scriptText = scriptText;
	interpreter.symbolTable = new SymbolTable();
	interpreter.resourceSymbolTree = resourceSymbolTree;
	interpreter.execute();

	console.log(ResourceSymbolTreeFormatter.format(resourceSymbolTree));
	resourceSymbolTree.receiveTreeVisitor(new ResourceWatcherTreeVisitor());

	/*
	process.stdin.on('readable', () =>
	{
		let chunk;

		while ((chunk = process.stdin.read()) != null)
		{
			console.log(chunk);
		}
	});

	process.on('SIGINT', () =>
	{
		console.log('SIGINT signal received.');
	});
	*/
}

main();
