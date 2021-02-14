Tester
------

Simple tester can be found at: https://simonseyock.github.io/jsdoc-type-pratt-parser/

Catharsis Tests
---------------

This parser runs all tests of https://github.com/hegemonic/catharsis. The current status is:

```
  passes the catharsis basic tests
    ✓ boolean
    ✓ object
    ✓ object with properties
    ✓ object with a single-quoted string-literal property
    ✓ object with a double-quoted string-literal property
    ✓ object with a string-literal property that includes other punctuation
    ✓ object with a numeric property
    ✓ variable number of parameters
    ✓ optional number parameter
    ✓ optional Object parameter
    ✓ null
    ✓ repeatable null
    ✓ undefined
    ✓ repeatable undefined
    ✓ all
    ✓ repeatable all
    ✓ unknown
    ✓ repeatable unknown
    ✓ name that starts with a reserved word
    ✓ name that includes a hyphen and a numeral
    ✓ name that includes an @ sign

  passes the catharsis function-type tests
    ✓ function with two basic parameters
    ✓ repeatable function with two basic parameters
    ✓ function with two basic parameters and a return value
    ✓ repeatable function with two basic parameters and a return value
    ✓ optional function with one basic parameter
    ✓ function with no parameters and a return value
    ✓ function with a "this" type and no parameters
    ✓ function with a "this" type and one parameter
    ✓ function with a "new" type and no parameters
    ✓ function with a "new" type and one parameter
    ✓ function with a "new" and "this" type and no parameters
    ✓ function with a fixed parameter, followed by a variable number of parameters, as well as a return value
    ✓ function with a variable number of parameters containing the value `null`
    ✓ function with a variable number of parameters containing the value `undefined`
    ✓ function with a variable number of parameters, a "new" type, a "this" type, and a return value
    ✓ function with a repeatable param that is not enclosed in brackets
    ✓ function that returns a type union
    ✓ function with no parameters and no return value
    ✓ function with a variable number of parameters containing any values
    ✓ function with a "this" type that returns a type union
    ✓ function with a "this" type that is a type union, and that returns a type union
    ✓ function with a "new" type and a variable number of params that accept all types, returning a name expression
    ✓ function with a "new" type that accepts an optional parameter of any type, as well as a return value
    ✓ function with a variable number of parameters and a return value
    ✓ function with a "this" type and a parameter that returns a type union

  passes the catharsis nullable tests
    ✓ nullable number
    ✓ postfix nullable number
    ✓ non-nullable object
    ✓ postfix non-nullable object
    ✓ repeatable nullable number
    ✓ postfix repeatable nullable number
    ✓ repeatable non-nullable object
    ✓ postfix repeatable non-nullable object
    ✓ postfix optional nullable number
    ✓ postfix nullable optional number
    ✓ postfix repeatable nullable optional number
    ✓ postfix optional non-nullable object
    ✓ postfix non-nullable optional object
    ✓ postfix repeatable non-nullable optional object

  passes the catharsis record-type tests
    ✓ empty record type
    ✓ record type with 1 typed property
    ✓ repeatable record type with 1 typed property
    ✓ optional record type with 1 typed property
    ✓ nullable record type with 1 typed property
    ✓ non-nullable record type with 1 typed property
    ✓ record type with 1 typed property and 1 untyped property
    ✓ record type with a property that uses a type application as a value
    ✓ record type with a property that uses a type union as a value
    ✓ record type with a property that uses a JavaScript keyword as a key
    ✓ record type with a property that uses a JavaScript future reserved word as a key
    ✓ record type with a property that uses a string representation of a JavaScript boolean literal as a key
    ✓ record type with a property that uses a numeric key

  passes the catharsis type-application tests
    ✓ array of strings, without a dot separator
    ✓ array of strings, with a dot separator
    ✓ repeatable array of strings
    ✓ object whose properties are strings and property values are numbers
    ✓ object whose properties are a type application and property values are a type union
    ✓ array of objects that have a length property
    ✓ array of unknown
    ✓ Promise containing string
    ✓ foo.Promise containing string

  passes the catharsis union-type tests
    ✓ union with 2 types (number and boolean)
    ✓ repeatable union with 2 types (number and boolean)
    ✓ union with 2 types (Object and undefined)
    ✓ union with 3 types (number, Window, and goog.ui.Menu)
    ✓ nullable union with 2 types (number and boolean)
    ✓ non-nullable union with 2 types (number and boolean)
    ✓ optional union with 2 types (number and boolean)
    ✓ union with 2 types (array and object with unknown value type)
    ✓ union with 2 type applications
    ✓ union with 2 types (an error, or a function that returns an error)
    ✓ type union with no enclosing parentheses
    ✓ type union with modifiers and no enclosing parentheses
    ✓ optional union with multiple types
    ✓ optional union with multiple types, including a nested union type

  passes the catharsis codetag tests
    - type application for an array
    - type application for an object with string keys
    - type application for an object with non-string keys
    - function type with parameters and new, this, and returns modifiers

  passes the catharsis jsdoc tests
    ✓ name expression that starts with the word "function"
    ✓ name expression with instance scope punctuation
    ✓ name expression with inner scope punctuation
    ✓ name expression with instance and inner scope punctuation
    ✓ name expression for a class within a module
    ✓ name expression for a class within a module with hyphens
    ✓ name expression containing a reserved word
    ✓ name expression for a symbol variation whose name is an empty string
    ✓ name expression for a symbol variation whose name is one numeral
    ✓ name expression for a symbol variation whose name is multiple numerals
    ✓ name expression for a symbol variation whose name is one letter
    ✓ name expression for a symbol variation whose name is multiple letters
    ✓ name expression enclosed in double quotes
    ✓ name expression enclosed in single quotes
    ✓ name expression partially enclosed in double quotes
    ✓ name expression partially enclosed in single quotes
    1) identifier with a repeatable param that is not enclosed in brackets
    ✓ type application with no period
    2) Jsdoc Toolkit 2-style array notation for an array of strings
    3) Jsdoc Toolkit 2-style array notation for an array of functions
    4) Jsdoc Toolkit 2-style nested array (two levels)
    5) Jsdoc Toolkit 2-style nested array (three levels)
    6) record type with a property that uses a type application as a key
    7) record type with a property that uses a type union as a key
    ✓ record type with a property name that starts with a literal
    ✓ record type with a property that contains a function with no preceding space
    8) function type with no trailing pathentheses
    ✓ standard function type (should still parse if JSDoc expressions are allowed)
    9) type union with no parentheses, a repeatable param, and a JSDoc-style array

  passes the catharsis link tests
    ✓ type application
    ✓ name expression for a class within a module

  passes the catharsis linkcss tests
    ✓ type application
    ✓ name expression for a class within a module
```

