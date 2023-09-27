"use client";

import { ReactElement, useState } from "react";

export default function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  function next() {
    //  go to the next step and add current step to the completed ones
    if (completedSteps.includes(currentStepIndex)) {
      if (currentStepIndex < steps.length - 1) {
        setCurrentStepIndex((i) => i + 1);
      }
    }
  }
  

  function back() {
    // go back a step
    if (currentStepIndex > 0) {
      setCurrentStepIndex((i) => i - 1);
    }
  }

  function handleStepComplete() {
    // Mark the current step as completed
    if (!completedSteps.includes(currentStepIndex)) {
      setCompletedSteps([...completedSteps, currentStepIndex]);
    }

    // Move to the next step
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((i) => i + 1);
    }
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    setCurrentStepIndex,
    next,
    back,
    handleStepComplete,
    completedSteps,
  };
}



