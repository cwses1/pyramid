import Prop from './Prop';

export default class Symbol
{
	constructor ()
	{
		this.propMap = {};
	}

	getProps () : Prop[]
	{
		return Object.values(this.propMap);
	}

	insertProp (prop:Prop) : void
	{
		this.propMap[prop.name] = prop;
	}

	name:string;
	type:number;
	value:any;
	private propMap: {[x:string]:Prop|undefined}
}
