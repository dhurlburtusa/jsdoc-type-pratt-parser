import { expect } from 'chai'
import 'mocha'
import { TerminalResult } from '../src/result/TerminalResult'
import { parse } from '../src/parse'

describe('basics', () => {
  it('should parse names', () => {
    const typeString = 'sometype'
    const expected: TerminalResult = {
      type: 'JsdocTypeName',
      value: 'sometype'
    }
    const result = parse(typeString, 'typescript')
    expect(result).to.deep.equal(expected)
  })

  it('should parse a complex expression', () => {
    const typeString = 'Array<(AType|OtherType)>|\'test\'|undefined'
    const expected: TerminalResult = {
      type: 'JsdocTypeUnion',
      elements: [
        {
          type: 'JsdocTypeGeneric',
          left: {
            type: 'JsdocTypeName',
            value: 'Array'
          },
          elements: [
            {
              type: 'JsdocTypeParenthesis',
              element: {
                type: 'JsdocTypeUnion',
                elements: [
                  {
                    type: 'JsdocTypeName',
                    value: 'AType'
                  },
                  {
                    type: 'JsdocTypeName',
                    value: 'OtherType'
                  }
                ]
              }
            }
          ],
          meta: {
            brackets: 'angle',
            dot: false
          }
        },
        {
          type: 'JsdocTypeStringValue',
          value: 'test',
          meta: {
            quote: 'single'
          }
        },
        {
          type: 'JsdocTypeUndefined'
        }
      ]
    }

    const result = parse(typeString, 'typescript')
    expect(result).to.deep.equal(expected)
  })
})
