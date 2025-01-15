import { type NextRequest, NextResponse } from 'next/server';
export async function GET(req: NextRequest) {
    const headers = new Headers(req.headers)
    console.log(headers)

    return NextResponse.json({
        message: 'Hello world'
    })
}

export async function POST(request: NextRequest) {
    const body = await request?.json();
    console.log(body)

    return NextResponse.json({
        create: true
    }, { status: 201 })
}