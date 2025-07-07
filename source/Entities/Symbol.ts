import ExprType from '../Common/ExprType';
import Expr from './Expr';

export default class Symbol
{
	constructor ()
	{
		this.propMap = {};
	}

	insertProp (name:string, expr:Expr) : void
	{
		this.propMap[name] = expr;
	}

	name:string;
	type:ExprType;
	value:any;

	private propMap: {[x:string]:Expr|undefined}
}
