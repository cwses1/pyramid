import ResourceWatcherConfigurator from './ResourceWatcherConfigurator';
import Symbol from '../Entities/Symbol';
import ResourceWatcher from '../ResourceWatchers/ResourceWatcher';
import FileResourceWatcher from '../ResourceWatchers/FileResourceWatcher';

export default class FileResourceWatcherConfigurator extends ResourceWatcherConfigurator
{
	constructor ()
	{
		super();
	}

	configure (resourceWatcher:ResourceWatcher, resourceSymbol:Symbol)
	{
		let watcher = resourceWatcher as FileResourceWatcher;
		watcher.filePath = resourceSymbol.getProp('path').expr.value as string;
	}
}
