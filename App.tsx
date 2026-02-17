
import React, { useState, useEffect, useCallback } from 'react';
import { AppState, PrintJob, NavTab } from './types';
import Header from './components/Header';
import Stepper from './components/Stepper';
import UploadView from './components/UploadView';
import CalculatingView from './components/CalculatingView';
import PaymentView from './components/PaymentView';
import ConfirmedView from './components/ConfirmedView';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.UPLOAD);
  const [currentTab, setCurrentTab] = useState<NavTab>(NavTab.UPLOAD);
  const [currentJob, setCurrentJob] = useState<PrintJob | null>(null);

  const handleFileUpload = useCallback((file: File) => {
    // Generate a mock job
    const uniqueCode = Math.floor(100 + Math.random() * 900);
    const mockJob: PrintJob = {
      fileName: file.name,
      fileSize: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
      pageCount: 12, // Default mock
      inkLevel: 'Medium',
      cost: 3000,
      uniqueCode: uniqueCode,
      total: 3000 + uniqueCode,
      timestamp: new Date().toLocaleString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      orderId: 'KP-' + Math.floor(100000 + Math.random() * 900000)
    };

    setCurrentJob(mockJob);
    setAppState(AppState.CALCULATING);
  }, []);

  const handleConfirmPayment = () => {
    setAppState(AppState.CONFIRMED);
    setCurrentTab(NavTab.RECEIPT);
  };

  const resetFlow = () => {
    setAppState(AppState.UPLOAD);
    setCurrentTab(NavTab.UPLOAD);
    setCurrentJob(null);
  };

  return (
    <div className="min-h-screen bg-background-light flex flex-col max-w-md mx-auto relative overflow-hidden shadow-2xl">
      <Header />

      <main className="flex-1 flex flex-col overflow-y-auto pb-24 px-4 pt-6">
        {appState !== AppState.CONFIRMED && <Stepper currentStep={appState} />}

        <div className="flex-1 flex flex-col">
          {appState === AppState.UPLOAD && (
            <UploadView onFileSelect={handleFileUpload} />
          )}

          {appState === AppState.CALCULATING && currentJob && (
            <CalculatingView 
              job={currentJob} 
              onComplete={() => setAppState(AppState.PAYMENT)} 
              onCancel={resetFlow}
            />
          )}

          {appState === AppState.PAYMENT && currentJob && (
            <PaymentView 
              job={currentJob} 
              onBack={() => setAppState(AppState.UPLOAD)}
              onPaid={handleConfirmPayment}
            />
          )}

          {appState === AppState.CONFIRMED && currentJob && (
            <ConfirmedView 
              job={currentJob} 
              onPrint={resetFlow}
            />
          )}
        </div>
      </main>

      <BottomNav 
        activeTab={currentTab} 
        onTabChange={(tab) => {
          setCurrentTab(tab);
          if (tab === NavTab.UPLOAD) setAppState(AppState.UPLOAD);
        }} 
      />
    </div>
  );
};

export default App;
