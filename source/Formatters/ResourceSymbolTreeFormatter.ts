import Symbol from '../Entities/Symbol';
import ExprTypeFormatter from './ExprTypeFormatter';
import ExprType from '../Common/ExprType';
import ExprFormatter from './ExprFormatter';
import ResourceSymbolTree from '../Trees/ResourceSymbolTree';
import SymbolTreeNode from '../Entities/SymbolTreeNode';
import SymbolTreeNodeFormatter from './SymbolTreeNodeFormatter';

export default class ResourceSymbolTreeFormatter
{
	static format (tree:ResourceSymbolTree) : string
	{
		return SymbolTreeNodeFormatter.format(tree.root, 0);
	}
}
