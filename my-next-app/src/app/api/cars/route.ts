import { headers } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const reqHeaders = await headers();
    console.log(reqHeaders.get('Content-Type'))

    return NextResponse.json({
        message: 'Hello world'
    })
}

export async function POST(request: NextRequest) {
    const body = await request?.json();
    console.log(body)

    console.log('id', request.nextUrl.searchParams.get('id'))

    console.log('cookies', request.cookies.get(''))

    const response = NextResponse.json({ create: true }, { status: 201 })
    response.cookies.set('cookie-do-lucas', 'Cookie do Lucas')

    return response;
}