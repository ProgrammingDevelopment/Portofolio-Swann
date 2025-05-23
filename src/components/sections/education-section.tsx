
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { EducationItem } from "@/components/education-item";
import { educationData } from "@/config/portfolio-data";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <SectionWrapper id="education" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center gap-2">
          <GraduationCap className="h-8 w-8" />
          Education
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          My academic background and qualifications.
        </p>
      </div>
      <div className="relative">
        {/* Optional: Timeline line decoration */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        <div>
          {educationData.map((edu) => (
            <div key={edu.id} className="md:pl-8 relative">
                 {/* Optional: Timeline dot */}
                <div className="absolute left-4 top-4 h-3 w-3 rounded-full bg-primary border-2 border-background md:-translate-x-[calc(50%_+_1px)] md:left-1/2 hidden md:block" aria-hidden="true"></div>
              <EducationItem education={edu} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
