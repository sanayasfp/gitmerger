"use client"

import { RepositoryStats } from "@/types/stats"
import { Github, Gitlab, Folder, Lock, Unlock, Star, GitFork } from "lucide-react"

interface RepositoryStatsProps {
  data: {
    github?: RepositoryStats
    gitlab?: RepositoryStats
  }
}

export function RepositoryStats({ data }: RepositoryStatsProps) {
  const getTotal = (key: keyof RepositoryStats) => {
    return (data.github?.[key] || 0) + (data.gitlab?.[key] || 0)
  }

  const totalRepos = getTotal('totalRepositories')
  const totalPublic = getTotal('publicRepositories')
  const totalPrivate = getTotal('privateRepositories')
  const totalStars = getTotal('totalStars')
  const totalForks = getTotal('totalForks')

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Repository Statistics</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-card rounded-lg p-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Folder className="h-4 w-4" />
            <span className="text-sm">Total Repos</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{totalRepos}</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {data.github && (
                <span className="text-[#238636]">+{data.github.totalRepositories}</span>
              )}
              {data.gitlab && (
                <span className="text-[#fc6d26]">+{data.gitlab.totalRepositories}</span>
              )}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Unlock className="h-4 w-4" />
            <span className="text-sm">Public</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{totalPublic}</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {data.github && (
                <span className="text-[#238636]">+{data.github.publicRepositories}</span>
              )}
              {data.gitlab && (
                <span className="text-[#fc6d26]">+{data.gitlab.publicRepositories}</span>
              )}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lock className="h-4 w-4" />
            <span className="text-sm">Private</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{totalPrivate}</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {data.github && (
                <span className="text-[#238636]">+{data.github.privateRepositories}</span>
              )}
              {data.gitlab && (
                <span className="text-[#fc6d26]">+{data.gitlab.privateRepositories}</span>
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

        <div className="bg-card rounded-lg p-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <GitFork className="h-4 w-4" />
            <span className="text-sm">Forks</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{totalForks}</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {data.github && (
                <span className="text-[#238636]">+{data.github.totalForks}</span>
              )}
              {data.gitlab && (
                <span className="text-[#fc6d26]">+{data.gitlab.totalForks}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 