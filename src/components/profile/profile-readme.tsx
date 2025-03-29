"use client"

import { useState } from "react"
import { Github, Gitlab, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProfileReadmeProps {
  githubUsername?: string
  gitlabUsername?: string
}

export function ProfileReadme({ githubUsername, gitlabUsername }: ProfileReadmeProps) {
  const [activeTab, setActiveTab] = useState<"github" | "gitlab">("github")

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Profile README</h3>
        <Button variant="outline" size="sm" className="gap-2">
          <Edit2 className="h-4 w-4" />
          Edit
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "github" | "gitlab")}>
        <TabsList>
          {githubUsername && (
            <TabsTrigger value="github" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </TabsTrigger>
          )}
          {gitlabUsername && (
            <TabsTrigger value="gitlab" className="gap-2">
              <Gitlab className="h-4 w-4" />
              GitLab
            </TabsTrigger>
          )}
        </TabsList>

        {githubUsername && (
          <TabsContent value="github" className="mt-4">
            <div className="bg-card rounded-lg p-4 prose prose-sm dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                {githubUsername}'s GitHub profile README will be displayed here.
              </p>
            </div>
          </TabsContent>
        )}

        {gitlabUsername && (
          <TabsContent value="gitlab" className="mt-4">
            <div className="bg-card rounded-lg p-4 prose prose-sm dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                {gitlabUsername}'s GitLab profile README will be displayed here.
              </p>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
} 