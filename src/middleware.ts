import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest,) {
    const access_token = request.cookies.has('auth_token')
    if(request.nextUrl.pathname.startsWith('/login')){
        if(access_token){
            return NextResponse.redirect(new URL('/', request.nextUrl))
        }
    }
    if (!access_token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/user/:path*',
        '/levels/:path*',
        '/projects/:path*',
    ]
}

