
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const RoleDashboards = () => {
  const [activeRole, setActiveRole] = useState('learner');

  const roles = {
    learner: {
      title: "Learner Dashboard",
      description: "Showcase your verified skills and discover new opportunities",
      features: [
        "Skill verification through GitHub activity",
        "AI-powered learning recommendations",
        "Achievement NFT collection",
        "Reputation score tracking"
      ],
      color: "cyan"
    },
    employer: {
      title: "Employer Portal",
      description: "Find verified talent across the Web3 ecosystem",
      features: [
        "Advanced talent filtering",
        "Skill compatibility scoring",
        "Direct DAO integration",
        "Automated vetting pipeline"
      ],
      color: "purple"
    },
    dao: {
      title: "DAO Management",
      description: "Govern credential standards and community growth",
      features: [
        "Governance voting interface",
        "Credential standard creation",
        "Community analytics",
        "Cross-DAO partnerships"
      ],
      color: "pink"
    }
  };

  return (
    <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Role-Specific Dashboards
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored experiences for every participant in the ecosystem
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {Object.entries(roles).map(([key, role]) => (
                <Button
                  key={key}
                  variant={activeRole === key ? "default" : "outline"}
                  className={`w-full text-left justify-start p-6 h-auto ${
                    activeRole === key 
                      ? `bg-gradient-to-r from-${role.color}-500 to-${role.color}-600 border-0` 
                      : "border-white/20 bg-white/5 hover:bg-white/10"
                  }`}
                  onClick={() => setActiveRole(key)}
                >
                  <div>
                    <div className="font-semibold mb-1">{role.title}</div>
                    <div className="text-sm opacity-80">{role.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">
                {roles[activeRole as keyof typeof roles].title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roles[activeRole as keyof typeof roles].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-${roles[activeRole as keyof typeof roles].color}-400 mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-black/20 rounded-xl border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Preview Coming Soon</div>
                <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500">Dashboard Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
