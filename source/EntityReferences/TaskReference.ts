export default class TaskReference
{
	static propMap:{[x:string]: boolean} = {};

	static
	{
		TaskReference.propMap['cd'] = false;
		TaskReference.propMap['path'] = false;
		TaskReference.propMap['arg'] = true;
	}

	static propIsMultiValue (propName:string): boolean
	{
		return TaskReference.propMap[propName];
	}
}
