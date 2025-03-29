"use client"

import { useState } from "react"
import { Edit2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ResumeReadmeProps {
  githubUsername?: string
  gitlabUsername?: string
}

export function ResumeReadme({ githubUsername, gitlabUsername }: ResumeReadmeProps) {
  const [activeTab, setActiveTab] = useState<"view" | "edit">("view")

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Resume README</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Edit2 className="h-4 w-4" />
            Edit
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "view" | "edit")}>
        <TabsList>
          <TabsTrigger value="view">View</TabsTrigger>
          <TabsTrigger value="edit">Edit</TabsTrigger>
        </TabsList>

        <TabsContent value="view" className="mt-4">
          <div className="bg-card rounded-lg p-4 prose prose-sm dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              Your resume in README format will be displayed here.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="edit" className="mt-4">
          <div className="bg-card rounded-lg p-4">
            <textarea
              className="w-full h-64 p-4 bg-background border rounded-md font-mono text-sm"
              placeholder="Write your resume in markdown format..."
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 