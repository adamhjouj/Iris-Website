import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureTabProps {
  icon: ReactNode;
  title: string;
  description: string;
  isActive: boolean;
}

export const FeatureTab = ({ icon, title, description, isActive }: FeatureTabProps) => {
  return (
    <div 
      className={`
        w-full flex items-center gap-6 p-8 rounded-2xl
        transition-all duration-500 relative group
        ${isActive 
          ? 'bg-gradient-to-r from-blue-500/20 via-blue-600/30 to-blue-500/20 shadow-2xl shadow-blue-500/30 border-2 border-blue-400/50 backdrop-blur-xl' 
          : 'hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-blue-600/15 hover:to-blue-500/10 hover:border-blue-400/30 border border-transparent hover:shadow-xl hover:shadow-blue-500/20'
        }
      `}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-l-2xl shadow-lg shadow-blue-500/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <div className="flex items-center gap-4 min-w-0">
        <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30' 
            : 'bg-gradient-to-br from-gray-600/50 to-gray-700/50 text-gray-300 group-hover:from-blue-500/20 group-hover:to-blue-600/20 group-hover:text-blue-300'
        }`}>
          {icon}
        </div>
        <div className="text-left min-w-0 flex-1">
          <h3 className={`font-black truncate text-xl mb-2 transition-all duration-300 ${
            isActive 
              ? 'text-transparent bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 bg-clip-text' 
              : 'text-white group-hover:text-blue-200'
          }`}>
            {title}
          </h3>
          <p className={`text-lg line-clamp-2 font-semibold leading-relaxed transition-all duration-300 ${
            isActive 
              ? 'text-blue-100' 
              : 'text-gray-300 group-hover:text-gray-200'
          }`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};