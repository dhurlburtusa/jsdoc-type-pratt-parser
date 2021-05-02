export type ParseResult =
  NameResult
  | UnionResult
  | GenericResult
  | StringValueResult
  | NullResult
  | UndefinedResult
  | AllResult
  | UnknownResult
  | FunctionResult
  | RecordResult
  | ModuleResult
  | NamePathResult
  | SymbolResult
  | TypeOfResult
  | KeyOfResult
  | ImportResult
  | TupleResult
  | OptionalResult<ParseResult>
  | NullableResult<ParseResult>
  | NotNullableResult<ParseResult>
  | VariadicResult<ParseResult>

export type NonTerminalResult =
  ParseResult
  | KeyValueResult<ParseResult | NameResult | NumberResult>
  | NumberResult
  | ParameterList

export interface OptionalResult<T extends ParseResult> {
  type: 'OPTIONAL'
  element: T
  meta: {
    position: 'PREFIX' | 'SUFFIX'
  }
}

export interface NullableResult<T extends ParseResult> {
  type: 'NULLABLE'
  element: T
  meta: {
    position: 'PREFIX' | 'SUFFIX'
  }
}

export interface NotNullableResult<T extends ParseResult> {
  type: 'NOT_NULLABLE'
  element: T
  meta: {
    position: 'PREFIX' | 'SUFFIX'
  }
}

export interface VariadicResult<T extends ParseResult> {
  type: 'VARIADIC'
  element?: T
  meta: {
    position: 'PREFIX' | 'SUFFIX' | 'ONLY_DOTS'
    squareBrackets: boolean
  }
}

export interface NameResult {
  type: 'NAME'
  value: string
  meta: {
    reservedWord: boolean
  }
}

export interface UnionResult {
  type: 'UNION'
  elements: ParseResult[]
}

export interface GenericResult {
  type: 'GENERIC'
  left: ParseResult
  elements: ParseResult[]
  meta: {
    brackets: '<>' | '[]'
    dot: boolean
  }
}

export interface StringValueResult {
  type: 'STRING_VALUE'
  value: string
  meta: {
    quote: '\'' | '"'
  }
}

export interface NullResult {
  type: 'NULL'
}

export interface UndefinedResult {
  type: 'UNDEFINED'
}

export interface AllResult {
  type: 'ALL'
}

export interface UnknownResult {
  type: 'UNKNOWN'
}

export interface FunctionResult {
  type: 'FUNCTION'
  parameters: Array<ParseResult | KeyValueResult>
  returnType?: ParseResult
  meta: {
    arrow: boolean
  }
}

export interface KeyValueResult<KeyType = NameResult> {
  type: 'KEY_VALUE'
  left: KeyType
  right: ParseResult
}

export interface RecordResult {
  type: 'RECORD'
  fields: Array<KeyValueResult<ParseResult | NumberResult> | ParseResult | NumberResult>
}

export interface ModuleResult {
  type: 'MODULE'
  value: string
}

export interface NamePathResult {
  type: 'NAME_PATH'
  left: ParseResult
  right: NameResult | NumberResult | StringValueResult
  meta: {
    type: '~' | '#' | '.'
  }
}

export interface NumberResult {
  type: 'NUMBER'
  value: number
}

export interface SymbolResult {
  type: 'SYMBOL'
  value: string
  element?: NumberResult | NameResult | VariadicResult<NameResult>
}

export interface TypeOfResult {
  type: 'TYPE_OF'
  element?: ParseResult
}

export interface KeyOfResult {
  type: 'KEY_OF'
  element?: ParseResult
}

export interface ImportResult {
  type: 'IMPORT'
  element: StringValueResult
}

export interface ParameterList {
  type: 'PARAMETER_LIST'
  elements: Array<KeyValueResult | ParseResult>
}

export interface TupleResult {
  type: 'TUPLE'
  elements: ParseResult[]
}
