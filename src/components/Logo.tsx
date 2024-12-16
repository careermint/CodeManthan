import { Code2 } from "lucide-react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Code2 className="w-8 h-8 text-[#8B5CF6] animate-pulse" />
        <div className="absolute inset-0 bg-[#8B5CF6] blur-lg opacity-20 animate-pulse"></div>
      </div>
      <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
        Codemanthan
      </span>
    </div>
  );
};

export default Logo;