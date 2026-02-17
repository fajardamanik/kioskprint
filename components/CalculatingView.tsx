
import React, { useState, useEffect } from 'react';
import { PrintJob } from '../types';

interface CalculatingViewProps {
  job: PrintJob;
  onComplete: () => void;
  onCancel: () => void;
}

const CalculatingView: React.FC<CalculatingViewProps> = ({ job, onComplete, onCancel }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <button onClick={onCancel} className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/5">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-[#111418] text-lg font-bold flex-1 text-center pr-10">Analyzing File</h1>
      </div>

      <div className="mb-8">
        <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-sm border border-primary/10 bg-white">
          <div className="w-full bg-slate-100 aspect-[3/4] flex items-center justify-center relative">
            <div className="w-full h-full bg-center bg-no-repeat bg-cover opacity-90" style={{backgroundImage: `url('https://picsum.photos/seed/${job.fileName}/600/800')`}}></div>
            <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
              <div className="bg-white/90 p-3 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
              </div>
            </div>
          </div>
          <div className="flex w-full grow flex-col items-stretch justify-center gap-1 p-5 border-t border-primary/5">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[#111418] text-lg font-bold leading-tight truncate">{job.fileName}</p>
              <span className="text-primary text-xs font-bold px-2 py-0.5 rounded-full bg-primary/10">PDF</span>
            </div>
            <div className="flex items-center gap-3 justify-between mt-1">
              <p className="text-slate-500 text-sm font-medium">{job.fileSize} • A4 Portrait</p>
              <button onClick={onCancel} className="text-red-500 text-sm font-semibold hover:bg-red-50 px-2 py-1 rounded transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 mb-8">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <h3 className="text-[#111418] text-xl font-bold">Analyzing document...</h3>
            <p className="text-primary text-lg font-bold tabular-nums">{Math.min(100, progress)}%</p>
          </div>
          <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out rounded-full relative" 
              style={{ width: `${Math.min(100, progress)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-start bg-primary/5 p-4 rounded-lg border border-primary/10">
          <span className="material-symbols-outlined text-primary text-xl">settings_input_component</span>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ghostscript engine calculating page count and ink coverage for accurate cost estimation.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest px-1">Processing Details</h4>
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-primary/5">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
            <span className="material-symbols-outlined text-2xl">description</span>
          </div>
          <div className="flex flex-col flex-1">
            <p className="text-[#111418] text-base font-semibold leading-tight">Page Count</p>
            <p className="text-slate-500 text-xs mt-1">Determining total printable pages</p>
          </div>
          <div className="flex flex-col items-end">
            <span className={`text-sm font-medium ${progress > 40 ? 'text-success' : 'text-primary animate-pulse'}`}>
              {progress > 40 ? '12 Pages' : 'Calculating...'}
            </span>
          </div>
        </div>
        <div className={`flex items-center gap-4 bg-white p-4 rounded-xl border border-primary/5 transition-opacity ${progress < 50 ? 'opacity-60' : 'opacity-100'}`}>
          <div className={`${progress > 80 ? 'text-primary bg-primary/10' : 'text-slate-400 bg-slate-100'} flex items-center justify-center rounded-lg shrink-0 size-12`}>
            <span className="material-symbols-outlined text-2xl">format_color_fill</span>
          </div>
          <div className="flex flex-col flex-1">
            <p className="text-[#111418] text-base font-semibold leading-tight">Ink Coverage</p>
            <p className="text-slate-500 text-xs mt-1">Analyzing CMYK distribution</p>
          </div>
          <div className="flex flex-col items-end">
            <span className={`text-sm font-medium ${progress > 80 ? 'text-success' : 'text-slate-400'}`}>
              {progress > 80 ? 'Optimal' : progress > 50 ? 'Analyzing...' : 'Pending'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatingView;
