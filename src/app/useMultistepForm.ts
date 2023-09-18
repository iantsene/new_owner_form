"use client";

import { ReactElement, useState } from "react"

export default function useMultistepForm(steps: ReactElement[]) {
const [currentStepIndex, setCurrentSetupIndex] = useState(0)

function next() {
setCurrentSetupIndex(i => {
    if (i >= steps.length - 1) return i
    return i + 1
})
}

function back() {
setCurrentSetupIndex(i => {
if (i <= 0) return i
return i - 1
})
}

function goTo(index: number) {
setCurrentSetupIndex(index)
}


return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length -1,
    goTo,
    next,
    back,
}

}