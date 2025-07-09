import ResourceWatcherConfigurator from './ResourceWatcherConfigurator';
import ResourceWatcher from '../ResourceWatchers/ResourceWatcher';
import FileResourceWatcher from '../ResourceWatchers/FileResourceWatcher';

export default class FileResourceWatcherConfigurator extends ResourceWatcherConfigurator
{
	constructor ()
	{
		super();
	}

	configure (resourceWatcher:ResourceWatcher)
	{
		let watcher = resourceWatcher as FileResourceWatcher;
		watcher.filePath = watcher.symbol.getProp('path').expr.value as string;
	}
}
