'use server';
/**
 * @fileOverview An AI agent for optimizing student portfolios.
 *
 * - portfolioOptimizer - A function that provides suggestions to improve a portfolio.
 * - PortfolioOptimizerInput - The input type for the portfolioOptimizer function.
 * - PortfolioOptimizerOutput - The return type for the portfolioOptimizer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioOptimizerInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The content of the portfolio or resume to be optimized.'),
});
export type PortfolioOptimizerInput = z.infer<typeof PortfolioOptimizerInputSchema>;

const PortfolioOptimizerOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('Suggestions for improving the portfolio or resume content.'),
});
export type PortfolioOptimizerOutput = z.infer<typeof PortfolioOptimizerOutputSchema>;

export async function portfolioOptimizer(
  input: PortfolioOptimizerInput
): Promise<PortfolioOptimizerOutput> {
  return portfolioOptimizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioOptimizerPrompt',
  input: {schema: PortfolioOptimizerInputSchema},
  output: {schema: PortfolioOptimizerOutputSchema},
  prompt: `You are an AI assistant that helps students improve their portfolios or resumes.

  Provide suggestions to improve the following portfolio content:

  {{{portfolioContent}}}
  `,
});

const portfolioOptimizerFlow = ai.defineFlow(
  {
    name: 'portfolioOptimizerFlow',
    inputSchema: PortfolioOptimizerInputSchema,
    outputSchema: PortfolioOptimizerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
