export default class SolutionReference
{
	static propMap:{[x:string]: boolean} = {};

	static
	{
		SolutionReference.propMap['name'] = false;
	}

	static propIsMultiValue (propName:string): boolean
	{
		return SolutionReference.propMap[propName];
	}
}
