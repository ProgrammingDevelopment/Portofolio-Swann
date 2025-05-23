
"use client";

import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import Image from 'next/image';
import Link from "next/link";
import { Download } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

const carouselSlides = [
  {
    src: "https://placehold.co/1920x1080.png",
    alt: "Innovative Business Solutions",
    dataAiHint: "modern office",
  },
  {
    src: "https://placehold.co/1920x1080.png",
    alt: "Collaborative Team Environment",
    dataAiHint: "team working",
  },
  {
    src: "https://placehold.co/1920x1080.png",
    alt: "Futuristic Technology Interface",
    dataAiHint: "digital technology",
  },
];

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <SectionWrapper id="hero" className="relative p-0 md:p-0 overflow-hidden min-h-[70vh] md:min-h-[85vh] flex items-center justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0 w-full h-full z-0"
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {carouselSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                data-ai-hint={slide.dataAiHint}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/60" /> {/* Darker overlay */}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative z-10 container max-w-screen-lg text-center text-white px-4 py-10 md:py-20">
        <div className="space-y-6 bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hello, I'm Swandaru Tirta Sandhika
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200">
            Enthusiast Technology | Freelancer | Web Developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild className="transition-transform hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.print()} 
              className="transition-transform hover:scale-105 border-white text-white hover:bg-white/10 hover:text-white shadow-md"
              aria-label="Download Portfolio as PDF"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Portfolio (PDF)
            </Button>
          </div>
          <p className="text-sm text-neutral-300 pt-2">Note: Download uses browser's print to PDF functionality.</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
