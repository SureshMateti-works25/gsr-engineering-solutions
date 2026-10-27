import React from 'react';
import { Eye, Users, ShieldCheck, Activity } from 'lucide-react';
import { useVisitorCount } from '../hooks/useVisitorCount';

interface VisitorCounterWidgetProps {
  variant?: 'compact' | 'card' | 'badge';
  className?: string;
}

export const VisitorCounterWidget: React.FC<VisitorCounterWidgetProps> = ({ 
  variant = 'badge',
  className = '' 
}) => {
  const { visitorCount, onlineCount } = useVisitorCount();

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-white text-xs font-semibold ${className}`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-blue-200">Visitors:</span>
        <strong className="text-amber-300 font-mono font-black">{visitorCount.toLocaleString()}</strong>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-3 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs shadow-xs ${className}`}>
        <div className="flex items-center gap-1.5 text-blue-100">
          <Eye className="w-3.5 h-3.5 text-amber-300" />
          <span>Total Visits:</span>
          <strong className="font-mono text-white text-sm font-black">{visitorCount.toLocaleString()}</strong>
        </div>
        <div className="h-3 w-px bg-white/20" />
        <div className="flex items-center gap-1.5 text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-[11px] font-semibold">{onlineCount} Online</span>
        </div>
      </div>
    );
  }

  // Full Card Variant (for Footer or About Section)
  return (
    <div className={`p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-white shadow-xl ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-300">
            Real-Time Site Analytics
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>Live</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-3">
        <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <div className="text-[10px] text-slate-400 uppercase font-bold flex items-center gap-1">
            <Eye className="w-3 h-3 text-amber-400" />
            Total Visitors
          </div>
          <div className="text-lg font-black font-mono text-white mt-0.5">
            {visitorCount.toLocaleString()}
          </div>
          <div className="text-[10px] text-blue-300 mt-0.5 font-medium">
            Across AP & Telangana
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <div className="text-[10px] text-slate-400 uppercase font-bold flex items-center gap-1">
            <Users className="w-3 h-3 text-emerald-400" />
            Active Engineers
          </div>
          <div className="text-lg font-black font-mono text-emerald-400 mt-0.5">
            {onlineCount} Browsing
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5 font-medium">
            Procuring Spares
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800/60">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          Verified Industrial Portal
        </span>
        <span className="text-slate-500">
          Updated: Realtime
        </span>
      </div>
    </div>
  );
};
