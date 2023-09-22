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
import Sports from '@/components/cards_content/Sports';
import AttractionsLeisure from '@/components/cards_content/AttractionsLeisure';
import Pool from '@/components/cards_content/Pool';
import Outside from '@/components/cards_content/Outside';
import Inside from '@/components/cards_content/Inside';
import Kitchen from '@/components/cards_content/Kitchen';
import Safety from '@/components/cards_content/Safety';
import BedsNBaths from '@/components/cards_content/BedsNBaths';
import RoomAmenities from '@/components/cards_content/RoomAmenities';
import { FormData } from './types/all-form-types';
import INITIAL_DATA from './variables/variables';




export default function Home() {
const [data, setData] = useState(INITIAL_DATA);

const handleFieldChange = (fieldName, value) => {
  setData({
    ...data,
    [fieldName]: value,
  });
};

function updateFields(fields: Partial<FormData>){
  setData(prev => {
    return {...prev, ...fields}
  })
}

const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm([

  <MainDescription {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <GeneralInfo {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <Location {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <Views {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <Sports {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <AttractionsLeisure {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <Pool {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <Outside {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <Inside {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <Kitchen {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <Safety {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <BedsNBaths {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <Amenities {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <RoomAmenities {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
  <ExtraInfo {...data} data={data} handleFieldChange={handleFieldChange} updateFields={updateFields} />,
])

  function onSubmit( e: FormEvent) {
    e.preventDefault()
    next()
  }

    return (<>
    <div className='msform'>
      <form className='formprime' onSubmit={onSubmit}>
        <div className='page-counter'>
        {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className='formButtons'>
          {!isFirstStep && <button type='button' onClick={back}>Back</button>}
          <button type='submit'>{isLastStep ? "Submit" : "Next"}</button>
        </div>
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
