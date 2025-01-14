import { testFixture } from '../Fixture'

describe('typescript objects tests', () => {
  describe('optional entry', () => {
    // there seems to be a catharsis error: https://github.com/hegemonic/catharsis/blob/222e8fc4350c346b47ca8395c37512290979df12/lib/parser.pegjs#L555
    testFixture({
      input: '{ object?: string, key: string }',
      stringified: '{object?: string, key: string}',
      diffExpected: {
        typescript: {
          type: 'JsdocTypeObject',
          meta: {
            separator: 'comma'
          },
          elements: [
            {
              type: 'JsdocTypeKeyValue',
              readonly: false,
              key: 'object',
              meta: {
                quote: undefined,
                hasLeftSideExpression: false
              },
              right: {
                type: 'JsdocTypeName',
                value: 'string'
              },
              optional: true
            },
            {
              type: 'JsdocTypeKeyValue',
              readonly: false,
              key: 'key',
              meta: {
                quote: undefined,
                hasLeftSideExpression: false
              },
              right: {
                type: 'JsdocTypeName',
                value: 'string'
              },
              optional: false
            }
          ]
        },
        jsdoc: {
          type: 'JsdocTypeObject',
          meta: {
            separator: 'comma'
          },
          elements: [
            {
              type: 'JsdocTypeKeyValue',
              left: {
                type: 'JsdocTypeNullable',
                element: {
                  type: 'JsdocTypeName',
                  value: 'object'
                },
                meta: {
                  position: 'suffix'
                }
              },
              right: {
                type: 'JsdocTypeName',
                value: 'string'
              },
              meta: {
                hasLeftSideExpression: true
              }
            },
            {
              type: 'JsdocTypeKeyValue',
              readonly: false,
              key: 'key',
              meta: {
                quote: undefined,
                hasLeftSideExpression: false
              },
              right: {
                type: 'JsdocTypeName',
                value: 'string'
              },
              optional: false
            }
          ]
        }
      },
      modes: [
        'jsdoc',
        'typescript'
      ],
      catharsis: {
        closure: 'fail',
        jsdoc: 'fail'
      },
      jtp: {
        closure: 'differ',
        jsdoc: 'differ',
        typescript: 'typescript',
        permissive: 'typescript'
      }
    })
  })

  describe('An object with unenclosed union as type', () => {
    testFixture({
      input: '{message: string|undefined}',
      stringified: '{message: string | undefined}',
      expected: {
        type: 'JsdocTypeObject',
        meta: {
          separator: 'comma'
        },
        elements: [
          {
            type: 'JsdocTypeKeyValue',
            readonly: false,
            key: 'message',
            right: {
              type: 'JsdocTypeUnion',
              elements: [
                {
                  type: 'JsdocTypeName',
                  value: 'string'
                },
                {
                  type: 'JsdocTypeUndefined'
                }
              ]
            },
            optional: false,
            meta: {
              quote: undefined,
              hasLeftSideExpression: false
            }
          }
        ]
      },
      modes: [
        'jsdoc',
        'closure',
        'typescript'
      ],
      catharsis: {
        jsdoc: 'jsdoc',
        closure: 'closure'
      },
      jtp: {
        jsdoc: 'jsdoc',
        closure: 'closure',
        typescript: 'typescript',
        permissive: 'typescript'
      }
    })
  })

  describe('An object an optional field without a type', () => {
    testFixture({
      input: '{ message?} ',
      stringified: '{message?}',
      expected: {
        type: 'JsdocTypeObject',
        meta: {
          separator: 'comma'
        },
        elements: [
          {
            type: 'JsdocTypeKeyValue',
            readonly: false,
            key: 'message',
            right: undefined,
            optional: true,
            meta: {
              quote: undefined,
              hasLeftSideExpression: false
            }
          }
        ]
      },
      modes: [
        'jsdoc', // TODO: should this fail in closure or jsdoc?
        'closure',
        'typescript'
      ],
      catharsis: {
        jsdoc: 'fail',
        closure: 'fail'
      },
      jtp: {
        jsdoc: 'fail',
        closure: 'fail',
        typescript: 'fail',
        permissive: 'fail'
      }
    })
  })
})
