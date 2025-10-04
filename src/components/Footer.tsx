import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="bg-[#0A1424]/80 backdrop-blur-xl border border-blue-900/20 rounded-2xl p-8 relative overflow-hidden">
          {/* Gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Iris</h3>
                <p className="text-blue-100/70 leading-relaxed">
                  Revolutionary computer control software using AI voice recognition and gesture control.
                </p>
                <div className="flex space-x-4">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="rounded-xl bg-blue-950/50 hover:bg-blue-900/50 border border-blue-800/30 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-blue-400" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="rounded-xl bg-blue-950/50 hover:bg-blue-900/50 border border-blue-800/30 transition-colors"
                  >
                    <Github className="w-5 h-5 text-blue-400" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">Features</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#features" className="text-blue-100/70 hover:text-blue-300 transition-colors">
                      Voice Control
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-blue-100/70 hover:text-blue-300 transition-colors">
                      Gesture Recognition
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-100/70 hover:text-blue-300 transition-colors">
                      User Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-100/70 hover:text-blue-300 transition-colors">
                      Tutorial Videos
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-100/70 hover:text-blue-300 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-100/70 hover:text-blue-300 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-900/30">
              <p className="text-blue-100/50 text-center">
                © {new Date().getFullYear()} Iris. All rights reserved.
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;