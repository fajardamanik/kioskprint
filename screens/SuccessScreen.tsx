
import React from 'react';
import { OrderDetails } from '../types';

interface SuccessScreenProps {
  orderDetails: OrderDetails;
  onRestart: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ orderDetails, onRestart }) => {
  const formatCurrency = (val: number) => `IDR ${val.toLocaleString('id-ID')}`;

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark text-[#111418] dark:text-white">
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

      <main className="flex-1 px-4 pt-8 pb-32 w-full">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-success text-5xl font-bold">check_circle</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#111418] dark:text-white">Payment Received!</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Your print job is ready to start.</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-black/5 overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-500">Order Status</span>
              <span className="bg-success/10 text-success text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Paid</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Order ID</span>
                <span className="text-sm font-bold font-mono">{orderDetails.id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Date/Time</span>
                <span className="text-sm font-semibold">{orderDetails.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Number of Pages</span>
                <span className="text-sm font-semibold">
                  {orderDetails.file?.pages || 12} Pages (B&W)
                </span>
              </div>
              <div className="pt-4 flex justify-between items-center border-t border-gray-100 dark:border-gray-800">
                <span className="text-base font-bold text-[#111418] dark:text-white">Total Paid</span>
                <span className="text-xl font-extrabold text-primary">{formatCurrency(orderDetails.total)}</span>
              </div>
            </div>
          </div>
          <div className="h-4 w-full receipt-border relative -bottom-2"></div>
        </div>

        <div className="mt-12 space-y-4">
          <button className="w-full bg-primary text-white py-4 rounded-2xl font-extrabold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined">play_circle</span>
            Start Printing
          </button>
          <button className="w-full bg-white dark:bg-gray-900 text-[#111418] dark:text-white border border-gray-200 dark:border-gray-800 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 active:bg-gray-50 dark:active:bg-gray-800 transition-all">
            <span className="material-symbols-outlined text-primary">download</span>
            Download Receipt PDF
          </button>
        </div>
        
        <p className="text-center text-xs text-gray-400 mt-8 leading-relaxed">
          Please stay near the kiosk once printing starts.<br/>
          Reference: GHOSTSCRIPT_PROC_CONFIRMED
        </p>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 pb-8 pt-2 px-6 flex justify-between items-center z-50 max-w-md mx-auto">
        <a onClick={(e) => { e.preventDefault(); onRestart(); }} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer" href="#">
          <span className="material-symbols-outlined">upload_file</span>
          <span className="text-[10px] font-bold uppercase tracking-tight">Upload</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-primary" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
          <span className="text-[10px] font-bold uppercase tracking-tight">Receipt</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-gray-400" href="#">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[10px] font-bold uppercase tracking-tight">History</span>
        </a>
      </nav>
    </div>
  );
};

export default SuccessScreen;
