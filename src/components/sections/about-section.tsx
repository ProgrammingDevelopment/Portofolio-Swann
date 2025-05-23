
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Code, Cpu, Users, Star, CheckCircle, GraduationCap, ShieldCheck } from "lucide-react";

const technicalSkills = [
  { name: "Java", icon: <Code className="h-5 w-5 text-accent" /> },
  { name: "Python", icon: <Code className="h-5 w-5 text-accent" /> },
  { name: "JavaScript/TypeScript", icon: <Code className="h-5 w-5 text-accent" /> },
  { name: "React & Next.js", icon: <Code className="h-5 w-5 text-accent" /> },
  { name: "SQL & NoSQL Databases", icon: <Cpu className="h-5 w-5 text-accent" /> },
  { name: "API Development", icon: <Cpu className="h-5 w-5 text-accent" /> },
];

const topSkills = [
  { name: "One-on-one Instruction", icon: <Users className="h-5 w-5 text-accent" /> },
  { name: "Leadership Development", icon: <Star className="h-5 w-5 text-accent" /> },
  { name: "Project Planning", icon: <Briefcase className="h-5 w-5 text-accent" /> },
];

const certifications = [
  { name: "Introduction to Cyber Security", icon: <ShieldCheck className="h-5 w-5 text-accent" /> },
  { name: "AWS Certified Machine Learning - Specialty", icon: <Cpu className="h-5 w-5 text-accent" /> },
  { name: "Cloud Practitioner Essentials", icon: <Cpu className="h-5 w-5 text-accent" /> },
  { name: "Data Science With R programming language", icon: <Code className="h-5 w-5 text-accent" /> },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">About Me</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A brief overview of my journey, skills, and aspirations in the world of technology.
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl"><Award className="text-primary" /> My Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              Currently at PT Crystal Team Indonesia, ensuring operational efficiency and customer service. Experienced in IT support, data management, and education. Worked as a data entry clerk at Luxe Royale, Inc. and a tech support intern at GAOTek Inc., handling troubleshooting, system maintenance, and remote support.
            </p>
            <p>
              As a dedicated Informatics Engineering student, I am deeply fascinated by the power of software to solve real-world problems. My academic path has equipped me with a strong foundation in computer science principles, software development methodologies, and data structures. I thrive in collaborative environments and am always eager to learn and adapt to new challenges.
            </p>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><Code className="text-primary" /> Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {technicalSkills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 p-2 rounded-md hover:bg-primary/5 transition-colors">
                    {skill.icon}
                    <span className="text-foreground/90">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
           <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><Star className="text-primary" /> Key Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {topSkills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 p-2 rounded-md hover:bg-primary/5 transition-colors">
                    {skill.icon}
                    <span className="text-foreground/90">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl"><CheckCircle className="text-primary" /> Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-center gap-3 p-2 rounded-md hover:bg-primary/5 transition-colors">
                  {cert.icon}
                  <span className="text-foreground/90">{cert.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
