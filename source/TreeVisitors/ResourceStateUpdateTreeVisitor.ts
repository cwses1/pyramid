import TreeVisitor from './TreeVisitor';
import SymbolTreeNode from '../Entities/SymbolTreeNode';
import ExprType from '../Common/ExprType';
import Symbol from '../Entities/Symbol';
import Expr from '../Entities/Expr';
import ResourceStateUpdateEvent from '../Entities/ResourceStateUpdateEvent';

export default class ResourceStateUpdateTreeVisitor extends TreeVisitor
{
	visit (node: SymbolTreeNode)
	{
		let resourceSymbol = node.symbol;
		console.log(`Visiting resource ${resourceSymbol.name}.`);

		if (node.symbol.type == ExprType.Resource || node.symbol.type == ExprType.App)
			this.runTasks(node); // All tasks are run asynchronously but we wait for all of them to finish before moving to the parent node.

		//this.visitParentNode(node); // Visit the parent node of this node if it exists.
		if (node.parentNode != undefined)
			this.visit(node.parentNode);
		else
			console.log(`Parent node for resource ${resourceSymbol.name} is undefined.`);
	}

	runTasks (node: SymbolTreeNode)
	{
		let resourceSymbol = node.symbol;

		if (resourceSymbol.hasProp('task'))
		{
			(resourceSymbol.getProp('task').expr.value as Expr[]).forEach((currentExpr) =>
			{
				let taskSymbol:Symbol = currentExpr.value as Symbol;
				console.log(`Task: ${taskSymbol.name} for resource ${resourceSymbol.name}.`);
			})
		}
		else
			console.log(`No tasks for resource ${resourceSymbol.name}.`);

	}

	resourceStateUpdateEvent: ResourceStateUpdateEvent; // The original state update event that caused this visitor to be created and applied to the tree.
}
