export interface ContributionDay {
  date: string
  count: number
  platform: 'github' | 'gitlab'
}

export interface ContributionWeek {
  days: ContributionDay[]
}

export interface ContributionGraph {
  weeks: ContributionWeek[]
  totalContributions: number
}

export interface ActivityOverview {
  totalCommits: number
  totalPullRequests: number
  totalIssues: number
  totalStars: number
  platform: 'github' | 'gitlab'
}

export interface RepositoryStats {
  totalRepositories: number
  publicRepositories: number
  privateRepositories: number
  totalStars: number
  totalForks: number
  platform: 'github' | 'gitlab'
}

export interface CombinedStats {
  contributionGraph: ContributionGraph
  activityOverview: {
    github?: ActivityOverview
    gitlab?: ActivityOverview
  }
  repositoryStats: {
    github?: RepositoryStats
    gitlab?: RepositoryStats
  }
} 