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



export default function Home() {
  const [data, setData] = useState(INITIAL_DATA);
  const [isTabContainerReady, setIsTabContainerReady] = useState(false);
  

  const handleFieldChange = (fieldName, value) => {
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
      // Check if this is the first "Next" button click
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





  const { steps, currentStepIndex, setCurrentStepIndex, step, isFirstStep, isLastStep, back, next, handleStepComplete, completedSteps, } = useMultistepForm([

    <MainDescription {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(0)} />,
    <GeneralInfo {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(1)} />,
    <Location {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(2)} />,
    <Views {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(3)} />,
    <Pool {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(4)} />,
    <Outside {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(5)} />,
    <Inside {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(6)} />,
    <Kitchen {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(7)} />,
    <Safety {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(8)} />,
    <BedsNBaths {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(9)} />,
    <Amenities {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(10)} />,
    <RoomAmenities {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(11)}/>,
    <ExtraInfo {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} onComplete={() => handleStepComplete(12)} />,

  ])











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
              <div className='formButtons'>

                <div className="page-counter"> {currentStepIndex + 1} / {steps.length}</div>
                {!isFirstStep ? (<Button variant="contained" type='button' onClick={back}>Back</Button>) : (<div style={{ width: '71.73px', height: '36.5px' }}></div>
                )}
                <Button variant="contained" onClick={handleStepComplete} type='submit'>{isLastStep ? "Submit" : "Next"}</Button>
              </div>

            </div>

          </div>
        </Paper>
      </form>
    </div>
  </>
  )
}


























// import TabView from '@/components/TabView'
// import villaFeatures from './features';




// const villaCategories = [
// {name: "Extra Website Info", content: villaFeatures.extraWebsiteInformation},
// {name: "General Info", content: villaFeatures.extraWebsiteInformation},
// {name: "Main Description", content: villaFeatures.extraWebsiteInformation},
// {name: "Location", content: villaFeatures.extraWebsiteInformation},
// {name: "Area", content: villaFeatures.extraWebsiteInformation},
// {name: "Sports", content: villaFeatures.extraWebsiteInformation},
// {name: "Attractions & Leisure", content: villaFeatures.extraWebsiteInformation},
// {name: "Pool", content: villaFeatures.extraWebsiteInformation},
// {name: "Outside", content: villaFeatures.extraWebsiteInformation},
// {name: "Inside", content: villaFeatures.extraWebsiteInformation},
// {name: "Kitchen", content: villaFeatures.extraWebsiteInformation},
// {name: "Safety", content: villaFeatures.extraWebsiteInformation},
// {name: "Bedrooms & Bathrooms", content: villaFeatures.extraWebsiteInformation},
// {name: "Amenities", content: villaFeatures.extraWebsiteInformation},
// {name: "Room Amenities", content: villaFeatures.extraWebsiteInformation} ];
// <TabView title={<h1 className='formTitle'>Villa Categories</h1>}
//         tabs={[villaCategories]} />
