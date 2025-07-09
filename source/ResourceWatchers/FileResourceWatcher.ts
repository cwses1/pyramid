import ResourceWatcher from './ResourceWatcher';
import {watch} from 'node:fs/promises';
import ResourceStateUpdateEvent from '../Entities/ResourceStateUpdateEvent';

export default class FileResourceWatcher extends ResourceWatcher
{
	constructor ()
	{
		super();
	}

	async start ()
	{
		let fileWatcher = watch(this.filePath);

		for await (const event of fileWatcher)
			this.receiveWatchEvent(event)
	}

	receiveWatchEvent (event:any)
	{
		console.log(event);

		let resourceStateUpdateEvent = new ResourceStateUpdateEvent();
		resourceStateUpdateEvent.symbolTreeNode = this.node;
		resourceStateUpdateEvent.dateTime = new Date();
		resourceStateUpdateEvent.originalEvent = event;
		this.notifyResourceStateUpdate(resourceStateUpdateEvent);
	}

	filePath:string|undefined;
}
