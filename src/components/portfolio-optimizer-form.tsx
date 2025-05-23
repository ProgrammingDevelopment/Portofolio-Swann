
"use client";

import { useState, type FormEvent } from 'react';
import { portfolioOptimizer, type PortfolioOptimizerOutput } from '@/ai/flows/portfolio-optimizer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function PortfolioOptimizerForm() {
  const [portfolioContent, setPortfolioContent] = useState('');
  const [suggestions, setSuggestions] = useState<PortfolioOptimizerOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!portfolioContent.trim()) {
      setError("Please enter some content to optimize.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuggestions(null);

    try {
      const result = await portfolioOptimizer({ portfolioContent });
      setSuggestions(result);
      toast({
        title: "Optimization Complete!",
        description: "Suggestions have been generated successfully.",
        variant: "default",
      });
    } catch (e) {
      console.error("Error optimizing portfolio:", e);
      const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred.";
      setError(`Failed to get suggestions: ${errorMessage}`);
      toast({
        title: "Optimization Failed",
        description: `Could not generate suggestions. ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Sparkles className="h-6 w-6 text-primary" />
          AI Portfolio Optimizer
        </CardTitle>
        <CardDescription>
          Paste your resume or portfolio section below to get AI-powered suggestions for improvement.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Paste your portfolio content here..."
            value={portfolioContent}
            onChange={(e) => setPortfolioContent(e.target.value)}
            rows={10}
            className="resize-none focus:ring-accent"
            aria-label="Portfolio Content Input"
            disabled={isLoading}
          />
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto transition-transform hover:scale-105">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Optimize...
              </>
            ) : (
              'Get Suggestions'
            )}
          </Button>
        </CardFooter>
      </form>

      {suggestions && suggestions.suggestions && (
        <div className="p-6 border-t">
          <h3 className="text-lg font-semibold mb-3 text-primary">Summary:</h3>
          <div className="prose prose-sm max-w-none bg-secondary/30 p-4 rounded-md text-foreground/90 whitespace-pre-wrap">
            {suggestions.suggestions}
          </div>
        </div>
      )}
    </Card>
  );
}
