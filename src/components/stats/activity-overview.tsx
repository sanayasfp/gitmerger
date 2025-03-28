"use client"

import { ActivityOverview } from "@/types/stats"
import { Github, Gitlab, GitCommit, GitPullRequest, GitIssue, Star } from "lucide-react"

interface ActivityOverviewProps {
  data: {
    github?: ActivityOverview
    gitlab?: ActivityOverview
  }
}

export function ActivityOverview({ data }: ActivityOverviewProps) {
  const getTotal = (key: keyof ActivityOverview) => {
    return (data.github?.[key] || 0) + (data.gitlab?.[key] || 0)
  }

  const totalCommits = getTotal('totalCommits')
  const totalPullRequests = getTotal('totalPullRequests')
  const totalIssues = getTotal('totalIssues')
  const totalStars = getTotal('totalStars')

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Activity Overview</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <GitCommit className="h-4 w-4" />
            <span className="text-sm">Commits</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{totalCommits}</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {data.github && (
                <span className="text-[#238636]">+{data.github.totalCommits}</span>
              )}
              {data.gitlab && (
                <span className="text-[#fc6d26]">+{data.gitlab.totalCommits}</span>
              )}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <GitPullRequest className="h-4 w-4" />
            <span className="text-sm">Pull Requests</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{totalPullRequests}</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {data.github && (
                <span className="text-[#238636]">+{data.github.totalPullRequests}</span>
              )}
              {data.gitlab && (
                <span className="text-[#fc6d26]">+{data.gitlab.totalPullRequests}</span>
              )}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <GitIssue className="h-4 w-4" />
            <span className="text-sm">Issues</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{totalIssues}</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {data.github && (
                <span className="text-[#238636]">+{data.github.totalIssues}</span>
              )}
              {data.gitlab && (
                <span className="text-[#fc6d26]">+{data.gitlab.totalIssues}</span>
              )}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Star className="h-4 w-4" />
            <span className="text-sm">Stars</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{totalStars}</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {data.github && (
                <span className="text-[#238636]">+{data.github.totalStars}</span>
              )}
              {data.gitlab && (
                <span className="text-[#fc6d26]">+{data.gitlab.totalStars}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 