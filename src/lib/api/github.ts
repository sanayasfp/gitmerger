const GITHUB_API_URL = 'https://api.github.com'

export async function fetchGitHubProfile(username: string): Promise<any> {
  const response = await fetch(`/api/github/${username}`)
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`)
  }

  return response.json()
}

export async function fetchGitHubContributions(username: string): Promise<number> {
  // Note: This is a simplified version. GitHub's contribution graph requires authentication
  // and uses a different endpoint. We'll need to implement the actual contribution fetching
  // using their GraphQL API or a third-party service.
  return 0
} 