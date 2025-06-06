
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id, ...props }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20", className)} {...props}>
      <div className="container max-w-screen-xl">
        {children}
      </div>
    </section>
  );
}
