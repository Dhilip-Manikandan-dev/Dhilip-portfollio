import { describe, it, expect } from "vitest";
import { projects } from "@/data/projects";

describe("Verified Projects Data Integrity", () => {
  it("contains exactly the 7 verified projects specified", () => {
    expect(projects.length).toBe(7);
  });

  it("does not include any unauthorized project such as Smart Offer Rules", () => {
    const projectNames = projects.map((p) => p.name.toLowerCase());
    const projectIds = projects.map((p) => p.id.toLowerCase());

    expect(projectNames.some((name) => name.includes("smart offer rules"))).toBe(false);
    expect(projectIds.some((id) => id.includes("smart-offer"))).toBe(false);
  });

  it("ensures every project has a name, category, summary, technologies, contribution, and image", () => {
    projects.forEach((project) => {
      expect(project.id).toBeTruthy();
      expect(project.name).toBeTruthy();
      expect(project.category).toBeTruthy();
      expect(project.summary.length).toBeGreaterThan(10);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.contribution.length).toBeGreaterThan(5);
      expect(project.image).toBeTruthy();
    });
  });

  it("verifies the specific required verified projects exist", () => {
    const ids = projects.map((p) => p.id);
    expect(ids).toContain("sri-kaliyammal");
    expect(ids).toContain("hirez");
    expect(ids).toContain("looms-n-weaves");
    expect(ids).toContain("pattupadai");
    expect(ids).toContain("ys-leadgen");
    expect(ids).toContain("ys-innovation");
    expect(ids).toContain("hyoka-and-pickpair");
  });
});
