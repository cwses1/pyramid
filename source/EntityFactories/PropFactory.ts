import Expr from '../Entities/Expr';
import Prop from '../Entities/Prop';

export default class PropFactory
{
	static createProp (name:string, expr:Expr) : Prop
	{
		let prop = new Prop();
		prop.name = name;
		prop.expr = expr;
		return prop;
	}
}
