import { PrefixParslet } from './Parslet'
import { TokenType } from '../lexer/Token'
import { ParserEngine } from '../ParserEngine'
import { FunctionResult, ParseResult } from '../ParseResult'
import { Precedence } from './Precedence'

export class FunctionParslet implements PrefixParslet {
  accepts (type: TokenType): boolean {
    return type === 'function'
  }

  getPrecedence (): number {
    return Precedence.PREFIX
  }

  parse (parser: ParserEngine): ParseResult {
    parser.consume('function')

    if (!parser.consume('(')) {
      throw new Error('function is missing parameter list')
    }
    const result: FunctionResult = {
      type: 'FUNCTION',
      parameters: []
    }

    if (!parser.consume(')')) {
      let continueList = true

      if (continueList && parser.consume('new')) {
        if (!parser.consume(':')) {
          throw new Error('new keyword must be followed by \':\'')
        }
        result.newType = parser.parseType(Precedence.PREFIX)
        continueList = parser.consume(',')
      }

      if (continueList && parser.consume('this')) {
        if (!parser.consume(':')) {
          throw new Error('this keyword must be followed by \':\'')
        }
        result.thisType = parser.parseType(Precedence.PREFIX)
        continueList = parser.consume(',')
      }

      if (continueList) {
        const parameters = []
        do {
          parameters.push(parser.parseType(Precedence.PREFIX))
        } while (parser.consume(','))
        result.parameters = parameters
      }

      if (!parser.consume(')')) {
        throw new Error('function parameter list is not terminated')
      }
    }

    if (parser.consume(':')) {
      result.returnType = parser.parseType(Precedence.PREFIX)
    }
    return result
  }
}