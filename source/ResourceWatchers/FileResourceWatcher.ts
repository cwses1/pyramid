import ResourceWatcher from './ResourceWatcher';
import {watch} from 'node:fs/promises';

export default class FileResourceWatcher extends ResourceWatcher
{
	constructor ()
	{
		super();
	}

	async init ()
	{
		super.init();

		let fileWatcher = watch(this.filePath);

		for await (const event of fileWatcher)
			console.log(event);
	}

	filePath:string|undefined;
}
