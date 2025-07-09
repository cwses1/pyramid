import ResourceSymbolTree from '../Trees/ResourceSymbolTree';
import SymbolTreeNodeFormatter from './SymbolTreeNodeFormatter';

export default class ResourceSymbolTreeFormatter
{
	static format (tree:ResourceSymbolTree) : string
	{
		return SymbolTreeNodeFormatter.format(tree.root, 0);
	}
}
