"use client"

import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { MiniProfile } from "@/components/profile/mini-profile"
import { ProfileForm } from "@/components/profile/profile-form"
import { ProfileContent } from "@/components/profile/profile-content"
import { StatsContainer } from "@/components/stats/stats-container"
import { CombinedProfile } from "@/types/profile"
import { CombinedStats } from "@/types/stats"

// Mock data for testing
const mockProfile: CombinedProfile = {
  displayName: "John Doe",
  primaryPlatform: "github",
  github: {
    name: "John Doe",
    login: "johndoe",
    avatarUrl: "https://avatars.githubusercontent.com/u/1234567",
    bio: "Software Developer | Open Source Enthusiast",
    location: "San Francisco, CA",
    company: "Tech Corp",
    websiteUrl: "https://johndoe.dev",
    twitterUsername: "johndoe",
    followers: 1234,
    following: 567,
    repositories: 89,
    contributions: 1234,
    platform: "github"
  },
  gitlab: {
    name: "John Doe",
    login: "johndoe",
    avatarUrl: "https://gitlab.com/uploads/-/system/user/avatar/1234567/avatar.png",
    bio: "Software Developer | Open Source Enthusiast",
    location: "San Francisco, CA",
    company: "Tech Corp",
    websiteUrl: "https://johndoe.dev",
    twitterUsername: "johndoe",
    followers: 890,
    following: 123,
    repositories: 45,
    contributions: 567,
    platform: "gitlab"
  }
}

// Mock stats data
const mockStats: CombinedStats = {
  contributionGraph: {
    weeks: Array.from({ length: 53 }, (_, weekIndex) => ({
      days: Array.from({ length: 7 }, (_, dayIndex) => ({
        date: new Date(Date.now() - (52 - weekIndex) * 7 * 24 * 60 * 60 * 1000 - dayIndex * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        count: Math.floor(Math.random() * 10),
        platform: Math.random() > 0.5 ? 'github' : 'gitlab' as const
      }))
    })),
    totalContributions: 1801
  },
  activityOverview: {
    github: {
      totalCommits: 856,
      totalPullRequests: 123,
      totalIssues: 45,
      totalStars: 234,
      platform: 'github'
    },
    gitlab: {
      totalCommits: 567,
      totalPullRequests: 89,
      totalIssues: 34,
      totalStars: 156,
      platform: 'gitlab'
    }
  },
  repositoryStats: {
    github: {
      totalRepositories: 89,
      publicRepositories: 45,
      privateRepositories: 44,
      totalStars: 234,
      totalForks: 123,
      platform: 'github'
    },
    gitlab: {
      totalRepositories: 45,
      publicRepositories: 23,
      privateRepositories: 22,
      totalStars: 156,
      totalForks: 78,
      platform: 'gitlab'
    }
  }
}

export default function Home() {
  const [profile, setProfile] = useState<CombinedProfile | null>(null)
  const [stats, setStats] = useState<CombinedStats | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">GitMerger</h1>
          <ModeToggle />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <section className="lg:col-span-1 space-y-8">
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Profile</h2>
              {profile ? (
                <MiniProfile profile={profile} />
              ) : (
                <ProfileForm onProfileFetch={setProfile} />
              )}
            </div>

            {profile && (
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <ProfileContent profile={profile} />
              </div>
            )}
          </section>

          {/* Stats Section */}
          <section className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
              {stats ? (
                <StatsContainer stats={stats} />
              ) : (
                <p className="text-muted-foreground">Enter your usernames to view statistics</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
