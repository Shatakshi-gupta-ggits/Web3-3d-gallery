
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SkillLink DAO 2.0
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            AI-Powered Web3 Credential Network
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Building LinkedIn for the decentralized world. Showcase verified skills, 
            connect across DAOs, and unlock opportunities with AI-powered matching.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3">
            Launch dApp
          </Button>
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
            View Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
            <div className="text-gray-300">Verified Credentials</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">Partner DAOs</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
            <div className="text-gray-300">Match Accuracy</div>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-8 w-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};
