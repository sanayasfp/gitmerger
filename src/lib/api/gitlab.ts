const GITLAB_API_URL = 'https://gitlab.com/api/v4'

export async function fetchGitLabProfile(username: string): Promise<any> {
  const response = await fetch(`${GITLAB_API_URL}/users?username=${username}`, {
    headers: {
      'Accept': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`GitLab API error: ${response.statusText}`)
  }

  const users = await response.json()
  if (!users.length) {
    throw new Error('User not found')
  }

  return users[0]
}

export async function fetchGitLabContributions(username: string): Promise<number> {
  // Note: GitLab's contribution data is not directly available through their API
  // We'll need to implement a custom solution or use a third-party service
  return 0
} 