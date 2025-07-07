grammar PyramidGrammar;

WS: [ \r\t\n]+ -> skip ;
LINE_COMMENT: '//' ~( '\n'|'\r' )* '\r'? '\n' -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;

STRING_LITERAL: '\'' ([ a-zA-Z0-9%_/-] | '.' | '#'  | ':'  | '+' | '*' | '{' | '}')* '\'';
SYMBOL_ID: [a-zA-Z][a-zA-Z0-9_\-]+;
INT_LITERAL: [0-9]+;
REGEX_LITERAL: '/' ('^' | '$' | '*' | '[' | ']' | [a-z]+ | [A-Z]+ | [0-9]+ | '-' | '(' | ')' | '.' | '+' | '\\/')* '/';

script: statement+;

statement: appStatement
	| taskStatement
	| environmentStatement
	| resourceStatement
	| solutionStatement
	;

appStatement: 'app' SYMBOL_ID '{' appPropList? '}';
appPropList: appProp+;
appProp: (SYMBOL_ID | 'task' | 'solution' ) ':' expr ';';

expr: STRING_LITERAL | SYMBOL_ID | INT_LITERAL;

taskStatement: 'task' SYMBOL_ID '{' taskPropList? '}';
taskPropList: taskProp+;
taskProp: (SYMBOL_ID | 'task') ':' expr condClause? ';';

condClause: '(' condExpr ')';
condExpr: simpleCondExpr
	| simpleCondExpr (('and' | 'or') condExpr)?
	| '(' condExpr ')'
	;
simpleCondExpr: (SYMBOL_ID | 'environment') ('=' | '!=' | '==') expr;

environmentStatement: 'environment' SYMBOL_ID '{' environmentPropList? '}';
environmentPropList: environmentProp+;
environmentProp: (SYMBOL_ID | 'solution') ':' expr ';';

resourceStatement: 'resource' SYMBOL_ID '{' resourcePropList? '}';
resourcePropList: resourceProp+;
resourceProp: SYMBOL_ID ':' expr condClause? ';';

solutionStatement: 'solution' SYMBOL_ID '{' solutionPropList? '}';
solutionPropList: solutionProp+;
solutionProp: SYMBOL_ID ':' expr ';';