Documentation
-------------

The usage is not perfect for now as it is not published as a package for now. Dependening on your needs you might want to run `npm run build` before using. An `index.js` in umd format will be built. All exports from `index.ts` should be available. 

```
import { Parser } from 'src/index'

const parser = new Parser({
  mode: 'closure'
})

const result = parser.parse('myType.<string>')
```

Catharsis compat mode:

```
import { Parser, catharsisTransform } from 'src/index'

const parser = new Parser({
  mode: 'closure'
})

const result = catharsisTransform(parser.parse('myType.<string>'))
```

The types of the interfaces look like this:

```ts

// @public (undocumented)
export type AllResult = ModifiableResult & {
    type: 'ALL';
};

// @public (undocumented)
export type CatharsisAllResult = ModifiableResult & {
    type: 'AllLiteral';
};

// @public (undocumented)
export type CatharsisFieldResult = ModifiableResult & {
    type: 'FieldType';
    key: CatharsisNameResult;
    value: CatharsisParseResult | undefined;
};

// @public (undocumented)
export type CatharsisFunctionResult = ModifiableResult & {
    type: 'FunctionType';
    params: CatharsisParseResult[];
    result?: CatharsisParseResult;
    this?: CatharsisParseResult;
    new?: CatharsisParseResult;
};

// @public (undocumented)
export type CatharsisGenericResult = ModifiableResult & {
    type: 'TypeApplication';
    expression: CatharsisParseResult;
    applications: CatharsisParseResult[];
};

// @public (undocumented)
export type CatharsisNameResult = ModifiableResult & {
    type: 'NameExpression';
    name: string;
    reservedWord?: boolean;
};

// @public (undocumented)
export type CatharsisNullResult = ModifiableResult & {
    type: 'NullLiteral';
};

// @public (undocumented)
export type CatharsisParseResult = CatharsisNameResult | CatharsisUnionResult | CatharsisGenericResult | CatharsisNullResult | CatharsisUndefinedResult | CatharsisAllResult | CatharsisUnknownResult | CatharsisFunctionResult | CatharsisRecordResult;

// @public (undocumented)
export type CatharsisParseResultType = CatharsisParseResult['type'] | CatharsisFieldResult['type'];

// @public (undocumented)
export type CatharsisRecordResult = ModifiableResult & {
    type: 'RecordType';
    fields: CatharsisFieldResult[];
};

// @public (undocumented)
export function catharsisTransform(object: ParseResult | FieldResult): CatharsisParseResult;

// @public (undocumented)
export type CatharsisUndefinedResult = ModifiableResult & {
    type: 'UndefinedLiteral';
};

// @public (undocumented)
export type CatharsisUnionResult = ModifiableResult & {
    type: 'TypeUnion';
    elements: CatharsisParseResult[];
};

// @public (undocumented)
export type CatharsisUnknownResult = ModifiableResult & {
    type: 'UnknownLiteral';
};

// @public (undocumented)
export type FieldResult = ModifiableResult & {
    type: 'FIELD';
    key: NameResult;
    value: ParseResult | undefined;
};

// @public (undocumented)
export type FunctionResult = ModifiableResult & {
    type: 'FUNCTION';
    parameters: ParseResult[];
    returnType?: ParseResult;
    thisType?: ParseResult;
    newType?: ParseResult;
};

// @public (undocumented)
export type GenericResult = ModifiableResult & {
    type: 'GENERIC';
    subject: ParseResult;
    objects: ParseResult[];
};

// @public (undocumented)
export interface ModifiableResult {
    // (undocumented)
    nullable?: boolean;
    // (undocumented)
    optional?: boolean;
    // (undocumented)
    repeatable?: boolean;
}

// @public (undocumented)
export type ModuleResult = ModifiableResult & {
    type: 'MODULE';
    path: string;
};

// @public (undocumented)
export type NameResult = ModifiableResult & {
    type: 'NAME';
    name: string;
    reservedWord?: boolean;
};

// @public (undocumented)
export type NullResult = ModifiableResult & {
    type: 'NULL';
};

// @public (undocumented)
export type NumberResult = ModifiableResult & {
    type: 'NUMBER';
    value: number;
};

// @public (undocumented)
export class Parser {
    constructor({ mode }?: ParserOptions);
    // (undocumented)
    parse(text: string): ParseResult;
}

// @public (undocumented)
export type ParseResult = NameResult | UnionResult | GenericResult | StringValueResult | NullResult | UndefinedResult | AllResult | UnknownResult | FunctionResult | RecordResult | ModuleResult | PropertyPathResult | SymbolResult;

// @public (undocumented)
export type ParseResultType = ParseResult['type'] | FieldResult['type'];

// @public (undocumented)
export type ParserMode = 'closure' | 'jsdoc';

// @public (undocumented)
export interface ParserOptions {
    // (undocumented)
    mode?: ParserMode;
}

// @public (undocumented)
export type PropertyPathResult = ModifiableResult & {
    type: 'PROPERTY_PATH';
    path: string[];
};

// @public (undocumented)
export type RecordResult = ModifiableResult & {
    type: 'RECORD';
    fields: FieldResult[];
};

// @public (undocumented)
export type StringValueResult = ModifiableResult & {
    type: 'STRING_VALUE';
    value: string;
    quote: string;
};

// @public (undocumented)
export type SymbolResult = ModifiableResult & {
    type: 'SYMBOL';
    name: string;
    value?: string;
};

// @public (undocumented)
export type UndefinedResult = ModifiableResult & {
    type: 'UNDEFINED';
};

// @public (undocumented)
export type UnionResult = ModifiableResult & {
    type: 'UNION';
    elements: ParseResult[];
};

// @public (undocumented)
export type UnknownResult = ModifiableResult & {
    type: 'UNKNOWN';
};
```
