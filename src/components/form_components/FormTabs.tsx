import { Button, Paper, Tab, Tabs } from '@mui/material';
import {useEffect, useState} from 'react'



export default function FormTabs(props){
  const tabLabels = ['Basic Info', 'Main Description', 'General Info', 'Location', 'Views', 'Pool', 'Outside', 'Inside', 'Kitchen', 'Safety', 'Beds & Baths', 'Amenities', 'Room Amenities', 'Extra Information',];
  
  const { completedSteps, currentStepIndex, setCurrentStepIndex, isTabContainerReady, setIsTabContainerReady, includeDetailedSteps } = props;
  

  const [openTabs, setOpenTabs] = useState([0]); // Initialize with only the "Basic Info" tab open

  useEffect(() => {
    setIsTabContainerReady(true); // Set isTabContainerReady to true initially
  }, []); // Only run this effect once

  useEffect(() => {
    if (isTabContainerReady) {
      const index = currentStepIndex;
      setOpenTabs((prevOpenTabs) => {
        if (!prevOpenTabs.includes(index)) {
          return [...prevOpenTabs, index]; // Remember the tab as open
        }
        return prevOpenTabs;
      });
    }
  }, [currentStepIndex, isTabContainerReady]);

  const handleTabChange = (index) => {
    setCurrentStepIndex(index);
  };

  useEffect(() => {
    if (!includeDetailedSteps) {
      
      setCurrentStepIndex(0); 
      setOpenTabs([0]);
    }
  }, [includeDetailedSteps]);

  const renderedTabs = tabLabels
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