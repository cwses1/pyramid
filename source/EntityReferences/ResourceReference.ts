export default class ResourceReference
{
	static propMap:{[x:string]: boolean} = {};

	static
	{
		ResourceReference.propMap['name'] = false;
		ResourceReference.propMap['type'] = false;
		ResourceReference.propMap['path'] = false;
		ResourceReference.propMap['include'] = true;
		ResourceReference.propMap['exclude'] = true;
		ResourceReference.propMap['resource'] = true;
		ResourceReference.propMap['task'] = true;
	}

	static propIsMultiValue (propName:string): boolean
	{
		return ResourceReference.propMap[propName];
	}
}
