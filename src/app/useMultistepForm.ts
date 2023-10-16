"use client";

import { ReactElement, useState } from "react";

export default function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  

  function next() {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((i) => i + 1);
    }
  }

  function back() {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((i) => i - 1);
    }
  }

  function handleStepComplete() {
    if (!completedSteps.includes(currentStepIndex)) {
      setCompletedSteps([...completedSteps, currentStepIndex]);
    }
  } //If completedSteps hook doesn't include the currentStepIndex set the completed steps to be whatever is the current state of completedStep plus the currentStepIndex.


  function goTo(index: number) {
    setCurrentStepIndex(index);
  }


  return {
    currentStepIndex,
    setCurrentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
    handleStepComplete,
    completedSteps,
    setCompletedSteps
  };
}



