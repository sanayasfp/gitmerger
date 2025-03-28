import { ModeToggle } from "@/components/mode-toggle"

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
            {/* Profile content will go here */}
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
