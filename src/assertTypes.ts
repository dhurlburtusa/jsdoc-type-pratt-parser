import { KeyValueResult, NumberResult } from './result/NonTerminalResult'
import { UnexpectedTypeError } from './errors'
import { NameResult, TerminalResult, VariadicResult } from './result/TerminalResult'
import { IntermediateResult } from './result/IntermediateResult'

export function assertTerminal (result?: IntermediateResult): TerminalResult {
  if (result === undefined) {
    throw new Error('Unexpected undefined')
  }
  if (result.type === 'KEY_VALUE' || result.type === 'NUMBER' || result.type === 'PARAMETER_LIST') {
    throw new UnexpectedTypeError(result)
  }
  return result
}

export function assertKeyValueOrTerminal (result: IntermediateResult): KeyValueResult | TerminalResult {
  if (result.type === 'KEY_VALUE' && 'value' in result) {
    return result
  }
  return assertTerminal(result)
}

export function assertKeyValueOrName (result: IntermediateResult): KeyValueResult | NameResult {
  if (result.type === 'KEY_VALUE' && 'value' in result) {
    return result
  } else if (result.type !== 'NAME') {
    throw new UnexpectedTypeError(result)
  }
  return result
}

export function assertNumberOrVariadicName (result: IntermediateResult): NumberResult | NameResult | VariadicResult<NameResult> {
  if (result.type === 'VARIADIC') {
    if (result.element?.type === 'NAME') {
      return result as VariadicResult<NameResult>
    }
    throw new UnexpectedTypeError(result)
  }
  if (result.type !== 'NUMBER' && result.type !== 'NAME') {
    throw new UnexpectedTypeError(result)
  }
  return result
}
