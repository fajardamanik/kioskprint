
import React, { useRef } from 'react';

interface UploadViewProps {
  onFileSelect: (file: File) => void;
}

const UploadView: React.FC<UploadViewProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const infoItems = [
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
  ];

  return (
    <div className="flex-1 flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-extrabold text-[#111418] mb-2">Ready to Print?</h2>
        <p className="text-sm text-gray-500">Upload your PDF to get an instant quote.</p>
      </div>

      <div 
        onClick={triggerUpload}
        className="dashed-border bg-white p-8 flex flex-col items-center justify-center min-h-[320px] mb-8 group cursor-pointer active:scale-[0.98] transition-all hover:bg-primary/5"
      >
        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-primary text-5xl">cloud_upload</span>
        </div>
        <h3 className="text-lg font-bold mb-2 text-[#111418]">Drag and drop PDF here</h3>
        <p className="text-sm text-gray-500 text-center mb-6">Max file size 25MB. Supports standard PDF formats.</p>
        <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-base shadow-lg shadow-primary/25 active:shadow-none transition-all">
          Select PDF
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept=".pdf" 
          onChange={handleFileChange} 
        />
      </div>

      <section className="space-y-4 mb-8">
        <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400">How it works</h4>
        <div className="grid gap-3">
          {infoItems.map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl flex gap-4 items-start border border-gray-100 shadow-sm">
              <div className="text-primary mt-1">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <p className="font-bold text-sm mb-0.5 text-[#111418]">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UploadView;
