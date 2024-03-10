import { Tab, Tabs } from "@mui/material";
import { useEffect } from "react";

interface FormTabsProps {
  completedSteps: number[];
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
  isTabContainerReady: boolean;
  openTabs: number[]; 
  setOpenTabs: (tabs: number[] | ((prevOpenTabs: number[]) => number[])) => void;
  basicTabLabels: string[]; 
  tabLabels: string[]; 
  viewMode: "Basic View" | "Advanced View"; 
}

export default function FormTabs(props: FormTabsProps) {
  const {
    completedSteps,
    currentStepIndex,
    setCurrentStepIndex,
    isTabContainerReady,
    openTabs,
    setOpenTabs,
    basicTabLabels,
    tabLabels,
    viewMode,
  } = props;

  useEffect(() => {
    if (isTabContainerReady) {
      const index = currentStepIndex;
      setOpenTabs((prevOpenTabs: number[]) => {
        if (!prevOpenTabs.includes(index)) {
          return [...prevOpenTabs, index]; //2. Remember the tab as open
        }
        return prevOpenTabs;
      });
    }
  }, [currentStepIndex, isTabContainerReady]);

  const handleTabChange = (index: number) => {
    if (index >= tabLabels.length) {
      return;
    }

    setCurrentStepIndex(index);

    setOpenTabs((prevOpenTabs: number[]) => {
      if (!prevOpenTabs.includes(index)) {
        return [...prevOpenTabs, index];
      }
      return prevOpenTabs;
    });
  };

  //3. Determine which tabs to render based on the view mode
  const tabsToRender = viewMode === "Basic View" ? basicTabLabels : tabLabels;

  //4. Controls the rendering of the tabs
  const renderedTabs = tabsToRender.filter((_: unknown, index: number) => completedSteps.includes(index) || openTabs.includes(index)).map((label: string, index: number) => (
      <Tab
        key={index}
        className={`tab ${currentStepIndex === index ? "active-tab" : ""}`}
        label={label}
        onClick={() => handleTabChange(index)}
      />
    ));

  return (
    <div className="form-tabs">
      {isTabContainerReady && (
        <Tabs
          value={currentStepIndex}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          className="tab-space"
        >
          {renderedTabs}
        </Tabs>
      )}
    </div>
  );
}
