import SymbolTreeNode from '../Entities/SymbolTreeNode';
import Symbol from '../Entities/Symbol';
import ResourceStateUpdateEvent from '../Entities/ResourceStateUpdateEvent';

export default class ResourceWatcher
{
	init ()
	{
	}

	start ()
	{
	}

	node:SymbolTreeNode;
	symbol:Symbol;
	notifyResourceStateUpdate: (e:ResourceStateUpdateEvent) => void;
}
