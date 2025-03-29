"use client"

import { ProfileReadme } from "./profile-readme"
import { ResumeReadme } from "./resume-readme"
import { CombinedProfile } from "@/types/profile"

interface ProfileContentProps {
  profile: CombinedProfile
}

export function ProfileContent({ profile }: ProfileContentProps) {
  return (
    <div className="space-y-8">
      <ProfileReadme
        githubUsername={profile.github?.login}
        gitlabUsername={profile.gitlab?.login}
      />
      <ResumeReadme
        githubUsername={profile.github?.login}
        gitlabUsername={profile.gitlab?.login}
      />
    </div>
  )
} 