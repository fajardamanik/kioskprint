
import React from 'react';
import { AppState } from '../types';

interface StepperProps {
  currentStep: AppState;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps = [
    { key: AppState.UPLOAD, label: 'Upload' },
    { key: AppState.CALCULATING, label: 'Calculate' },
    { key: AppState.PAYMENT, label: 'Pay' }
  ];

  const getCurrentIndex = () => {
    if (currentStep === AppState.UPLOAD) return 0;
    if (currentStep === AppState.CALCULATING) return 1;
    if (currentStep === AppState.PAYMENT) return 2;
    return 3;
  };

  const activeIndex = getCurrentIndex();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between relative px-2">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isCompleted = index < activeIndex;

          return (
            <div key={step.key} className="relative z-10 flex flex-col items-center gap-1">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : isCompleted
                      ? 'bg-success text-white'
                      : 'bg-white border-2 border-gray-200 text-gray-400'
                }`}
              >
                {isCompleted ? <span className="material-symbols-outlined text-lg">check</span> : index + 1}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                isActive ? 'text-primary' : 'text-gray-400'
              }`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
