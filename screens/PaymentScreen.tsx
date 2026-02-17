
import React from 'react';
import { OrderDetails } from '../types';

interface PaymentScreenProps {
  orderDetails: OrderDetails;
  onConfirm: () => void;
  onBack: () => void;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ orderDetails, onConfirm, onBack }) => {
  const formatCurrency = (val: number) => `IDR ${val.toLocaleString('id-ID')}`;

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 border-b border-gray-200 dark:border-gray-800 justify-between">
        <div onClick={onBack} className="text-primary flex size-10 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Payment Checkout</h2>
        <div className="size-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto pb-32">
        <div className="p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 ios-shadow border border-gray-100 dark:border-gray-800">
            <h3 className="text-[#111418] dark:text-white text-sm font-bold uppercase tracking-wider mb-4 opacity-60">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 dark:text-gray-400 text-base font-medium">Base Printing Cost</p>
                <p className="text-[#111418] dark:text-white text-base font-semibold">{formatCurrency(orderDetails.baseCost)}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 dark:text-gray-400 text-base font-medium">Unique ID Code</p>
                  <span className="material-symbols-outlined text-primary text-sm">info</span>
                </div>
                <p className="text-primary text-base font-bold">+ IDR {orderDetails.uniqueCode}</p>
              </div>
              <div className="pt-4 mt-2 border-t border-dashed border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-xs text-center mb-1">Total Amount to Pay</p>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-[#111418] dark:text-white text-3xl font-extrabold leading-tight tracking-tight">{formatCurrency(orderDetails.total)}</h3>
                  <button className="mt-2 flex items-center gap-1 text-primary text-xs font-bold bg-primary/10 px-3 py-1 rounded-full active:bg-primary/20">
                    <span className="material-symbols-outlined text-xs">content_copy</span>
                    COPY AMOUNT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mb-4">
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex gap-3">
            <span className="material-symbols-outlined text-amber-600 dark:text-amber-500 shrink-0">warning</span>
            <p className="text-amber-800 dark:text-amber-400 text-sm leading-relaxed font-medium">
              Please transfer the <span className="font-bold underline text-amber-900 dark:text-amber-300">EXACT</span> total amount including the unique code to ensure automatic verification.
            </p>
          </div>
        </div>

        <div className="px-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 ios-shadow border border-gray-100 dark:border-gray-800">
            <h3 className="text-[#111418] dark:text-white text-sm font-bold uppercase tracking-wider mb-4 opacity-60">Bank Transfer Details</h3>
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-1">Bank Name</p>
                  <p className="text-[#111418] dark:text-white text-base font-bold">Bank Central Asia (BCA)</p>
                </div>
                <div className="h-10 w-16 bg-white dark:bg-gray-800 rounded flex items-center justify-center border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <img 
                    alt="BCA Logo" 
                    className="w-full h-full object-contain p-1" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk1wjqRnnqUiX4mrMV4k63zwbLDBAc9LKD8sO7TZtkYVWhROt5tuT3peX4JRy6xEfCmGZTNYTt3IOEK-KQfY7QxoshTHR7nRzWwIVIDQD1Q_7v2wvUh_cETaw15Hwl30Ptt22jIXAbANDyE_twvuFEfaIzYIPbWXvnJYysCpplpyd7LKHHZWTdYoL2jqjyqgUT3cVqXTMimicnYsBCfx3F66BcnLaL_g2rZqnWOv6E1rQWUL5YB5K2vSEpjS6gjQ7PgLSsCHAd9cQ" 
                  />
                </div>
              </div>
              <div className="relative group">
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-1">Account Number</p>
                <div className="flex items-center justify-between bg-background-light dark:bg-background-dark p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                  <p className="text-[#111418] dark:text-white text-xl font-mono font-bold tracking-widest">8830 1928 44</p>
                  <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                    <span className="material-symbols-outlined">content_copy</span>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-1">Account Holder Name</p>
                <p className="text-[#111418] dark:text-white text-base font-bold uppercase">Kiosk Print Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h4 className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest mb-3 text-center">How to Pay</h4>
          <div className="space-y-4">
            {[
              "Copy the account number and the total amount including the 3-digit unique code.",
              "Transfer via m-Banking, ATM, or E-Wallet (OVO/Dana/Gopay).",
              "Click \"I have transferred\" below. Payment is usually verified in 1-2 minutes."
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 p-4 pb-8 max-w-md mx-auto">
        <button 
          onClick={onConfirm}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
        >
          <span className="material-symbols-outlined">check_circle</span>
          I have transferred
        </button>
      </div>
    </div>
  );
};

export default PaymentScreen;
