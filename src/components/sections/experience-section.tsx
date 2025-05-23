
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ExperienceItem } from "@/components/experience-item";
import { experienceData } from "@/config/portfolio-data";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Work Experience</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          My professional journey and contributions in various roles.
        </p>
      </div>
      <div className="relative">
        {/* Optional: Timeline line decoration */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        <div>
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="md:pl-8 relative">
                 {/* Optional: Timeline dot */}
                <div className="absolute left-4 top-4 h-3 w-3 rounded-full bg-primary border-2 border-background md:-translate-x-[calc(50%_+_1px)] md:left-1/2 hidden md:block" aria-hidden="true"></div>
              <ExperienceItem experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
