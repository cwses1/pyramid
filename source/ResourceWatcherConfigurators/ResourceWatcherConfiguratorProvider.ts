import ResourceWatcherConfigurator from './ResourceWatcherConfigurator';
import FileResourceWatcherConfigurator from './FileResourceWatcherConfigurator';
import FileSetResourceWatcherConfigurator from './FileSetResourceWatcherConfigurator';

export default class ResourceWatcherConfiguratorProvider
{
	static constructorMap:{[x:string]:new () => ResourceWatcherConfigurator} = {};

	static
	{
		ResourceWatcherConfiguratorProvider.constructorMap['file'] = FileResourceWatcherConfigurator;
		ResourceWatcherConfiguratorProvider.constructorMap['fileset'] = FileSetResourceWatcherConfigurator;
	}

	static getConfigurator (typeCode:string): ResourceWatcherConfigurator
	{
		return new ResourceWatcherConfiguratorProvider.constructorMap[typeCode]();
	}
}
