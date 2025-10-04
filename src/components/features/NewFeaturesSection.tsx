import { motion } from "framer-motion";
import { Mic, Camera, Brain, Zap } from 'lucide-react';

const features = [
  {
    icon: <Mic className="w-8 h-8 text-blue-300/90 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" />,
    title: "Voice Control Interface",
    description: "Advanced AI voice recognition that understands natural speech patterns and commands.",
  },
  {
    icon: <Camera className="w-8 h-8 text-blue-300/90 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" />,
    title: "Gesture Recognition",
    description: "Computer vision technology that tracks hand movements and gestures with precision.",
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-300/90 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" />,
    title: "AI-Powered Automation",
    description: "Smart automation that learns your patterns and adapts to your workflow.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-300/90 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" />,
    title: "Lightning-Fast Response",
    description: "Ultra-low latency processing ensures your commands are executed instantly.",
  }
];

export const NewFeaturesSection = () => {
  return (
    <div className="container px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          <span className="text-white">Revolutionary</span>{' '}
          <br />
          <span className="feature-gradient">Computer Control Features</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-100/70 mb-16 max-w-3xl mx-auto"
        >
          Experience cutting-edge AI technology that transforms how
          you interact with your computer using voice and gestures.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="group relative"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
              
              {/* Card content */}
              <div className="relative flex items-center gap-6 bg-[#0C1629]/90 p-6 rounded-2xl border border-blue-900/30 hover:border-blue-700/40 transition-all duration-500">
                {/* Icon container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                  <div className="relative bg-[#111827] p-5 rounded-2xl border border-blue-900/20">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Text content */}
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100/60 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};