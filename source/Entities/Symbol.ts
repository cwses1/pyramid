import ExprType from '../Common/ExprType';
import Prop from './Prop';
import Expr from './Expr';
import PropFactory from '../EntityFactories/PropFactory';

export default class Symbol
{
	constructor ()
	{
		this.props = {};
	}

	getPropList () : Prop[]
	{
		return Object.values(this.props);
	}

	insertProp (prop:Prop) : void
	{
		this.props[prop.name] = prop;
	}

	hasProp (propName:string) : boolean
	{
		return this.props[propName] != undefined;
	}

	getProp (propName:string) : Prop
	{
		return this.props[propName];
	}

	appendProp (prop:Prop) : void
	{
		let propName:string = prop.name;

		if (!this.hasProp(propName))
		{
			let createdListProp = new Prop();
			createdListProp.name = propName;

			let createdExpr = new Expr();
			createdExpr.type = ExprType.List;
			createdExpr.value = [];
			createdListProp.expr = createdExpr;

			this.props[propName] = createdListProp;
		}

		(this.props[propName].expr.value as Expr[]).push(prop.expr);
	}

	name:string;
	type:number;
	props: {[x:string]:Prop | undefined}
}
