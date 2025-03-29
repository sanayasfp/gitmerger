import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  try {
    const username = params.username
    const response = await fetch(`https://api.github.com/repos/${username}/${username}/readme`, {
      headers: {
        'Accept': 'application/vnd.github.v3.raw',
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch GitHub README' },
        { status: response.status }
      )
    }

    const content = await response.text()
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 