"use client"

import Image from "next/image"
import { Github, Gitlab, Globe, MapPin, Building2, Twitter } from "lucide-react"
import { CombinedProfile } from "@/types/profile"
import { cn } from "@/lib/utils"

interface MiniProfileProps {
  profile: CombinedProfile
}

export function MiniProfile({ profile }: MiniProfileProps) {
  const primaryProfile = profile.primaryPlatform === 'github' ? profile.github : profile.gitlab
  const secondaryProfile = profile.primaryPlatform === 'github' ? profile.gitlab : profile.github

  if (!primaryProfile) return null

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <div className="relative h-20 w-20 rounded-full overflow-hidden">
          <Image
            src={primaryProfile.avatarUrl}
            alt={primaryProfile.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">{profile.displayName}</h3>
            <span className="text-sm text-muted-foreground">@{primaryProfile.login}</span>
          </div>
          {primaryProfile.bio && (
            <p className="mt-1 text-sm text-muted-foreground">{primaryProfile.bio}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm">
        {primaryProfile.location && (
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{primaryProfile.location}</span>
          </div>
        )}
        {primaryProfile.company && (
          <div className="flex items-center gap-1 text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <span>{primaryProfile.company}</span>
          </div>
        )}
        {primaryProfile.websiteUrl && (
          <a
            href={primaryProfile.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted-foreground hover:text-primary"
          >
            <Globe className="h-4 w-4" />
            <span>Website</span>
          </a>
        )}
        {primaryProfile.twitterUsername && (
          <a
            href={`https://twitter.com/${primaryProfile.twitterUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted-foreground hover:text-primary"
          >
            <Twitter className="h-4 w-4" />
            <span>@{primaryProfile.twitterUsername}</span>
          </a>
        )}
      </div>

      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Github className="h-4 w-4" />
          <span>{primaryProfile.followers} followers</span>
        </div>
        <div className="flex items-center gap-1">
          <span>{primaryProfile.following} following</span>
        </div>
        <div className="flex items-center gap-1">
          <span>{primaryProfile.repositories} repositories</span>
        </div>
      </div>

      {secondaryProfile && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Gitlab className="h-4 w-4" />
          <span>Also on GitLab as @{secondaryProfile.login}</span>
        </div>
      )}
    </div>
  )
} 