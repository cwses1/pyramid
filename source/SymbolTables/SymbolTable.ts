import Symbol from '../Entities/Symbol';

export default class SymbolTable
{
	constructor ()
	{
		this.symbolMap = {};
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
