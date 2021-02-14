import { InfixParslet } from './Parslet'
import { TokenType } from '../lexer/Token'
import { ParserEngine } from '../ParserEngine'
import { ParseResult } from '../ParseResult'
import { Precedence } from './Precedence'

export class OptionalParslet implements InfixParslet {
  accepts (type: TokenType): boolean {
    return type === '='
  }

  getPrecedence (): number {
    return Precedence.POSTFIX
  }

  parse (parser: ParserEngine, left: ParseResult): ParseResult {
    parser.consume('=')
    left.optional = true
    return left
  }
}