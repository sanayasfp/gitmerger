"use client"

import { ContributionGraph as ContributionGraphType } from "@/types/stats"
import { Github, Gitlab } from "lucide-react"
import { cn } from "@/lib/utils"

interface ContributionGraphProps {
  data: ContributionGraphType
}

export function ContributionGraph({ data }: ContributionGraphProps) {
  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-muted"
    if (count < 3) return "bg-primary/20"
    if (count < 5) return "bg-primary/40"
    if (count < 7) return "bg-primary/60"
    return "bg-primary"
  }

  const getPlatformColor = (platform: 'github' | 'gitlab') => {
    return platform === 'github' ? 'text-[#238636]' : 'text-[#fc6d26]'
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Contribution Graph</h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4 text-[#238636]" />
            <span>GitHub</span>
          </div>
          <div className="flex items-center gap-2">
            <Gitlab className="h-4 w-4 text-[#fc6d26]" />
            <span>GitLab</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {data.weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.days.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={cn(
                  "w-3 h-3 rounded-sm transition-colors",
                  getContributionColor(day.count),
                  "group relative"
                )}
                title={`${day.date}: ${day.count} contributions`}
              >
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span>{day.date}</span>
                    <span className={getPlatformColor(day.platform)}>
                      {day.count} contributions
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-muted" />
          <div className="w-3 h-3 rounded-sm bg-primary/20" />
          <div className="w-3 h-3 rounded-sm bg-primary/40" />
          <div className="w-3 h-3 rounded-sm bg-primary/60" />
          <div className="w-3 h-3 rounded-sm bg-primary" />
        </div>
        <span>More</span>
      </div>
    </div>
  )
} 