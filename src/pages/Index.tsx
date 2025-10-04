import { motion } from "framer-motion";
import { ArrowRight, Mic, Camera, Brain, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import { NewFeaturesSection } from "@/components/features/NewFeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  const downloadRef = useRef<HTMLDivElement>(null);

  const scrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-[#0A0A0A]">
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/5 to-blue-700/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-block px-6 py-3 rounded-full glass-enhanced">
            <span className="text-sm font-semibold text-blue-100">
              <Mic className="w-4 h-4 inline-block mr-2" />
              Revolutionary computer control software
            </span>
          </div>
        </motion.div>
        
        <div className="max-w-4xl relative z-10 text-center mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-tight text-white">
            <span className="text-gray-100 font-extrabold">
              <TextGenerateEffect words="Control your computer with" />
            </span>
            <br />
            <span className="text-gradient font-black">
              <TextGenerateEffect words="your voice & pupils" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Experience hands-free computer control using advanced AI voice recognition and computer vision.{" "}
            <span className="text-white font-semibold">Navigate, type, and control your computer with natural gestures and voice commands.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-black text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-110 border-2 border-blue-400/20"
              onClick={scrollToDownload}
            >
              Get Started
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-6xl mt-20"
        >
          <div className="glass-enhanced rounded-2xl overflow-hidden p-8 md:p-12">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white block mb-2">Revolutionary</span>
                <span className="feature-gradient block">Control Features</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                Experience the future of computer interaction with our cutting-edge AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Voice Control Feature */}
              <div className="text-center space-y-6 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Voice Commands</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Advanced AI speech transcription that understands natural speech patterns. Control your computer with your eyes and voice.
                </p>
                <div className="text-blue-400 text-sm font-semibold">
                  ✓ 99.8% Accuracy Rate
                </div>
              </div>
              
              {/* Eye Tracking Feature */}
              <div className="text-center space-y-6 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Eye Tracking</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Revolutionary pupil tracking technology that follows your eye movements. Click, scroll, and navigate using just your eyes with precision and speed.
                </p>
                <div className="text-blue-400 text-sm font-semibold">
                  ✓ Sub-millisecond Response
                </div>
              </div>
              
              {/* AI Automation Feature */}
              <div className="text-center space-y-6 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Custom Actions</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Define custom system actions and keybinds, triggered by specific combinations of your choice.
                </p>
                <div className="text-blue-400 text-sm font-semibold">
                  ✓ Continuous Learning
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Iris Interface Preview Section (Image 2's Area) */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-6xl"
        >
          <div className="glass-enhanced rounded-2xl overflow-hidden">
            {/* Iris Interface Preview */}
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Iris <span className="text-gradient font-black">Interface Preview</span>
                </h2>
                <p className="text-gray-300 text-xl max-w-3xl mx-auto font-medium">
                  See how Iris transforms your computer interaction experience with real-time AI control
                </p>
              </div>
              
              {/* Simulated Iris Interface */}
              <div className="relative bg-black/40 rounded-xl p-8 border border-blue-500/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Left side - Voice Control Visualization */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                        <Mic className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">Voice Commands</h3>
                        <p className="text-blue-400 text-lg font-semibold">Active • Listening</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                        <p className="text-white text-lg font-bold">"Open Chrome"</p>
                        <p className="text-blue-300 text-sm font-medium">→ Browser launched</p>
                      </div>
                      <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                        <p className="text-white text-lg font-bold">"Switch to next tab"</p>
                        <p className="text-blue-300 text-sm font-medium">→ Tab switched</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - Eye Tracking Visualization */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                        <Camera className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">Eye Tracking</h3>
                        <p className="text-blue-400 text-lg font-semibold">Active • Calibrated</p>
                      </div>
                    </div>
                    
                    <div className="relative bg-slate-800/50 rounded-xl p-6 border border-blue-500/20">
                      <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                          <Eye className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-white text-lg font-bold">Pupil Position</p>
                        <p className="text-blue-300 text-base font-semibold">X: 45% Y: 32%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom status bar */}
                <div className="mt-8 pt-6 border-t border-blue-500/20">
                  <div className="flex items-center justify-between text-base">
                    <div className="flex items-center gap-6">
                      <span className="text-blue-400 font-bold">● System Ready</span>
                      <span className="text-blue-500 font-bold">● AI Active</span>
                      <span className="text-blue-600 font-bold">● Learning Mode</span>
                    </div>
                    <div className="text-gray-400 font-semibold">
                      Iris v2.1.0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Features Section */}
      <div id="features" className="bg-black">
        <NewFeaturesSection />
      </div>


      {/* CTA Section */}
      <section ref={downloadRef} className="container px-4 py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-blue-900/20 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            Ready to control your computer hands-free?
          </h2>
          <p className="text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Join thousands of users who have already discovered the power of voice and gesture control.
          </p>
          <Button 
            size="lg" 
            className="relative inline-flex items-center px-8 py-6 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-[length:200%_100%] shadow-[0_0_30px_-12px_rgba(29,78,216,0.5)] border border-blue-500/20 hover:shadow-[0_0_30px_-6px_rgba(29,78,216,0.8)] transition-all duration-300 hover:bg-[center_right_1rem] group"
          >
            <span className="relative flex items-center text-xl font-bold text-white">
              Download Iris
              <ArrowRight className="ml-3 w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
