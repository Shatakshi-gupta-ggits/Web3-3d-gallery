
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="section-padding container-padding pt-32 lg:pt-40">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-lg">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-slate-300">Now in Beta • Join the Future</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-space-grotesk font-bold mb-8 leading-none">
            <span className="text-primary-gradient text-balance">
              SkillLink DAO 2.0
            </span>
          </h1>
          
          <div className="space-y-4 mb-8">
            <p className="text-2xl md:text-3xl text-slate-200 font-medium text-balance">
              AI-Powered Web3 Credential Network
            </p>
            <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed text-pretty">
              Building LinkedIn for the decentralized world. Showcase verified skills, 
              connect across DAOs, and unlock opportunities with AI-powered matching.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Button size="lg" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl">
            Launch dApp
          </Button>
          <Button variant="outline" size="lg" className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl">
            View Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card p-8 hover-lift hover-glow">
            <div className="text-4xl font-bold text-primary-gradient mb-3">10K+</div>
            <div className="text-slate-300 font-medium">Verified Credentials</div>
          </div>
          <div className="glass-card p-8 hover-lift hover-glow">
            <div className="text-4xl font-bold text-accent-gradient mb-3">50+</div>
            <div className="text-slate-300 font-medium">Partner DAOs</div>
          </div>
          <div className="glass-card p-8 hover-lift hover-glow">
            <div className="text-4xl font-bold text-primary-gradient mb-3">95%</div>
            <div className="text-slate-300 font-medium">Match Accuracy</div>
          </div>
        </div>

        <div className="animate-professional-pulse">
          <ArrowDown className="h-8 w-8 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};
