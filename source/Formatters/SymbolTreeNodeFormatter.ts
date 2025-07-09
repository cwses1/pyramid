import SymbolTreeNode from '../Entities/SymbolTreeNode';

export default class SymbolTreeNodeFormatter
{
	static format (node:SymbolTreeNode|undefined, indent:number) : string
	{
		if (node == undefined)
			return '';

		let s = '';
		for (let i = 0; i < indent; i++)
			s += '\t';
		s += node.symbol.name + ':';

		if (node.parentNode == undefined)
			s += ' (no parent)';
		else
			s += ` (parent: ${node.parentNode.symbol.name})`;

		s += '\n';

		node.childNodes.forEach((childNode) =>
		{
			s += SymbolTreeNodeFormatter.format(childNode, indent + 1);
		})

		return s;
	}
}
