import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
    const shouldHandleLocale =
        !PUBLIC_FILE.test(request.nextUrl.pathname) &&
        !request.nextUrl.pathname.includes('/api/') &&
        request.nextUrl.locale === 'default'

    return shouldHandleLocale
        ? NextResponse.redirect(`/fr${request.nextUrl.href}`)
        : undefined
}