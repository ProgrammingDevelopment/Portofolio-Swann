
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays, CheckCircle, MapPin } from 'lucide-react';
import type { Experience } from '@/types';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardHeader className="flex flex-row items-start gap-4 bg-secondary/50 p-6">
        {experience.logoUrl ? (
          <Image
            src={experience.logoUrl}
            alt={`${experience.company} logo`}
            width={60}
            height={60}
            className="rounded-md object-contain border p-1 bg-background"
            data-ai-hint={experience.dataAiHint || "company logo"}
          />
        ) : (
          <div className="p-3 bg-muted rounded-md">
             <Briefcase className="h-8 w-8 text-primary" />
          </div>
        )}
        <div className="flex-1">
          <CardTitle className="text-xl text-primary">{experience.role}</CardTitle>
          <CardDescription className="text-md text-foreground/90">{experience.company}</CardDescription>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            {experience.duration}
          </div>
          {experience.location && (
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="mr-1.5 h-4 w-4" />
              {experience.location}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold text-foreground/90 mb-2">Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-foreground/80">
            {experience.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        {experience.achievements && experience.achievements.length > 0 && (
          <div>
            <h4 className="font-semibold text-foreground/90 mb-2">Key Achievements:</h4>
            <ul className="space-y-1.5 text-sm text-foreground/80">
              {experience.achievements.map((ach, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 shrink-0" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
