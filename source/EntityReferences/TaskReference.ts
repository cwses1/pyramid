export default class TaskReference
{
	static propMap:{[x:string]: boolean} = {};

	static
	{
		TaskReference.propMap['path'] = false;
		TaskReference.propMap['arg'] = true;
	}

	static propIsMultiValue (propName:string): boolean
	{
		return this.propMap[propName];
	}
}
