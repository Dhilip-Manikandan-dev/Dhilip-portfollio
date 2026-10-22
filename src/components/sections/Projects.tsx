"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCategory } from "@/types/project";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories: ProjectCategory[] = [
  "All",
  "Full-Stack Web",
  "Mobile & Cross-Platform",
  "Shopify E-Commerce",
  "WordPress & Plugins",
  "Company Websites",
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      aria-label="Portfolio Projects"
      className="py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Work"
          title="Verified Projects &"
          titleAccent="Engineering Solutions"
          description="A showcase of real production work encompassing full-stack web applications, mobile platforms, Shopify stores, and custom WordPress plugins."
        />

        {/* Category Filter Buttons */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                    : "bg-card/70 border border-border/80 text-muted-foreground hover:text-foreground hover:bg-accent/40"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
