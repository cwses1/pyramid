import Symbol from '../Entities/Symbol';
import SymbolTreeNode from '../Entities/SymbolTreeNode';
import ExprType from '../Common/ExprType';
import Expr from '../Entities/Expr';
import PyramidException from '../Exceptions/PyramidException';

export default class SymbolTreeNodeFactory
{
	static createSymbolTreeNode (symbol:Symbol): SymbolTreeNode
	{
		let node = new SymbolTreeNode();
		node.symbol = symbol;

		if (symbol.hasProp('resource'))
		{
			let resourceProp = symbol.getProp('resource');

			if (resourceProp.expr.type == ExprType.Symbol)
			{
				let childNode = SymbolTreeNodeFactory.createSymbolTreeNode(resourceProp.expr.value);
				childNode.parentNode = node;
				node.childNodes.push(childNode);
			}
			else if (resourceProp.expr.type == ExprType.List)
				(resourceProp.expr.value as Expr[]).forEach((currentExpr) =>
				{
					let childNode = SymbolTreeNodeFactory.createSymbolTreeNode(currentExpr.value as Symbol);
					childNode.parentNode = node;
					node.childNodes.push(childNode);
				});
			else
				throw new PyramidException('Cannot push resource to symbol tree node.');
		}

		return node;
	}
}
