import SymbolTable from '../SymbolTables/SymbolTable';
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
				node.childNodes.push(SymbolTreeNodeFactory.createSymbolTreeNode(resourceProp.expr.value));
			else if (resourceProp.expr.type == ExprType.List)
				(resourceProp.expr.value as Expr[]).forEach((currentExpr) =>
				{
					node.childNodes.push(SymbolTreeNodeFactory.createSymbolTreeNode(currentExpr.value as Symbol));
				});
			else
				throw new PyramidException('Cannot push resource to symbol tree node.');
		}
		
		return node;
	}
}
