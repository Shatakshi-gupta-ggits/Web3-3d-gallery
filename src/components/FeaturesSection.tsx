
export const FeaturesSection = () => {
  const features = [
    {
      title: "AI Copilot",
      description: "Real-time upskilling recommendations powered by GPT-4o",
      icon: "🤖",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "ZK-Proof Verification",
      description: "Private credential verification without revealing sensitive data",
      icon: "🔒",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Cross-DAO Reputation",
      description: "Portable reputation system across decentralized communities",
      icon: "🌐",
      gradient: "from-green-400 to-cyan-500"
    },
    {
      title: "Skill DNA Profiling",
      description: "Interactive visualization of your complete skill ecosystem",
      icon: "🧬",
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "DAO-to-DAO Bridges",
      description: "Seamless talent discovery across Web3 organizations",
      icon: "🌉",
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      title: "Gasless Onboarding",
      description: "Zero-friction entry for new users with Biconomy integration",
      icon: "⚡",
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology meets seamless user experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-semibold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
