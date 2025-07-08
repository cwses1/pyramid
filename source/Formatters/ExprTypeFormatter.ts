import ExprType from '../Common/ExprType';

let formatMap:{[x:number]: string} = {};
formatMap[ExprType.App] = 'App';
formatMap[ExprType.Int32] = 'Int32';
formatMap[ExprType.List] = 'List';
formatMap[ExprType.String] = 'String';
formatMap[ExprType.Symbol] = 'Symbol';
formatMap[ExprType.Resource] = 'Resource';
formatMap[ExprType.Task] = 'Task';
formatMap[ExprType.Environment] = 'Environment';
formatMap[ExprType.Solution] = 'Solution';

export default class ExprTypeFormatter
{
	static format (exprType:number) : string
	{
		return formatMap[exprType];
	}
}
