import React from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { ExternalLink, Layers, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
      {/* Project Visual Area */}
      <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-slate-900 to-indigo-950/60 overflow-hidden border-b border-border/60">
        {project.image ? (
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={`${project.name} preview thumbnail`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center text-slate-400">
            <Layers className="w-10 h-10 mb-2 text-indigo-400/60" />
            <span className="text-sm font-medium">{project.name}</span>
          </div>
        )}

        {/* Category Badge on top of image */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono bg-card/90 text-primary border border-border/80 backdrop-blur-md shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Live Link Quick Action if available */}
        {project.liveUrl && (
          <div className="absolute top-4 right-4 z-10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live project for ${project.name}`}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-card/90 text-foreground hover:text-primary border border-border/80 backdrop-blur-md transition-colors shadow-sm"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
          <span>{project.name}</span>
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.summary}
        </p>

        {/* Key Engineering Contribution */}
        <div className="mb-4 p-3 rounded-xl bg-surface-subtle/50 border border-border/50 text-xs">
          <span className="font-semibold text-foreground/90 block mb-1">
            Role & Contribution:
          </span>
          <span className="text-muted-foreground">{project.contribution}</span>
        </div>

        {/* Problem Statement if available */}
        {project.problem && (
          <div className="mb-4 text-xs text-muted-foreground">
            <strong className="text-foreground/80 font-medium">Focus:</strong>{" "}
            {project.problem}
          </div>
        )}

        {/* Technology Badges */}
        <div className="mt-auto pt-4 border-t border-border/60">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-muted text-muted-foreground border border-border/40"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline underline-offset-4"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo / Site
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
