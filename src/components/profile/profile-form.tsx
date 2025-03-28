"use client"

import { useState } from "react"
import { Github, Gitlab } from "lucide-react"
import { fetchCombinedProfile } from "@/lib/services/profile-service"
import { CombinedProfile } from "@/types/profile"

interface ProfileFormProps {
  onProfileFetch: (profile: CombinedProfile) => void
}

export function ProfileForm({ onProfileFetch }: ProfileFormProps) {
  const [githubUsername, setGithubUsername] = useState("")
  const [gitlabUsername, setGitlabUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const profile = await fetchCombinedProfile(
        githubUsername || undefined,
        gitlabUsername || undefined
      )
      onProfileFetch(profile)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch profile")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="github" className="text-sm font-medium flex items-center gap-2">
          <Github className="h-4 w-4" />
          GitHub Username
        </label>
        <input
          id="github"
          type="text"
          value={githubUsername}
          onChange={(e) => setGithubUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full px-3 py-2 border rounded-md bg-background"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="gitlab" className="text-sm font-medium flex items-center gap-2">
          <Gitlab className="h-4 w-4" />
          GitLab Username
        </label>
        <input
          id="gitlab"
          type="text"
          value={gitlabUsername}
          onChange={(e) => setGitlabUsername(e.target.value)}
          placeholder="Enter GitLab username"
          className="w-full px-3 py-2 border rounded-md bg-background"
        />
      </div>

      {error && (
        <div className="text-sm text-destructive">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading || (!githubUsername && !gitlabUsername)}
        className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Loading..." : "Fetch Profile"}
      </button>
    </form>
  )
} 