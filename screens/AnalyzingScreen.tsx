
import React, { useState, useEffect } from 'react';
import { FileInfo } from '../types';

interface AnalyzingScreenProps {
  file: FileInfo;
  onComplete: () => void;
  onCancel: () => void;
}

const AnalyzingScreen: React.FC<AnalyzingScreenProps> = ({ file, onComplete, onCancel }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-background-dark">
      <header className="flex items-center px-4 py-3 border-b border-primary/10">
        <button onClick={onCancel} className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/5 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Analyzing File</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pt-8">
        <div className="@container mb-8">
          <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-sm border border-primary/10 bg-white dark:bg-background-dark/50">
            <div className="w-full bg-slate-100 dark:bg-slate-800 aspect-[3/4] flex items-center justify-center relative">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover opacity-90" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1ndv0ad9B96iWtzAhrt0OsAmer7KcqpjB8HcClv55i11ZweWu062og6u5HdppKBzyNT3-PaEKpdIEmujPf9MoMofC0XzPRmqLh24-qT9mPHLVxAGD43BkHjP1zt6UWJtmUmezK6thk6wftRXNqxWRnp8YOI0x9FA7PXN_dzE-TM4_ra5Bl4_B1ii4nIxsvtk14K86dqC94QeqD0_FB4e6icRgg3uWgL-rQm5qKtDW06_-EBYaYwSfsj8i44BV7tytFGH4PQLupds")' }}
              />
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                <div className="bg-white/90 dark:bg-background-dark/90 p-3 rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                </div>
              </div>
            </div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-1 p-5 border-t border-primary/5">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-tight truncate">{file.name}</p>
                <span className="text-primary text-xs font-bold px-2 py-0.5 rounded-full bg-primary/10">PDF</span>
              </div>
              <div className="flex items-center gap-3 justify-between mt-1">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{file.size} • {file.format}</p>
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
              <h3 className="text-[#111418] dark:text-white text-xl font-bold">Analyzing document...</h3>
              <p className="text-primary text-lg font-bold tabular-nums">{Math.min(progress, 100)}%</p>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out rounded-full relative" 
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-start bg-primary/5 p-4 rounded-lg border border-primary/10">
            <span className="material-symbols-outlined text-primary text-xl">settings_input_component</span>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Ghostscript engine calculating page count and ink coverage for accurate cost estimation.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest px-1">Processing Details</h4>
          <div className="flex items-center gap-4 bg-white dark:bg-background-dark/30 p-4 rounded-xl border border-primary/5">
            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
              <span className="material-symbols-outlined text-2xl">description</span>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-[#111418] dark:text-white text-base font-semibold leading-tight">Page Count</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Determining total printable pages</p>
            </div>
            <div className="flex flex-col items-end">
              <span className={`text-sm font-medium ${progress > 50 ? 'text-success' : 'text-primary animate-pulse'}`}>
                {progress > 50 ? 'Success' : 'Calculating...'}
              </span>
            </div>
          </div>
          <div className={`flex items-center gap-4 bg-white dark:bg-background-dark/30 p-4 rounded-xl border border-primary/5 transition-opacity ${progress < 50 ? 'opacity-60' : 'opacity-100'}`}>
            <div className={`flex items-center justify-center rounded-lg shrink-0 size-12 ${progress > 50 ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
              <span className="material-symbols-outlined text-2xl">format_color_fill</span>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-[#111418] dark:text-white text-base font-semibold leading-tight">Ink Coverage</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Analyzing CMYK distribution</p>
            </div>
            <div className="flex flex-col items-end">
              <span className={`text-sm font-medium ${progress > 80 ? 'text-success' : (progress > 50 ? 'text-primary animate-pulse' : 'text-slate-400')}`}>
                {progress > 80 ? 'Success' : (progress > 50 ? 'Analyzing...' : 'Pending')}
              </span>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-6 bg-white dark:bg-background-dark border-t border-primary/5">
        <button 
          className={`flex w-full items-center justify-center overflow-hidden rounded-xl h-14 px-4 font-bold transition-all ${
            progress < 100 
              ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed' 
              : 'bg-primary text-white shadow-lg shadow-primary/30'
          }`} 
          disabled={progress < 100}
        >
          <span className="flex items-center gap-2">
            Proceed to Payment
            <span className="material-symbols-outlined text-sm">{progress < 100 ? 'lock' : 'arrow_forward'}</span>
          </span>
        </button>
        <p className="text-center text-slate-400 dark:text-slate-500 text-[10px] mt-4 uppercase tracking-widest">
          Secure self-service printing kiosk
        </p>
      </footer>
    </div>
  );
};

export default AnalyzingScreen;
