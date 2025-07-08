import Symbol from '../Entities/Symbol';
import ExprType from '../Common/ExprType';

export default class SymbolTable
{
	constructor ()
	{
		this.symbolMap = {};
	}

	getSymbols () : Symbol[]
	{
		return Object.values(this.symbolMap);
	}

	getSymbolByType (exprType:ExprType) : Symbol[]
	{
		return this.getSymbols().filter((symbol) => symbol.type == exprType);
	}

	getSymbolByName (name:string) : Symbol
	{
		return this.symbolMap[name];
	}

	hasSymbolByName (name:string): boolean
	{
		return this.symbolMap[name] != undefined;
	}

	insertSymbol (symbol:Symbol) : void
	{
		this.symbolMap[symbol.name] = symbol;
	}

	private symbolMap: {[x:string]:Symbol|undefined}
}
