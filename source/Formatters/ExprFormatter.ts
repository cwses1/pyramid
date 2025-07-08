import ExprType from '../Common/ExprType';
import Expr from '../Entities/Expr';
import ExprTypeFormatter from './ExprTypeFormatter';
import Symbol from '../Entities/Symbol';

export default class ExprFormatter
{
	static format (expr:Expr) : string
	{
		if (expr.type == ExprType.Symbol)
			return `${(expr.value as Symbol).name}:${ExprTypeFormatter.format(expr.type)}`;
		else if (expr.type == ExprType.List)
		{
			let exprList = expr.value as Expr[];

			let s = '[';

			exprList.forEach((currentExpr, index) =>
			{
				s += ExprFormatter.format(currentExpr)
				s += index != exprList.length - 1 ? ',' : '';
			});

			s += ']';
			return s;
		}
		else
			return `${expr.value}:${ExprTypeFormatter.format(expr.type)}`;
	}
}
