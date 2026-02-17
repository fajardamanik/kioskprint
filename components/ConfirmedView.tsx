
import React from 'react';
import { PrintJob } from '../types';

interface ConfirmedViewProps {
  job: PrintJob;
  onPrint: () => void;
}

const ConfirmedView: React.FC<ConfirmedViewProps> = ({ job, onPrint }) => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center mb-8 mt-4">
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-4 scale-in animate-[bounce_1s_infinite]">
          <span className="material-symbols-outlined text-success text-5xl font-bold">check_circle</span>
        </div>
        <h2 className="text-2xl font-extrabold text-[#111418]">Payment Received!</h2>
        <p className="text-sm text-gray-500 mt-1">Your print job is ready to start.</p>
      </div>

      <div className="w-full bg-white rounded-2xl shadow-xl shadow-black/5 overflow-hidden border border-gray-100 relative">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-200">
            <span className="text-sm font-medium text-gray-500">Order Status</span>
            <span className="bg-success/10 text-success text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Paid</span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Order ID</span>
              <span className="text-sm font-bold font-mono">#{job.orderId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Date/Time</span>
              <span className="text-sm font-semibold">{job.timestamp}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Number of Pages</span>
              <span className="text-sm font-semibold">{job.pageCount} Pages (B&W)</span>
            </div>
            <div className="pt-4 flex justify-between items-center border-t border-gray-100">
              <span className="text-base font-bold text-[#111418]">Total Paid</span>
              <span className="text-xl font-extrabold text-primary">IDR {job.total.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="h-4 w-full bg-[radial-gradient(circle,transparent_7px,#ffffff_8px)] bg-[length:24px_24px] bg-[position:bottom_center] bg-repeat-x relative -bottom-2"></div>
      </div>

      <div className="mt-12 w-full space-y-4 mb-32">
        <button 
          onClick={onPrint}
          className="w-full bg-primary text-white py-4 rounded-2xl font-extrabold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-3 active:scale-[0.98] transition-all hover:bg-primary/90"
        >
          <span className="material-symbols-outlined">play_circle</span>
          Start Printing
        </button>
        <button className="w-full bg-white text-[#111418] border border-gray-200 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 active:bg-gray-50 transition-all">
          <span className="material-symbols-outlined text-primary">download</span>
          Download Receipt PDF
        </button>
      </div>

      <p className="text-center text-xs text-gray-400 pb-8 leading-relaxed">
        Please stay near the kiosk once printing starts.<br/>
        Reference: GHOSTSCRIPT_PROC_CONFIRMED
      </p>
    </div>
  );
};

export default ConfirmedView;
