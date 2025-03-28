const GITLAB_API_URL = 'https://gitlab.com/api/v4'

export async function fetchGitLabProfile(username: string): Promise<any> {
  const response = await fetch(`/api/gitlab/${username}`)
  
  if (!response.ok) {
    throw new Error(`GitLab API error: ${response.statusText}`)
  }

  return response.json()
}

export async function fetchGitLabContributions(username: string): Promise<number> {
  // Note: GitLab's contribution data is not directly available through their API
  // We'll need to implement a custom solution or use a third-party service
  return 0
} 