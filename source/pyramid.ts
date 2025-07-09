import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import {open} from 'node:fs/promises';
import PyramidInterpreter from './Interpreters/PyramidInterpreter';
import SymbolTable from './SymbolTables/SymbolTable';
import ResourceSymbolTree from './Trees/ResourceSymbolTree';
import ResourceWatcherTreeVisitor from './TreeVisitors/ResourceWatcherTreeVisitor';
import ResourceStateUpdateEvent from './Entities/ResourceStateUpdateEvent';
import ResourceStateUpdateTreeVisitor from './TreeVisitors/ResourceStateUpdateTreeVisitor';
import ResourceSymbolTreeFormatter from './Formatters/ResourceSymbolTreeFormatter';

async function main ()
{
	//
	// PROCESS COMMAND-LINE ARGUMENTS.
	//
	if (process.argv.length != 3)
	{
		console.log('USAGE:');
		console.log('pyramid <file-path>');
		return false;
	}

	const scriptFilePath = process.argv[2];

	//
	// LOAD THE SCRIPT.
	//
	const scriptFileHandle = await open(scriptFilePath);
	const scriptText = await scriptFileHandle.readFile({encoding: 'utf8'})
	await scriptFileHandle.close();

	//
	// RUN THE INTERPRETER.
	//
	let resourceSymbolTree = new ResourceSymbolTree();

	const interpreter = new PyramidInterpreter();
	interpreter.scriptText = scriptText;
	interpreter.symbolTable = new SymbolTable();
	interpreter.resourceSymbolTree = resourceSymbolTree;
	interpreter.execute();

	//
	// SET UP THE RESOURCE WATCHERS AND NOTIFICATION SYSTEM.
	//
	let resourceWatcherTreeVisitor = new ResourceWatcherTreeVisitor()
	resourceWatcherTreeVisitor.notifyResourceStateUpdate = notifyResourceStateUpdate;
	resourceSymbolTree.receiveTreeVisitor(resourceWatcherTreeVisitor);

	console.log(ResourceSymbolTreeFormatter.format(resourceSymbolTree));

	function notifyResourceStateUpdate (resourceStateUpdateEvent: ResourceStateUpdateEvent)
	{
		let symbolTreeNode = resourceStateUpdateEvent.symbolTreeNode;
		console.log(`${symbolTreeNode.symbol.name} resource state update notification received.`);

		let resourceStateUpdateTreeVisitor = new ResourceStateUpdateTreeVisitor();
		resourceStateUpdateTreeVisitor.resourceStateUpdateEvent = resourceStateUpdateEvent;
		symbolTreeNode.receiveTreeVisitor(resourceStateUpdateTreeVisitor);
	}

	const rl = readline.createInterface({ input, output });
	const answer = await rl.question('> ');
	rl.close();
}

main();
