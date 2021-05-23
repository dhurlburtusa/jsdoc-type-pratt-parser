import { InfixParslet } from './Parslet'
import { TokenType } from '../lexer/Token'
import { Precedence } from '../Precedence'
import { assertKeyValueOrTerminal } from '../assertTypes'
import { NoParsletFoundError } from '../errors'
import { ParserEngine } from '../ParserEngine'
import { IntermediateResult, ParameterList } from '../result/IntermediateResult'
import { KeyValueResult } from '..'
import { TerminalResult } from '../result/TerminalResult'

interface ParameterListParsletOptions {
  allowTrailingComma: boolean
}

export class ParameterListParslet implements InfixParslet {
  private readonly allowTrailingComma: boolean

  constructor (option: ParameterListParsletOptions) {
    this.allowTrailingComma = option.allowTrailingComma
  }

  accepts (type: TokenType, next: TokenType): boolean {
    return type === ','
  }

  getPrecedence (): Precedence {
    return Precedence.PARAMETER_LIST
  }

  parseInfix (parser: ParserEngine, left: IntermediateResult): ParameterList {
    const elements: Array<TerminalResult|KeyValueResult> = [
      assertKeyValueOrTerminal(left)
    ]
    parser.consume(',')
    do {
      try {
        const next = parser.parseIntermediateType(Precedence.PARAMETER_LIST)
        elements.push(assertKeyValueOrTerminal(next))
      } catch (e) {
        if (this.allowTrailingComma && e instanceof NoParsletFoundError) {
          break
        } else {
          throw e
        }
      }
    } while (parser.consume(','))

    if (elements.length > 0 && elements.slice(0, -1).some(e => e.type === 'JsdocTypeVariadic')) {
      throw new Error('Only the last parameter may be a rest parameter')
    }

    return {
      type: 'JsdocTypeParameterList',
      elements
    }
  }
}
