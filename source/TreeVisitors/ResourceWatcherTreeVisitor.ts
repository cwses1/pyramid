import TreeVisitor from './TreeVisitor';
import SymbolTreeNode from '../Entities/SymbolTreeNode';
import ExprType from '../Common/ExprType';
import Symbol from '../Entities/Symbol';
import ResourceWatcherProvider from '../ResourceWatchers/ResourceWatcherProvider';
import ResourceWatcherConfiguratorProvider from '../ResourceWatcherConfigurators/ResourceWatcherConfiguratorProvider';
import ResourceStateUpdateEvent from '../Entities/ResourceStateUpdateEvent';
import ResourceWatcher from '../ResourceWatchers/ResourceWatcher';

export default class ResourceWatcherTreeVisitor extends TreeVisitor
{
	visit (node: SymbolTreeNode)
	{
		console.log(`Visiting ${node.symbol.name}.`);

		if (node.symbol.type == ExprType.Resource || node.symbol.type == ExprType.App)
		{
			let resourceSymbol = node.symbol;

			if (resourceSymbol.hasProp('type'))
			{
				let resourceType:string = resourceSymbol.getProp('type').expr.value;

				let resourceWatcher:ResourceWatcher = ResourceWatcherProvider.getResourceWatcher(resourceType);
				resourceWatcher.node = node;
				resourceWatcher.symbol = node.symbol;
				resourceWatcher.notifyResourceStateUpdate = this.notifyResourceStateUpdate;
				ResourceWatcherConfiguratorProvider.getConfigurator(resourceType).configure(resourceWatcher);
				resourceWatcher.init();
				resourceWatcher.start();
			}
		}

		this.visitChildNodes(node);
	}

	notifyResourceStateUpdate: (e:ResourceStateUpdateEvent) => void;
}
