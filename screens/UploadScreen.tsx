
import React from 'react';
import { AppStep } from '../types';
import Stepper from '../components/Stepper';

interface UploadScreenProps {
  onUpload: (file: File) => void;
}

const UploadScreen: React.FC<UploadScreenProps> = ({ onUpload }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">print</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight">KioskPrint</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined">help</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pt-6 pb-24">
        <Stepper currentStep={AppStep.UPLOAD} />

        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-[#111418] dark:text-white mb-2">Ready to Print?</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Upload your PDF to get an instant quote.</p>
        </div>

        <div className="dashed-border bg-white dark:bg-gray-900/50 p-8 flex flex-col items-center justify-center min-h-[320px] mb-8 group cursor-pointer relative active:scale-[0.98] transition-all">
          <input 
            type="file" 
            className="absolute inset-0 opacity-0 cursor-pointer" 
            accept="application/pdf"
            onChange={handleFileChange}
          />
          <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-primary text-5xl">cloud_upload</span>
          </div>
          <h3 className="text-lg font-bold mb-2">Drag and drop PDF here</h3>
          <p className="text-sm text-gray-500 text-center mb-6">Max file size 25MB. Supports standard PDF formats.</p>
          <div className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-base shadow-lg shadow-primary/25 pointer-events-none">
            Select PDF
          </div>
        </div>

        <section className="space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500">How it works</h4>
          <div className="grid gap-3">
            {[
              { 
                icon: 'data_object', 
                title: 'Automated Calculation', 
                desc: 'Our system uses Ghostscript to analyze your PDF and count the exact number of pages instantly.' 
              },
              { 
                icon: 'payments', 
                title: 'Secure Checkout', 
                desc: 'Pay via a unique, encrypted payment link generated specifically for your print job.' 
              },
              { 
                icon: 'check_circle', 
                title: 'Instant Printing', 
                desc: 'Once payment is confirmed, the kiosk will begin printing your documents automatically.' 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-4 rounded-xl flex gap-4 items-start border border-gray-100 dark:border-gray-800">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 pb-8 pt-2 px-6 flex justify-between items-center z-50 max-w-md mx-auto">
        <a className="flex flex-col items-center gap-1 text-primary" href="#">
          <span className="material-symbols-outlined">upload_file</span>
          <span className="text-[10px] font-bold uppercase tracking-tight">Upload</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-gray-400" href="#">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[10px] font-bold uppercase tracking-tight">History</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-gray-400" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-bold uppercase tracking-tight">Settings</span>
        </a>
      </nav>
    </>
  );
};

export default UploadScreen;
