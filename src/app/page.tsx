"use client";
import Image from 'next/image'
import useMultistepForm from './useMultistepForm'
import Amenities from '@/components/Amenities';
import Area from '@/components/Area';

export default function Home() {
const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm([<Amenities />, <Area />
])

  


    return (<>
    <div className='msform'>
      <form>
        <div className='formContent'>
        {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className='formButtons'>
          {!isFirstStep && <button type='button' onClick={back}>Back</button>}
          <button type='button' onClick={next}>{isLastStep ? "Submit" : "Next"}</button>
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
