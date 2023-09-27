import { Button, Paper, Tab, Tabs } from '@mui/material';


export default function FormTabs(props){

  function handleTabChange(index: any) {
    if (props.completedSteps.includes(index)) {
      props.setCurrentStepIndex(index);
    };
  }

  const tabLabels = ['Main Description', 'General Info', 'Location', 'Views', 'Pool', 'Outside', 'Inside', 'Kitchen', 'Safety', 'Beds & Baths', 'Amenities', 'Room Amenities', 'Extra Information',
];

    return(
        <>
        <div className="form-tabs">
          <div className="tabs-container">

            {props.completedSteps.length > 0 && (
              <Tabs
                value={props.currentStepIndex}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                variant='scrollable'
                scrollButtons="auto"
                className='tab-space'
              >
                {props.completedSteps.length > 0 && props.steps.map((step, index) => (
                  props.completedSteps.includes(index) && (
                    <Tab
                      key={index}
                      className="tab"
                      label={tabLabels[index]}
                      onClick={() => props.setCurrentStepIndex(index)}

                    />
                  )
                ))}
              </Tabs>
            )}


          </div>
        </div>

        
        </>
    )
}