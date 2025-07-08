import ResourceWatcher from './ResourceWatcher';
import FileResourceWatcher from './FileResourceWatcher';
import FileSetResourceWatcher from './FileSetResourceWatcher';

let constructorMap:{[x:string]: typeof ResourceWatcher} = {};
constructorMap['file'] = FileResourceWatcher;
constructorMap['fileset'] = FileSetResourceWatcher;

export default class ResourceWatcherProvider
{
	static getResourceWatcher (typeCode:string): ResourceWatcher
	{
		return new constructorMap[typeCode]();
	}
}
