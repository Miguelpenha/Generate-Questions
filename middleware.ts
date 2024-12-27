import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
	if (req.nextUrl.pathname === '/api/unauthorized') {
		return NextResponse.next()
	} else {
		const keyHeaderRaw = req.headers.get('authorization')
		const keyHeader = keyHeaderRaw && keyHeaderRaw.replace('Bearer ', '')
		const keyQuery = req.nextUrl.searchParams.get('apiKey')
		const key = (keyHeader || keyQuery)

		if (key === process.env.NEXT_PUBLIC_API_KEY) {
			return NextResponse.next()
		} else {
			return NextResponse.redirect(new URL('/api/unauthorized', req.url))
		}
  	}
}

export const config = {
	matcher: '/api/:path*'
}