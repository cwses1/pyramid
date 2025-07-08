import Symbol from '../Entities/Symbol';
import ExprTypeFormatter from './ExprTypeFormatter';
import ExprType from '../Common/ExprType';
import ExprFormatter from './ExprFormatter';

export default class SymbolFormatter
{
	static format (symbol:Symbol) : string
	{
		let s = `${symbol.name}: ${ExprTypeFormatter.format(symbol.type)}\n`;
		s += '{\n'
		symbol.getPropList().forEach((prop) =>
		{
			s += `\t${prop.name}: ${ExprFormatter.format(prop.expr)};\n`;
		});
		s += '}\n'
		return s;
	}
}
