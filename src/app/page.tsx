"use client";

import useMultistepForm from './useMultistepForm'
import ExtraInfo from '@/components/cards_content/ExtraInfo';
import Amenities from '@/components/cards_content/Amenities';
import Views from '@/components/cards_content/Views';
import { FormEvent, useState } from 'react';
import GeneralInfo from '@/components/cards_content/GeneralInfo';
import MainDescription from '@/components/cards_content/MainDescription';
import Location from '@/components/cards_content/Location';
import Pool from '@/components/cards_content/Pool';
import Outside from '@/components/cards_content/Outside';
import Inside from '@/components/cards_content/Inside';
import Kitchen from '@/components/cards_content/Kitchen';
import Safety from '@/components/cards_content/Safety';
import BedsNBaths from '@/components/cards_content/BedsNBaths';
import RoomAmenities from '@/components/cards_content/RoomAmenities';
import { FormDataTypes } from './types/all-form-types';
import INITIAL_DATA from './variables/variables';
import { Button, Paper, Tab, Tabs } from '@mui/material';
import FormTabs from '../components/form_components/FormTabs'
import Questionnaire from '@/components/cards_content/Questionnaire';


export default function Home() {
  const [data, setData] = useState(INITIAL_DATA); //1. Maintains state for the entire document. INITIAL_DATA lives under app/variables
  const [selectedItems, setSelectedItems] = useState({}); //2. Secondary document state. Part of a mechanism to transfer state to data when collapsing from Advanced View to Basic
  const [isTabContainerReady, setIsTabContainerReady] = useState(true); //3. Marks whether a placeholder occupies space upon the tab space (false) or whether the actual tabs comtainer is there to display tabs (true)
  const [includeDetailedSteps, setIncludeDetailedSteps] = useState(false); //4. Switch that affects other code determining whether we are on the basic or the advanced view.
  const [openTabs, setOpenTabs] = useState([0]); //5. Controls how many tabs should be open




  const handleFieldChange = (fieldName: any, value: any) => {
    setData({
      ...data,
      [fieldName]: value,
    });

    setSelectedItems({
      ...selectedItems,
      [fieldName]: value,
    });
  };



  function updateFields(fields: Partial<FormDataTypes>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) {

      if (!isTabContainerReady) {
        setIsTabContainerReady(true);
      }
      return next();
    }
    fetch('http://localhost:8080/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => (res.json()).then(data => console.log(data)).catch(error => console.log(error)));
    console.log(data)
  };



  const briefSteps = [
    <Questionnaire {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <MainDescription {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  ];
  //6. These above and below are the actual tab components, laid out here to be injected below and elsewhere.
  const detailedSteps = [
    <GeneralInfo {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Location {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Views {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Pool {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Outside {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Inside {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Kitchen {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Safety {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <BedsNBaths {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Amenities {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <RoomAmenities {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <ExtraInfo {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  ];

  const basicTabLabels = ['Basic Info', 'Main Description',];
  const advancedTabLabels = ['General Info', 'Location', 'Views', 'Pool', 'Outside', 'Inside', 'Kitchen', 'Safety', 'Beds & Baths', 'Amenities', 'Room Amenities', 'Extra Information',];
  const [tabLabels, setTabLabels] = useState([...basicTabLabels, ...advancedTabLabels]); //Controls the rendering of tabs (FormTabs.tsx #4) via the above labels. 

  includeDetailedSteps && briefSteps.push(...detailedSteps) // Makes sure that on first push of advanced view button the array with the detailedSteps tabs is couple with the briefSteps one.
  //7. That way on click you get continuity of tabs and a smooth experience






  const currentSteps = [...briefSteps,];
  const { steps, currentStepIndex, setCurrentStepIndex, step, isFirstStep, isLastStep, back, next, handleStepComplete, completedSteps } = useMultistepForm(currentSteps);
  //8. This is my multistep custom hook which handles navigation and tracking of steps on the form.

  const goToAdvancedView = () => { 
    if (!includeDetailedSteps) {
      setIncludeDetailedSteps(true);
      setTabLabels([...basicTabLabels, ...advancedTabLabels])
      setCurrentStepIndex(2); //9. Sets to the first "Advanced" step on click of Advanced View button (effectively it hits next)
    }
  };

  const goToBasicView = () => {
    setIncludeDetailedSteps(false);
    setCurrentStepIndex(0); //10. Sets to the first "Basic" step
    setTabLabels(basicTabLabels)
  };



  const applySelectedItems = () => {
    setData({
      ...data,
      ...selectedItems,
    });
  }; //11. Part of the mechanism I mentioned on 2.

  function modeLabel() {
    return includeDetailedSteps ? "Advanced View" : "Basic View";
  } //12. This handles the label over the navigation form buttons to display based on the current view.



  return (<>
    <div className="formprime">
      <form id='form' onSubmit={onSubmit}>


        <Paper className="paper" sx={{ p: 3 }}>
          <FormTabs
            completedSteps={completedSteps}
            currentStepIndex={currentStepIndex}
            setCurrentStepIndex={setCurrentStepIndex}
            steps={steps}
            isTabContainerReady={isTabContainerReady}
            setIsTabContainerReady={setIsTabContainerReady}
            openTabs={openTabs}
            setOpenTabs={setOpenTabs}
            basicTabLabels={basicTabLabels}
            tabLabels={tabLabels}

          /> 
          <div className='page-counter'>

            <div className='form-background'>

              {step}
              <div className="formButtons">
                <div>{steps.length < 10 && currentStepIndex === 1 ? (<span className='help-text'>After filling out this section we have enough information to get you started. You may submit your property as it is now and fill the details later, or you can click below to switch to our advanced view where you may add your detailed information now. </span>) : <div style={{ display: 'block', width: 15, height: 36 }}></div>
                }</div>
                <div>
                  <div className="page-counter"><span className='mode-label'>{modeLabel()}</span> {currentStepIndex + 1} / {steps.length}</div>
                  <div className='menu-buttons'>
                    {!isFirstStep ? (<Button variant="contained" type='button' onClick={back}>Back</Button>) : (null
                    )}
                    <Button variant="contained" className={isLastStep ? 'submit-btn' : ''} onClick={handleStepComplete} type='submit'>{isLastStep ? "Submit" : "Next"}</Button>
                    {steps.length <= 10 && currentStepIndex === 1 ? (<Button variant="contained" className='advanced-view-btn' type='button' onClick={goToAdvancedView}>Go to advanced view</Button>) : null
                    }
                    {steps.length === 14 ? (<Button variant="contained" className='basic-view-btn' type='button' onClick={() => {
                      goToBasicView();
                      applySelectedItems();
                      setCurrentStepIndex(1)
                    }}>Go to basic view</Button>) : null
                    }
                  </div>
                </div>
              </div>

            </div>

          </div>
        </Paper>
      </form>
    </div>
  </>
  )
}