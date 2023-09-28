import { Button, Paper, Tab, Tabs } from '@mui/material';
import {useEffect, useState} from 'react'



export default function FormTabs(props){
  const tabLabels = ['Main Description', 'General Info', 'Location', 'Views', 'Pool', 'Outside', 'Inside', 'Kitchen', 'Safety', 'Beds & Baths', 'Amenities', 'Room Amenities', 'Extra Information',];
  
  const { completedSteps, currentStepIndex, setCurrentStepIndex, isTabContainerReady, setIsTabContainerReady } = props;
  

  useEffect(() => {
    setIsTabContainerReady(false);
  }, []);

  const handleTabChange = (index) => {
    if (completedSteps.includes(index)) {
      setCurrentStepIndex(index);
    }
  };

  

  let tabContainer = (
    <div className="tab-container-placeholder">
    </div>
  );

  if (isTabContainerReady) {
    tabContainer = (
      <div className="form-tabs">
        {completedSteps.length > 0 && (
          <Tabs
            value={currentStepIndex}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            className="tab-space"
          >
            {completedSteps.length > 0 &&
              props.steps.map((step, index) =>
                completedSteps.includes(index) ? (
                  <Tab
                    key={index}
                    className="tab"
                    label={tabLabels[index]}
                    onClick={() => setCurrentStepIndex(index)}
                  />
                ) : null
              )}
          </Tabs>
        )}
       
      </div>
    );
  }

  return (
    <div className="form-tabs">
      {tabContainer}
    </div>
  );
}





