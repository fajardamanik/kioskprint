
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-primary p-1.5 rounded-lg text-white">
          <span className="material-symbols-outlined text-2xl">print</span>
        </div>
        <h1 className="text-lg font-bold tracking-tight text-[#111418]">KioskPrint</h1>
      </div>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20">
        <span className="material-symbols-outlined">help</span>
      </button>
    </header>
  );
};

export default Header;
