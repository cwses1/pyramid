import TreeVisitor from './TreeVisitor';
import SymbolTreeNode from '../Entities/SymbolTreeNode';

export default class ResourceWatcherTreeVisitor extends TreeVisitor
{
	visit (node: SymbolTreeNode)
	{
		console.log(`Visiting ${node.symbol.name}.`);

		node.childNodes.forEach((childNode) =>
		{
			this.visit(childNode);
		});
	}
}
