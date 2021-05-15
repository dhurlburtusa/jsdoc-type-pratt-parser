import { Grammar } from './Grammar'
import { UnenclosedUnionParslet } from '../parslets/UnionParslets'
import { SpecialTypesParslet } from '../parslets/SpecialTypesParslet'
import { ObjectParslet } from '../parslets/ObjectParslet'
import { GenericParslet } from '../parslets/GenericParslet'
import { ParenthesisParslet } from '../parslets/ParenthesisParslet'
import { NumberParslet } from '../parslets/NumberParslet'
import { ParameterListParslet } from '../parslets/ParameterListParslet'
import { NullableInfixParslet, NullablePrefixParslet } from '../parslets/NullableParslets'
import { OptionalParslet } from '../parslets/OptionalParslet'

export const baseGrammar: Grammar = () => {
  return {
    prefixParslets: [
      new NullablePrefixParslet(),
      new OptionalParslet(),
      new ObjectParslet(),
      new NumberParslet(),
      new ParenthesisParslet(),
      new SpecialTypesParslet()
    ],
    infixParslets: [
      new ParameterListParslet({
        allowTrailingComma: true
      }),
      new GenericParslet(),
      new UnenclosedUnionParslet(),
      new OptionalParslet(),
      new NullableInfixParslet()
    ]
  }
}
