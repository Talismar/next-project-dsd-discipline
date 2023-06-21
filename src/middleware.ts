import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // const url = request.nextUrl
  // console.log('Middleware')
  // const requestHeaders = new Headers(request.headers)
  // // requestHeaders.set('x-hello-from-middleware1', 'hello')
  // request.user = 'world'
  // const response = NextResponse.next({
  //   request: {
  //     headers: requestHeaders,
  //   },
  // })

  // Set a new response header `x-hello-from-middleware2`
  // response.headers.set('x-hello-from-middleware2', 'hello')
  return NextResponse.next({ request })
}
