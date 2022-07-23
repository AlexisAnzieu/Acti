import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
    const shouldHandleLocale =
        !PUBLIC_FILE.test(request.nextUrl.pathname) &&
        !request.nextUrl.pathname.includes('/api/') &&
        request.nextUrl.locale === 'default'

    const url = request.nextUrl.clone()
    url.locale = 'fr'

    return shouldHandleLocale
        ? NextResponse.rewrite(url)
        : undefined
}