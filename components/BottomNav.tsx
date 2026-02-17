
import React from 'react';
import { NavTab } from '../types';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { key: NavTab.UPLOAD, label: 'Upload', icon: 'upload_file' },
    { key: NavTab.RECEIPT, label: 'Receipt', icon: 'receipt_long' },
    { key: NavTab.HISTORY, label: 'History', icon: 'history' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 pb-8 pt-2 px-6 flex justify-between items-center z-40 max-w-md mx-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button 
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-primary' : 'text-gray-400'
            }`}
          >
            <span 
              className="material-symbols-outlined" 
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {tab.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tight">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
