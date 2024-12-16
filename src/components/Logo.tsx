import { Code2 } from "lucide-react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative group">
        {/* Multiple layered effects for depth */}
        <div className="absolute inset-0 bg-[#8B5CF6] blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
        <div className="absolute inset-0 bg-[#D946EF] blur-lg opacity-10 group-hover:opacity-30 transition-opacity animate-pulse delay-75"></div>
        
        {/* Animated icon */}
        <div className="relative transform group-hover:scale-110 transition-transform duration-300">
          <Code2 className="w-10 h-10 text-[#8B5CF6] animate-[spin_4s_linear_infinite] group-hover:text-[#D946EF] transition-colors" />
          
          {/* Glowing ring effect */}
          <div className="absolute inset-0 border-2 border-[#8B5CF6] rounded-full opacity-50 group-hover:opacity-100 animate-ping"></div>
        </div>
      </div>
      
      {/* Animated text with gradient */}
      <div className="relative">
        <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-size-200 animate-gradient">
          Codemanthan
        </span>
        {/* Underline effect */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </div>
  );
};

export default Logo;