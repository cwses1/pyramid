import Symbol from '../Entities/Symbol';
import ExprTypeFormatter from './ExprTypeFormatter';
import ExprType from '../Common/ExprType';

export default class SymbolFormatter
{
	static format (symbol:Symbol) : string
	{
		let s = `${symbol.name}: ${ExprTypeFormatter.format(symbol.type)}\n`;
		s += '{\n'
		symbol.getProps().forEach((prop) =>
		{
			if (prop.type == ExprType.Symbol)
				s += `\t${prop.name}: ${prop.value.name}:${ExprTypeFormatter.format(prop.type)};\n`;
			else
				s += `\t${prop.name}: ${prop.value}:${ExprTypeFormatter.format(prop.type)};\n`;
		});
		s += '}\n'
		return s;
	}
}
