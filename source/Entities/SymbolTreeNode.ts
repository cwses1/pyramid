import Symbol from './Symbol';
import TreeVisitor from '../TreeVisitors/TreeVisitor';

export default class SymbolTreeNode
{
	constructor ()
	{
		this.childNodes = [];
	}

	getParentNodeWithChildName (childNodeName:string) : SymbolTreeNode | undefined
	{
		if (this.childNodes.find((childNode) => childNode.hasName(childNodeName)) != undefined)
			return this; // I'm the parent node since I have a child with this name.

		for (let i = 0; i < this.childNodes.length; i++)
		{
			let node = this.childNodes[i].getParentNodeWithChildName(childNodeName);

			if (node != undefined)
				return node;
		}

		return undefined;
	}

	hasName (name:string): boolean
	{
		return this.symbol.name == name;
	}

	getRoot (): SymbolTreeNode
	{
		if (this.parentNode == undefined)
			return this;

		return this.parentNode.getRoot();
	}

	receiveTreeVisitor (visitor: TreeVisitor)
	{
		visitor.visit(this);

		this.childNodes.forEach((childNode) =>
		{
			visitor.visit(childNode);
		});
	}

	symbol:Symbol;
	parentNode:SymbolTreeNode|undefined;
	childNodes:SymbolTreeNode[];
}
