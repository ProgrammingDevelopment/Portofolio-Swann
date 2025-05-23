
"use client";

import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import Image from 'next/image';
import Link from "next/link";
import { Download } from "lucide-react";

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Hello, I'm Swandaru Tirta Sandhika
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80">
            Enthusiast Technology | Freelancer | Web Developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild className="transition-transform hover:scale-105">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.print()} className="transition-transform hover:scale-105">
              <Download className="mr-2 h-5 w-5" />
              Download Portfolio (PDF)
            </Button>
          </div>
           <p className="text-sm text-muted-foreground">Note: Download uses browser's print to PDF functionality.</p>
        </div>
        <div className="relative aspect-square max-w-md mx-auto md:max-w-none">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Portrait of Swandaru Tirta Sandhika"
            fill
            className="rounded-lg object-cover shadow-xl"
            data-ai-hint="professional portrait technology"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
