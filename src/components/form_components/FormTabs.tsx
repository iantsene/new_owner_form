import { Button, Paper, Tab, Tabs } from '@mui/material';
import {useEffect, useState} from 'react'



export default function FormTabs(props){
  
  const { completedSteps, currentStepIndex, setCurrentStepIndex, isTabContainerReady, setIsTabContainerReady, includeDetailedSteps, openTabs, 
    setOpenTabs, basicTabLabels, tabLabels, viewMode } = props;
  
 
    useEffect(() => {
      if (isTabContainerReady) {
        const index = currentStepIndex;
        setOpenTabs((prevOpenTabs) => {
          if (!prevOpenTabs.includes(index)) {
            return [...prevOpenTabs, index]; //2. Remember the tab as open
          }
          return prevOpenTabs;
        });
      }
    }, [currentStepIndex, isTabContainerReady]);
  
    const handleTabChange = (index) => {
      if (index >= tabLabels.length) {
        return;
      }
  
      setCurrentStepIndex(index);
  
      setOpenTabs((prevOpenTabs) => {
        if (!prevOpenTabs.includes(index)) {
          return [...prevOpenTabs, index];
        }
        return prevOpenTabs;
      });
    };
  
    //3. Determine which tabs to render based on the view mode
    const tabsToRender = viewMode === 'basic' ? basicTabLabels : tabLabels;
  
    //4. Controls the rendering the tabs
    const renderedTabs = tabsToRender
      .filter((_, index) => completedSteps.includes(index) || openTabs.includes(index))
      .map((label, index) => (
        <Tab
          key={index}
          className={`tab ${currentStepIndex === index ? 'active-tab' : ''}`}
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