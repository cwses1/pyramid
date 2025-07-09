import SymbolTreeNode from '../Entities/SymbolTreeNode';

export default class TreeVisitor
{
	visit (node: SymbolTreeNode)
	{
	}

	visitChildNodes (node: SymbolTreeNode)
	{
		node.childNodes.forEach((childNode) =>
		{
			this.visit(childNode);
		});
	}

	visitParentNode (node: SymbolTreeNode)
	{
		if (node.parentNode != undefined)
			this.visit(node.parentNode);
	}
}
