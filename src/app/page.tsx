"use client";
import Image from 'next/image'
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
  const [data, setData] = useState(INITIAL_DATA);
  const [isTabContainerReady, setIsTabContainerReady] = useState(false);
  const [includeDetailedSteps, setIncludeDetailedSteps] = useState(false);




  const handleFieldChange = (fieldName: any, value: any) => {
    setData({
      ...data,
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

  if (includeDetailedSteps) {
    briefSteps.push(...detailedSteps
    );
  }
  


  const currentSteps = [...briefSteps,];
  const { steps, currentStepIndex, setCurrentStepIndex, step, isFirstStep, isLastStep, back, next, handleStepComplete, completedSteps } = useMultistepForm(currentSteps);


  const addDetailedSteps = () => {
    setIncludeDetailedSteps(true);

  };

  const removeDetailedSteps = () => {
    briefSteps.pop()

  };

  function modeLabel() {
    return includeDetailedSteps ? "Advanced View" : "Basic View";
  }



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
            setIsTabContainerReady={setIsTabContainerReady} />
          <div className='page-counter'>

            <div className='form-background'>

              {step}
              <div className="formButtons">
                <div>{steps.length < 10 && currentStepIndex === 1 ? (<span className='help-text'>At this point we have enough information to get you started. You may submit your property as it is if you wish and fill the details later, or you can click below to switch to our advanced view where you can add your detailed information now. </span>) : <div style={{display: 'block' , width: 15, height: 36}}></div>
                }</div>
                <div>
                  <div className="page-counter"><span className='mode-label'>{modeLabel()}</span> {currentStepIndex + 1} / {steps.length}</div>
                  <div className='menu-buttons'>
                  {!isFirstStep ? (<Button variant="contained" type='button' onClick={back}>Back</Button>) : (null
                  )}
                  <Button variant="contained" className={isLastStep ? 'submit-btn' : ''} onClick={handleStepComplete} type='submit'>{isLastStep ? "Submit" : "Next"}</Button>
                  {steps.length <= 10 && currentStepIndex === 1 ? (<Button variant="contained" className='advanced-view-btn' type='button' onClick={addDetailedSteps}>Go to advanced view</Button>) : null
                  }
                  {steps.length ?  (<Button variant="contained" className='basic-view-btn' type='button' onClick={removeDetailedSteps}>Go to basic view</Button>) : null
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



