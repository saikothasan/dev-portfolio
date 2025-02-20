"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  topics: string[]
  html_url: string
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<GitHubRepo[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/saikothasan/repos?sort=updated&per_page=4")
        if (!response.ok) {
          throw new Error("Failed to fetch projects")
        }
        const data: unknown = await response.json()

        if (Array.isArray(data) && data.every(isValidGitHubRepo)) {
          setProjects(data)
        } else {
          console.error("Invalid data format received from GitHub API")
        }
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="bg-black py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Recent Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {isLoading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <Card key={index} className="bg-gray-900/50 border-gray-800 overflow-hidden">
                    <Skeleton className="h-48 w-full" />
                    <div className="p-4">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <div className="flex gap-2 flex-wrap">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                    </div>
                  </Card>
                ))
            : projects.map((project) => (
                <Card key={project.id} className="bg-gray-900/50 border-gray-800 overflow-hidden">
                  <Image
                    src={`https://opengraph.githubassets.com/1/${project.html_url.split("https://github.com/")[1]}`}
                    alt={project.name}
                    width={500}
                    height={250}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-400 mb-4">{project.description || "No description available."}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.topics.map((topic, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-purple-500/20 text-purple-400">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
        </div>
      </div>
    </div>
  )
}

function isValidGitHubRepo(repo: any): repo is GitHubRepo {
  return (
    typeof repo === "object" &&
    repo !== null &&
    typeof repo.id === "number" &&
    typeof repo.name === "string" &&
    (typeof repo.description === "string" || repo.description === null) &&
    Array.isArray(repo.topics) &&
    repo.topics.every((topic: unknown) => typeof topic === "string") &&
    typeof repo.html_url === "string"
  )
}

