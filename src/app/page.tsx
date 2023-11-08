"use client";

import useMultistepForm from './useMultistepForm'
import { FormEvent, useEffect, useState } from 'react';
import { FormDataTypes } from './types/all-form-types';
import FormTabs from '../components/form_components/FormTabs'
import INITIAL_DATA from './variables/variables';
import { Button, Paper, Tab, Tabs } from '@mui/material';
import BasicInfo from '@/components/cards_content/BasicInfo';
import MainDescription from '@/components/cards_content/MainDescription';
import Pool from '@/components/cards_content/Pool';
import Outside from '@/components/cards_content/Outside';
import Inside from '@/components/cards_content/Inside';
import Kitchen from '@/components/cards_content/Kitchen';
import Safety from '@/components/cards_content/Safety';
import BedsNBaths from '@/components/cards_content/BedsNBaths';
import Amenities from '@/components/cards_content/Amenities';
import Location from '@/components/cards_content/Location';
import Sports from '@/components/cards_content/Sports';
// import Test from '@/components/defunct-components/Test';


export default function Home() {
  const [data, setData] = useState(INITIAL_DATA); //1. Maintains state for the entire document. INITIAL_DATA lives under app/variables
  const [selectedItems, setSelectedItems] = useState({}); //2. Secondary document state. Part of a mechanism to transfer state to data when collapsing from Advanced View to Basic
  const [isTabContainerReady, setIsTabContainerReady] = useState(true); //3. Marks whether a placeholder occupies space upon the tab space (false) or whether the actual tabs comtainer is there to display tabs (true)
  const [includeDetailedSteps, setIncludeDetailedSteps] = useState(false); //4. Switch that affects other code determining whether we are on the basic or the advanced view.
  const [openTabs, setOpenTabs] = useState<number[]>([0]); //5. Controls how many tabs should be open


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
    fetch('http://localhost:8080/submit', { //6. Here the backend endpoint is defined so it may be sent our data object for mapping.
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => (res.json()).then(data => console.log(data)).catch(error => console.log(error)));
    console.log(data)
  };



  const briefSteps = [
    <BasicInfo {...data} data={data} setData={setData} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <MainDescription {...data} data={data} setData={setData} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  ];
  //7. These above and below are the actual tab components, laid out here to be injected below and elsewhere.
  const detailedSteps = [

    <Outside {...data} data={data} setData={setData} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Sports {...data} data={data} setData={setData} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Pool {...data} data={data} setData={setData} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Inside {...data} data={data} setData={setData} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <BedsNBaths {...data} data={data} setData={setData} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Kitchen {...data} data={data} setData={setData} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Amenities {...data} data={data} setData={setData} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Safety {...data} data={data} setData={setData} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
    <Location {...data} data={data} setData={setData} handleFieldChange={handleFieldChange} updateFields={updateFields} />,

  ];

  const basicTabLabels = ['Basic Info', 'Main Description',];
  const advancedTabLabels = ['Outside', 'Sports', 'Pool', 'Inside', 'Beds & Baths', 'Kitchen', 'Amenities', 'Safety', 'Location',];
  const [tabLabels, setTabLabels] = useState([...basicTabLabels, ...advancedTabLabels]); //8. Controls the rendering of tabs (FormTabs.tsx #4) via the above labels. 
  includeDetailedSteps && briefSteps.push(...detailedSteps) // Makes sure that on first push of advanced view button the array with the detailedSteps tabs is couple with the briefSteps one.
  //9. That way on click you get continuity of tabs and a smooth experience






  const currentSteps = [...briefSteps,];
  const { steps, currentStepIndex, setCurrentStepIndex, step, isFirstStep, isLastStep, back, next, handleStepComplete, completedSteps } = useMultistepForm(currentSteps);
  //10. This is my multistep custom hook which handles navigation and tracking of steps on the form.

  const goToAdvancedView = () => {
    if (!includeDetailedSteps) {
      setIncludeDetailedSteps(true);
      setTabLabels([...basicTabLabels, ...advancedTabLabels])
      setCurrentStepIndex(2); //11. Sets to the first "Advanced" step on click of Advanced View button (effectively it hits next)
    }
  };

  const goToBasicView = () => {
    setIncludeDetailedSteps(false);
    setCurrentStepIndex(0); //12. Sets to the first "Basic" step
    setTabLabels(basicTabLabels)
  };



  const applySelectedItems = () => {
    setData({
      ...data,
      ...selectedItems,
    });
  }; //13. Part of the mechanism I mentioned on 2.

  function modeLabel() {
    return includeDetailedSteps ? "Advanced View" : "Basic View";
  } //14. This handles the label over the navigation form buttons to display based on the current view.

  const advancedViewBtn = !includeDetailedSteps && <Button variant="contained" className='advanced-view-btn' type='button' onClick={goToAdvancedView}>Go to advanced view</Button>
  const [showMessage, setShowMessage] = useState(false);//15. hook to track when the help text message is shown or not
  const [hasEffectRun, setHasEffectRun] = useState(false); //16. Keeps track of whether the message on the hook above has already appeared or not so it doesn't rerender it on subsequent passes of that tab.

  //17. Function to show the message
  const showMessageFunction = () => {
    setShowMessage(true);
  };


  useEffect(() => {
    if (!hasEffectRun && steps.length < 11 && currentStepIndex === 1) {
      showMessageFunction();

      //18. Hide the message after 15 seconds (15000 milliseconds)
      setTimeout(() => {
        setShowMessage(false);
      }, 15000);

      //19. Mark the effect as run
      setHasEffectRun(true);
    }
  }, [currentStepIndex, hasEffectRun]);

  const viewMode = modeLabel();

  return (<>
    <div className="formprime">
      <form id='form' onSubmit={onSubmit}>


        <Paper className="paper" sx={{ p: 3 }}>
          <FormTabs
            completedSteps={completedSteps}
            currentStepIndex={currentStepIndex}
            setCurrentStepIndex={setCurrentStepIndex}
            viewMode={viewMode}
            isTabContainerReady={isTabContainerReady}
            openTabs={openTabs}
            setOpenTabs={setOpenTabs}
            basicTabLabels={basicTabLabels}
            tabLabels={tabLabels}

          />
          <div className='page-counter'>

            <div className='form-background'>

              {step}
              <div className="formButtons">

                {showMessage ? (<div className='help-text-div'>
                  <span className='help-text'>
                    After filling out this section, we have enough information to get you started. You may submit your property as it is now and fill the details later, or you can click below to switch to our advanced view where you may add your detailed information now.
                  </span></div>
                ) : null}

                <div>
                  <div className="page-counter"><span className='mode-label'>{modeLabel()} {currentStepIndex + 1} / {steps.length}</span></div>
                  <div className='menu-buttons'>
                    <div className="form-navigation"><div className="form-nav-btns">{!isFirstStep ? (<Button variant="contained" className='back-btn' type='button' onClick={back}>Back</Button>) : (<Button variant="contained" className='placeholder-back-btn' type='button' >Back</Button>)}
                      <Button variant="contained" className={isLastStep ? 'submit-btn' : 'next-btn'} onClick={handleStepComplete} type='submit'>{isLastStep ? "Submit" : "Next"}</Button>
                      </div></div>
                    {steps.length <= 11 && currentStepIndex === 1 ? (advancedViewBtn) : null
                    }
                    {steps.length === 11 ? (<Button variant="contained" className='basic-view-btn' type='button' onClick={() => {
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