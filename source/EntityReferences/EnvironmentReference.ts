export default class EnvironmentReference
{
	static propMap:{[x:string]: boolean} = {};

	static
	{
		EnvironmentReference.propMap['name'] = false;
	}

	static propIsMultiValue (propName:string): boolean
	{
		return EnvironmentReference.propMap[propName];
	}
}
