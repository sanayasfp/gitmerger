import { fetchGitHubProfile, fetchGitHubContributions } from '../api/github'
import { fetchGitLabProfile, fetchGitLabContributions } from '../api/gitlab'
import { CombinedProfile, Profile } from '@/types/profile'

export async function fetchCombinedProfile(
  githubUsername?: string,
  gitlabUsername?: string
): Promise<CombinedProfile> {
  let githubProfile: Profile | undefined
  let gitlabProfile: Profile | undefined

  try {
    if (githubUsername) {
      const githubData = await fetchGitHubProfile(githubUsername)
      const contributions = await fetchGitHubContributions(githubUsername)
      
      githubProfile = {
        name: githubData.name || githubData.login,
        login: githubData.login,
        avatarUrl: githubData.avatar_url,
        bio: githubData.bio,
        location: githubData.location,
        company: githubData.company,
        websiteUrl: githubData.blog || null,
        twitterUsername: githubData.twitter_username,
        followers: githubData.followers,
        following: githubData.following,
        repositories: githubData.public_repos,
        contributions,
        platform: 'github'
      }
    }
  } catch (error) {
    console.error('Error fetching GitHub profile:', error)
  }

  try {
    if (gitlabUsername) {
      const gitlabData = await fetchGitLabProfile(gitlabUsername)
      const contributions = await fetchGitLabContributions(gitlabUsername)
      
      gitlabProfile = {
        name: gitlabData.name || gitlabData.username,
        login: gitlabData.username,
        avatarUrl: gitlabData.avatar_url,
        bio: gitlabData.bio,
        location: gitlabData.location,
        company: gitlabData.organization,
        websiteUrl: gitlabData.website_url,
        twitterUsername: gitlabData.twitter,
        followers: gitlabData.followers,
        following: gitlabData.following,
        repositories: gitlabData.projects_count,
        contributions,
        platform: 'gitlab'
      }
    }
  } catch (error) {
    console.error('Error fetching GitLab profile:', error)
  }

  // Determine the primary platform and display name
  const primaryPlatform = githubProfile ? 'github' : 'gitlab'
  const displayName = githubProfile?.name || gitlabProfile?.name || 'Unknown User'

  return {
    github: githubProfile,
    gitlab: gitlabProfile,
    displayName,
    primaryPlatform
  }
} 