import { NextResponse, NextRequest } from 'next/server';

const isSignedIn = true;

export function middleware(req: NextRequest) {
    console.log('Executou!')
    if (!isSignedIn) {
        return NextResponse.redirect(new URL('/vehicles', req.url))
    }
    return NextResponse.next();
}

// Executar middlewares quando url bater com a regex do matcher (Não obrigatório)

export const config = {
    matcher: '/makes/:path*'
}