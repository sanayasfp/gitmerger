"use client"

import { CombinedStats } from "@/types/stats"
import { ContributionGraph } from "./contribution-graph"
import { ActivityOverview } from "./activity-overview"
import { RepositoryStats } from "./repository-stats"

interface StatsContainerProps {
  stats: CombinedStats
}

export function StatsContainer({ stats }: StatsContainerProps) {
  return (
    <div className="space-y-8">
      <ContributionGraph data={stats.contributionGraph} />
      <ActivityOverview data={stats.activityOverview} />
      <RepositoryStats data={stats.repositoryStats} />
    </div>
  )
} 