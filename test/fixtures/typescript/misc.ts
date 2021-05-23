import { Fixture } from '../Fixture'

// TODO:

export const miscFixtures: Fixture[] = [
  {
    description: 'function parameter list with trailing comma',
    input: 'function( TrailingComma, ): string',
    expected: {
      type: 'JsdocTypeFunction',
      parameters: [
        {
          type: 'JsdocTypeName',
          value: 'TrailingComma'
        }
      ],
      returnType: {
        type: 'JsdocTypeName',
        value: 'string'
      },
      arrow: false,
      parenthesis: true
    },
    modes: ['typescript'],
    catharsis: {
      closure: 'fail',
      jsdoc: 'fail'
    },
    jtp: {
      closure: 'fail',
      jsdoc: 'fail',
      typescript: 'typescript',
      permissive: 'typescript'
    }
  }
]
