
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PortfolioOptimizerForm } from "@/components/portfolio-optimizer-form";

export function OptimizerSection() {
  return (
    <SectionWrapper id="optimizer" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Portfolio Optimizer</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Leverage AI to refine your portfolio content and make a stronger impact.
        </p>
      </div>
      <PortfolioOptimizerForm />
    </SectionWrapper>
  );
}
