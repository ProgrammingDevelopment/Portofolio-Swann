
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, CalendarDays } from 'lucide-react';
import type { Education } from '@/types';

interface EducationItemProps {
  education: Education;
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardHeader className="flex flex-row items-start gap-4 bg-secondary/50 p-6">
        {education.logoUrl ? (
          <Image
            src={education.logoUrl}
            alt={`${education.institution} logo`}
            width={60}
            height={60}
            className="rounded-md object-contain border p-1 bg-background"
            data-ai-hint={education.dataAiHint || "university building"}
          />
        ) : (
          <div className="p-3 bg-muted rounded-md">
             <GraduationCap className="h-8 w-8 text-primary" />
          </div>
        )}
        <div className="flex-1">
          <CardTitle className="text-xl text-primary">{education.institution}</CardTitle>
          <CardDescription className="text-md text-foreground/90">{education.degree}</CardDescription>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            {education.duration}
          </div>
          {education.location && (
            <CardDescription className="text-sm text-muted-foreground mt-1">{education.location}</CardDescription>
          )}
        </div>
      </CardHeader>
      {education.description && (
        <CardContent className="p-6">
          <p className="text-sm text-foreground/80">{education.description}</p>
        </CardContent>
      )}
    </Card>
  );
}
