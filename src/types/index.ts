
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  dataAiHint: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string; // Or organization for self-employed/education
  duration: string;
  location?: string;
  responsibilities: string[];
  achievements?: string[];
  logoUrl?: string;
  dataAiHint?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location?: string;
  description?: string;
  logoUrl?: string;
  dataAiHint?: string;
}
