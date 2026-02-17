
import React, { useState, useEffect } from 'react';
import { AppStep, OrderDetails, FileInfo } from './types';
import UploadScreen from './screens/UploadScreen';
import AnalyzingScreen from './screens/AnalyzingScreen';
import PaymentScreen from './screens/PaymentScreen';
import SuccessScreen from './screens/SuccessScreen';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.UPLOAD);
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    id: '#KP-' + Math.floor(Math.random() * 900000 + 100000),
    baseCost: 3000,
    uniqueCode: 134,
    total: 3134,
    date: new Date().toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    }),
  });

  const handleFileUpload = (file: File) => {
    // Mock file info extraction
    const mockFile: FileInfo = {
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
      pages: 12, // Mocked page count
      format: 'A4 Portrait'
    };
    
    setOrderDetails(prev => ({
      ...prev,
      file: mockFile,
      baseCost: mockFile.pages * 250, // Example calculation
      total: (mockFile.pages * 250) + prev.uniqueCode
    }));
    
    setCurrentStep(AppStep.ANALYZING);
  };

  const handleAnalysisComplete = () => {
    setCurrentStep(AppStep.PAYMENT);
  };

  const handlePaymentConfirm = () => {
    setCurrentStep(AppStep.SUCCESS);
  };

  const handleRestart = () => {
    setCurrentStep(AppStep.UPLOAD);
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative flex flex-col bg-white dark:bg-background-dark shadow-2xl overflow-hidden">
      {currentStep === AppStep.UPLOAD && (
        <UploadScreen onUpload={handleFileUpload} />
      )}
      
      {currentStep === AppStep.ANALYZING && (
        <AnalyzingScreen 
          file={orderDetails.file!} 
          onComplete={handleAnalysisComplete} 
          onCancel={handleRestart}
        />
      )}
      
      {currentStep === AppStep.PAYMENT && (
        <PaymentScreen 
          orderDetails={orderDetails} 
          onConfirm={handlePaymentConfirm} 
          onBack={handleRestart}
        />
      )}
      
      {currentStep === AppStep.SUCCESS && (
        <SuccessScreen 
          orderDetails={orderDetails} 
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default App;
