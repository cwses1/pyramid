import SymbolTable from '../SymbolTables/SymbolTable';
import SymbolFormatter from '../Formatters/SymbolFormatter';

export default class PrintSymbolAppService
{
	run ()
	{
		if (this.symbolName != undefined)
			console.log(SymbolFormatter.format(this.symbolTable.getSymbolByName(this.symbolName)));
		else
			this.symbolTable.getSymbols().forEach((symbol) =>
			{
				console.log(SymbolFormatter.format(symbol));
			});
	}

	symbolName:string | undefined;
	symbolTable: SymbolTable;
}
