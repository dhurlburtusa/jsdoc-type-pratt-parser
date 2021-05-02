import { Fixture } from '../Fixture'

export const unionFixtures: Fixture[] = [
  {
    description: 'union with 2 types (number and boolean)',
    input: '(number|boolean)',
    expected: {
      type: 'UNION',
      elements: [
        {
          type: 'NAME',
          value: 'number',
          meta: {
            reservedWord: false
          }
        },
        {
          type: 'NAME',
          value: 'boolean',
          meta: {
            reservedWord: false
          }
        }
      ]
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'repeatable union with 2 types (number and boolean)',
    input: '...(number|boolean)',
    expected: {
      type: 'VARIADIC',
      element: {
        type: 'UNION',
        elements: [
          {
            type: 'NAME',
            value: 'number',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'NAME',
            value: 'boolean',
            meta: {
              reservedWord: false
            }
          }
        ]
      },
      meta: {
        position: 'PREFIX',
        squareBrackets: false
      }
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'union with 2 types (Object and undefined)',
    input: '(Object|undefined)',
    expected: {
      type: 'UNION',
      elements: [
        {
          type: 'NAME',
          value: 'Object',
          meta: {
            reservedWord: false
          }
        },
        {
          type: 'UNDEFINED'
        }
      ]
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'union with 3 types (number, Window, and goog.ui.Menu)',
    input: '(number|Window|goog.ui.Menu)',
    expected: {
      type: 'UNION',
      elements: [
        {
          type: 'NAME',
          value: 'number',
          meta: {
            reservedWord: false
          }
        },
        {
          type: 'NAME',
          value: 'Window',
          meta: {
            reservedWord: false
          }
        },
        {
          left: {
            value: 'goog',
            type: 'NAME',
            meta: {
              reservedWord: false
            }
          },
          value: [
            'ui',
            'Menu'
          ],
          type: 'NAME_PATH'
        }
      ]
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'nullable union with 2 types (number and boolean)',
    input: '?(number|boolean)',
    expected: {
      type: 'NULLABLE',
      element: {
        type: 'UNION',
        elements: [
          {
            type: 'NAME',
            value: 'number',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'NAME',
            value: 'boolean',
            meta: {
              reservedWord: false
            }
          }
        ]
      },
      meta: {
        position: 'PREFIX'
      }
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'non-nullable union with 2 types (number and boolean)',
    input: '!(number|boolean)',
    expected: {
      type: 'NOT_NULLABLE',
      element: {
        type: 'UNION',
        elements: [
          {
            type: 'NAME',
            value: 'number',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'NAME',
            value: 'boolean',
            meta: {
              reservedWord: false
            }
          }
        ]
      },
      meta: {
        position: 'PREFIX'
      }
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'optional union with 2 types (number and boolean)',
    input: '(number|boolean)=',
    expected: {
      type: 'OPTIONAL',
      element: {
        type: 'UNION',
        elements: [
          {
            type: 'NAME',
            value: 'number',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'NAME',
            value: 'boolean',
            meta: {
              reservedWord: false
            }
          }
        ]
      },
      meta: {
        position: 'SUFFIX'
      }
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'union with 2 types (array and object with unknown value type)',
    input: '(Array|Object.<string, ?>)',
    expected: {
      type: 'UNION',
      elements: [
        {
          type: 'NAME',
          value: 'Array',
          meta: {
            reservedWord: false
          }
        },
        {
          type: 'GENERIC',
          elements: [
            {
              type: 'NAME',
              value: 'string',
              meta: {
                reservedWord: false
              }
            },
            {
              type: 'UNKNOWN'
            }
          ],
          left: {
            type: 'NAME',
            value: 'Object',
            meta: {
              reservedWord: false
            }
          },
          meta: {
            dot: true,
            brackets: '<>'
          }
        }
      ]
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'union with 2 type applications',
    input: '(Array.<string>|Object.<string, ?>)',
    expected: {
      type: 'UNION',
      elements: [
        {
          type: 'GENERIC',
          elements: [
            {
              type: 'NAME',
              value: 'string',
              meta: {
                reservedWord: false
              }
            }
          ],
          left: {
            type: 'NAME',
            value: 'Array',
            meta: {
              reservedWord: false
            }
          },
          meta: {
            dot: true,
            brackets: '<>'
          }
        },
        {
          type: 'GENERIC',
          elements: [
            {
              type: 'NAME',
              value: 'string',
              meta: {
                reservedWord: false
              }
            },
            {
              type: 'UNKNOWN'
            }
          ],
          left: {
            type: 'NAME',
            value: 'Object',
            meta: {
              reservedWord: false
            }
          },
          meta: {
            dot: true,
            brackets: '<>'
          }
        }
      ]
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'union with 2 types (an error, or a function that returns an error)',
    input: '(Error|function(): Error)',
    expected: {
      type: 'UNION',
      elements: [
        {
          type: 'NAME',
          value: 'Error',
          meta: {
            reservedWord: false
          }
        },
        {
          type: 'FUNCTION',
          parameters: [],
          returnType: {
            type: 'NAME',
            value: 'Error',
            meta: {
              reservedWord: false
            }
          },
          meta: {
            arrow: false
          }
        }
      ]
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'type union with no enclosing parentheses',
    input: 'number|string',
    expected: {
      type: 'UNION',
      elements: [
        {
          type: 'NAME',
          value: 'number',
          meta: {
            reservedWord: false
          }
        },
        {
          type: 'NAME',
          value: 'string',
          meta: {
            reservedWord: false
          }
        }
      ]
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'type union with modifiers and no enclosing parentheses',
    input: '!number|!string',
    expected: {
      type: 'UNION',
      elements: [
        {
          type: 'NOT_NULLABLE',
          element: {
            type: 'NAME',
            value: 'number',
            meta: {
              reservedWord: false
            }
          },
          meta: {
            position: 'PREFIX'
          }
        },
        {
          type: 'NOT_NULLABLE',
          element: {
            type: 'NAME',
            value: 'string',
            meta: {
              reservedWord: false
            }
          },
          meta: {
            position: 'PREFIX'
          }
        }
      ]
    },
    modes: ['typescript', 'jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive']
  },
  {
    description: 'optional union with multiple types',
    input: '(jQuerySelector|Element|Object|Array.<Element>|jQuery|string|function())=',
    expected: {
      type: 'OPTIONAL',
      element: {
        type: 'UNION',
        elements: [
          {
            type: 'NAME',
            value: 'jQuerySelector',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'NAME',
            value: 'Element',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'NAME',
            value: 'Object',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'GENERIC',
            elements: [
              {
                type: 'NAME',
                value: 'Element',
                meta: {
                  reservedWord: false
                }
              }
            ],
            left: {
              type: 'NAME',
              value: 'Array',
              meta: {
                reservedWord: false
              }
            },
            meta: {
              dot: true,
              brackets: '<>'
            }
          },
          {
            type: 'NAME',
            value: 'jQuery',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'NAME',
            value: 'string',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'FUNCTION',
            parameters: [],
            meta: {
              arrow: false
            }
          }
        ]
      },
      meta: {
        position: 'SUFFIX'
      }
    },
    modes: ['jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive'] // NOTE: This seems to be a JTP error
  },
  {
    description: 'optional union with multiple types, including a nested union type',
    input: '(Element|Object|Document|Object.<string, (string|function(!jQuery.event=))>)=',
    expected: {
      type: 'OPTIONAL',
      element: {
        type: 'UNION',
        elements: [
          {
            type: 'NAME',
            value: 'Element',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'NAME',
            value: 'Object',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'NAME',
            value: 'Document',
            meta: {
              reservedWord: false
            }
          },
          {
            type: 'GENERIC',
            elements: [
              {
                type: 'NAME',
                value: 'string',
                meta: {
                  reservedWord: false
                }
              },
              {
                type: 'UNION',
                elements: [
                  {
                    type: 'NAME',
                    value: 'string',
                    meta: {
                      reservedWord: false
                    }
                  },
                  {
                    type: 'FUNCTION',
                    parameters: [
                      {
                        type: 'OPTIONAL',
                        element: {
                          type: 'NOT_NULLABLE',
                          element: {
                            left: {
                              value: 'jQuery',
                              type: 'NAME',
                              meta: {
                                reservedWord: false
                              }
                            },
                            value: [
                              'event'
                            ],
                            type: 'NAME_PATH'
                          },
                          meta: {
                            position: 'PREFIX'
                          }
                        },
                        meta: {
                          position: 'SUFFIX'
                        }
                      }
                    ],
                    meta: {
                      arrow: false
                    }
                  }
                ]
              }
            ],
            left: {
              type: 'NAME',
              value: 'Object',
              meta: {
                reservedWord: false
              }
            },
            meta: {
              dot: true,
              brackets: '<>'
            }
          }
        ]
      },
      meta: {
        position: 'SUFFIX'
      }
    },
    modes: ['jsdoc', 'closure'],
    catharsisModes: ['closure', 'jsdoc'],
    jtpModes: ['jsdoc', 'closure', 'typescript', 'permissive'] // NOTE: This seems to be a JTP error
  }
]
