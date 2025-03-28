import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  try {
    const username = params.username
    const response = await fetch(`https://gitlab.com/api/v4/users?username=${username}`, {
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch GitLab profile' },
        { status: response.status }
      )
    }

    const data = await response.json()
    if (!data.length) {
      return NextResponse.json(
        { error: 'GitLab user not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(data[0])
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 