import { ModeToggle } from "@/components/mode-toggle"
import { MiniProfile } from "@/components/profile/mini-profile"
import { CombinedProfile } from "@/types/profile"

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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">GitMerger</h1>
          <ModeToggle />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Section */}
          <section className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <MiniProfile profile={mockProfile} />
          </section>

          {/* Stats Section */}
          <section className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
            {/* Stats content will go here */}
          </section>
        </div>
      </div>
    </main>
  )
}
