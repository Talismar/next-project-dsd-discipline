import { createSwaggerSpec } from 'next-swagger-doc'
import SwaggerComponent from '@/components/SwaggerComponent'
import 'swagger-ui-react/swagger-ui.css'

export default function ApiDoc() {
  const spec = getData()
  return (
    <main className="m-auto max-w-5xl">
      <SwaggerComponent spec={spec} />
    </main>
  )
}

const getData = () => {
  const spec: Record<string, any> = createSwaggerSpec({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'BookStores API Documentation',
        version: '1.0',
        description: 'This is an API BookStore',
        license: {
          name: 'MIT',
          url: 'https://github.com/Talismar',
        },
        contact: {
          email: 'talismar788.una@gmail.com',
          name: 'Talismar Fernandes Costa',
          url: 'https://github.com/Talismar',
        },
        termsOfService: '/api-docs/terms',
      },
      paths: {
        '/api/authenticate/irlan': {
          post: {
            tags: ['Authenticate'],
            summary: 'Authenticate - Login',
            description: 'Authenticate - Login',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      email: {
                        type: 'string',
                      },
                      password: {
                        type: 'string',
                      },
                    },
                  },
                  example: {
                    email: 'talismar788.una@gmail.com',
                    password: 'samplepassword',
                  },
                },
              },
            },
            responses: {
              '200': {
                description: 'Authentication successful',
              },
              '400': {
                description: 'Validation error or unauthorized',
              },
            },
          },
        },
        '/api/users/': {
          post: {
            tags: ['User'],
            summary: 'Register User',
            description: 'Register the user',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      name: {
                        type: 'string',
                      },
                      email: {
                        type: 'string',
                      },
                      password: {
                        type: 'string',
                      },
                      image_url: {
                        type: 'string',
                      },
                    },
                    example: {
                      name: 'Talismar Fernandes Costa',
                      email: 'talismar788.una@gmail.com',
                      password: 'samplepassword',
                      image_url: '',
                    },
                  },
                },
              },
            },
            responses: {
              '201': {
                description: 'Created',
              },
              '400': {
                description: 'User already registered',
              },
            },
          },
        },
        '/api/users/me': {
          get: {
            tags: ['User'],
            summary: 'Get me information',
            description: 'Get me datas',
            responses: {
              '200': {
                description: 'Success',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          name: {
                            type: 'string',
                          },
                          description: {
                            type: 'string',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        '/api/books/': {
          get: {
            tags: ['Book'],
            summary: 'List all categories',
            description: 'List all categories',
            responses: {
              '200': {
                description: 'Success',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          name: {
                            type: 'string',
                          },
                          description: {
                            type: 'string',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        '/api/comments/': {
          get: {
            tags: ['Comment'],
            summary: 'List all categories',
            description: 'List all categories',
            responses: {
              '200': {
                description: 'Success',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          name: {
                            type: 'string',
                          },
                          description: {
                            type: 'string',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  })

  return spec
}
