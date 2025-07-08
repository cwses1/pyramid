import Symbol from '../Entities/Symbol';
import ExprTypeFormatter from './ExprTypeFormatter';
import ExprType from '../Common/ExprType';
import ExprFormatter from './ExprFormatter';
import ResourceSymbolTree from '../Trees/ResourceSymbolTree';
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
		s += node.symbol.name + ':\n';

		node.childNodes.forEach((childNode) =>
		{
			s += SymbolTreeNodeFormatter.format(childNode, indent + 1);
		})

		return s;
	}
}
