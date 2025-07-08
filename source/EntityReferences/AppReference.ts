export default class AppReference
{
	static propMap:{[x:string]: boolean} = {};

	static
	{
		AppReference.propMap['name'] = false;
		AppReference.propMap['type'] = false;
		AppReference.propMap['path'] = false;
		AppReference.propMap['include'] = true;
		AppReference.propMap['exclude'] = true;
		AppReference.propMap['resource'] = true;
		AppReference.propMap['task'] = true;
	}

	static propIsMultiValue (propName:string): boolean
	{
		return AppReference.propMap[propName];
	}
}
