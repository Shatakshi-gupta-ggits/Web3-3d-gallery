
export const FeaturesSection = () => {
  const features = [
    {
      title: "AI Copilot",
      description: "Real-time upskilling recommendations powered by GPT-4o for personalized learning paths",
      icon: "🤖",
      gradient: "from-cyan-400 to-blue-500",
      bgGlow: "shadow-cyan-500/20"
    },
    {
      title: "ZK-Proof Verification",
      description: "Private credential verification without revealing sensitive data using zero-knowledge proofs",
      icon: "🔒",
      gradient: "from-purple-400 to-pink-500",
      bgGlow: "shadow-purple-500/20"
    },
    {
      title: "Cross-DAO Reputation",
      description: "Portable reputation system that travels with you across decentralized communities",
      icon: "🌐",
      gradient: "from-green-400 to-cyan-500",
      bgGlow: "shadow-green-500/20"
    },
    {
      title: "Skill DNA Profiling",
      description: "Interactive visualization of your complete skill ecosystem with AI-driven insights",
      icon: "🧬",
      gradient: "from-orange-400 to-red-500",
      bgGlow: "shadow-orange-500/20"
    },
    {
      title: "DAO-to-DAO Bridges",
      description: "Seamless talent discovery and collaboration across Web3 organizations and protocols",
      icon: "🌉",
      gradient: "from-indigo-400 to-purple-500",
      bgGlow: "shadow-indigo-500/20"
    },
    {
      title: "Gasless Onboarding",
      description: "Zero-friction entry for new users with Biconomy integration and smart account abstraction",
      icon: "⚡",
      gradient: "from-yellow-400 to-orange-500",
      bgGlow: "shadow-yellow-500/20"
    }
  ];

  return (
    <section id="features" className="section-padding container-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6 text-primary-gradient text-balance">
            Revolutionary Features
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed text-pretty">
            Cutting-edge technology meets seamless user experience in the future of professional networking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group glass-card p-8 hover-3d transition-all duration-500 hover:${feature.bgGlow} animate-fade-up card-3d`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 group-hover:animate-rotate-3d">
                {feature.icon}
              </div>
              <h3 className={`text-2xl font-space-grotesk font-semibold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-pretty">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

