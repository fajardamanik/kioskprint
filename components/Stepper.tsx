
import React from 'react';
import { AppStep } from '../types';

interface StepperProps {
  currentStep: AppStep;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps = [
    { id: AppStep.UPLOAD, label: 'Upload' },
    { id: AppStep.ANALYZING, label: 'Calculate' },
    { id: AppStep.PAYMENT, label: 'Pay' },
  ];

  const getStepStatus = (stepId: AppStep, index: number) => {
    const currentIdx = steps.findIndex(s => s.id === currentStep);
    if (stepId === currentStep) return 'active';
    if (index < currentIdx) return 'completed';
    return 'pending';
  };

  return (
    <div className="mb-8 w-full px-4">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0"></div>
        {steps.map((step, index) => {
          const status = getStepStatus(step.id, index);
          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                status === 'active' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : status === 'completed'
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 text-gray-400'
              }`}>
                {index + 1}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                status === 'active' ? 'text-primary' : 'text-gray-400'
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
