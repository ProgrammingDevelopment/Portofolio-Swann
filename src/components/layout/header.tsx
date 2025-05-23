
"use client";

import Link from 'next/link';
import { Code2, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile'; 
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#optimizer", label: "Optimizer" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  if (!isClient) {
    // Render a placeholder or null on the server to avoid hydration mismatches
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Swandaru Tirta</span>
          </Link>
          <div className="flex items-center gap-2">
             {/* Placeholder for nav to match structure */}
            <nav className="hidden md:flex items-center space-x-1 sm:space-x-2 md:space-x-4"></nav>
            {/* Placeholder for ThemeToggle */}
            <div className="w-10 h-10"></div>
            {/* Placeholder for mobile menu trigger */}
            <div className="w-8 h-8 md:hidden"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Swandaru Tirta</span>
        </Link>

        <div className="flex items-center gap-2">
          {isMobile ? (
            <>
              <ThemeToggle />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </>
          ) : (
            <>
              <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 overflow-x-auto">
                {navLinks.map((link) => (
                  <Button variant="ghost" asChild key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </nav>
              <ThemeToggle />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
