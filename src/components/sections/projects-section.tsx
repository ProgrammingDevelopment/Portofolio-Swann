
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ProjectCard } from "@/components/project-card";
import { projectsData } from "@/config/portfolio-data";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Featured Projects</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A selection of projects that demonstrate my skills and passion for development.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
