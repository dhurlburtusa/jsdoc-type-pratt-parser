import { PrefixParslet } from './Parslet'
import { TokenType } from '../lexer/Token'
import { ParserEngine } from '../ParserEngine'
import { Precedence } from '../Precedence'
import { UnexpectedTypeError } from '../errors'
import { ObjectResult, TerminalResult } from '../result/TerminalResult'

interface ObjectParsletOptions {
  allowKeyTypes: boolean
}

export class ObjectParslet implements PrefixParslet {
  private readonly allowKeyTypes: boolean

  constructor (opts: ObjectParsletOptions) {
    this.allowKeyTypes = opts.allowKeyTypes
  }

  accepts (type: TokenType): boolean {
    return type === '{'
  }

  getPrecedence (): Precedence {
    return Precedence.OBJECT
  }

  parsePrefix (parser: ParserEngine): TerminalResult {
    parser.consume('{')
    const result: ObjectResult = {
      type: 'JsdocTypeObject',
      elements: []
    }

    if (!parser.consume('}')) {
      do {
        let field = parser.parseIntermediateType(Precedence.OBJECT)

        let optional = false
        if (field.type === 'JsdocTypeNullable') {
          optional = true
          field = field.element
        }

        if (field.type === 'JsdocTypeNumber' || field.type === 'JsdocTypeName' || field.type === 'JsdocTypeStringValue') {
          let quote
          if (field.type === 'JsdocTypeStringValue') {
            quote = field.meta.quote
          }

          result.elements.push({
            type: 'JsdocTypeKeyValue',
            value: field.value.toString(),
            right: undefined,
            optional: optional,
            meta: {
              quote
            }
          })
        } else if (field.type === 'JsdocTypeKeyValue') {
          result.elements.push(field)
        } else {
          throw new UnexpectedTypeError(field)
        }
      } while (parser.consume(','))
      if (!parser.consume('}')) {
        throw new Error('Unterminated record type. Missing \'}\'')
      }
    }
    return result
  }
}
