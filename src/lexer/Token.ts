export type TokenType =
  '(' |
  ')' |
  '[' |
  ']' |
  '{' |
  '}' |
  '|' |
  '<' |
  '>' |
  ',' |
  '*' |
  '?' |
  '!' |
  '=' |
  ':' |
  '.' |
  '@' |
  '#' |
  '~' |
  '/' |
  '...' |
  'null' |
  'undefined' |
  'function' |
  'this' |
  'new' |
  'module' |
  'typeof' |
  'keyof' |
  'import' |
  'Identifier' |
  'StringValue' |
  'Number' |
  'EOF'

export interface Token {
  type: TokenType
  text: string
}