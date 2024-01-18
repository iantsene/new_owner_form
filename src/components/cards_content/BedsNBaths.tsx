import { FormGroup } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import CustomTextField from "../reuseable-components/CustomTextField";
import React from "react";
import BedroomCard from "../reuseable-components/BedroomCard";
import { useFormData } from "@/app/contexts/form";
import CustomCheckbox from "../reuseable-components/CustomCheckbox";



export default function BedsNBaths() {

  const { value, setValue, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange(fieldName, e.target.checked);
  };


  const bedrooms = [ 
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 1:</span><CustomTextField label="Bedroom 1" type="text" value={value.bedroomOne} onChange={e => setValue({ bedroomOne: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 2:</span><CustomTextField label="Bedroom 2" type="text" value={value.bedroomTwo} onChange={e => setValue({ bedroomTwo: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 3:</span><CustomTextField label="Bedroom 3" type="text" value={value.bedroomThree} onChange={e => setValue({ bedroomThree: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 4:</span><CustomTextField label="Bedroom 4" type="text" value={value.bedroomFour} onChange={e => setValue({ bedroomFour: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 5:</span><CustomTextField label="Bedroom 5" type="text" value={value.bedroomFive} onChange={e => setValue({ bedroomFive: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 6:</span><CustomTextField label="Bedroom 6" type="text" value={value.bedroomSix} onChange={e => setValue({ bedroomSix: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 7:</span><CustomTextField label="Bedroom 7" type="text" value={value.bedroomSeven} onChange={e => setValue({ bedroomSeven: e })}  ></CustomTextField></div></li>,
  ]
  
  const bathrooms = [
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 1:</span><CustomTextField label="Bathroom 1" type="text" value={value.bathroomOne} onChange={e => setValue({ bathroomOne: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 2:</span><CustomTextField label="Bathroom 2" type="text" value={value.bathroomTwo} onChange={e => setValue({ bathroomTwo: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 3:</span><CustomTextField label="Bathroom 3" type="text" value={value.bathroomThree} onChange={e => setValue({ bathroomThree: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 4:</span><CustomTextField label="Bathroom 4" type="text" value={value.bathroomFour} onChange={e => setValue({ bathroomFour: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 5:</span><CustomTextField label="Bathroom 5" type="text" value={value.bathroomFive} onChange={e => setValue({ bathroomFive: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 6:</span><CustomTextField label="Bathroom 6" type="text" value={value.bathroomSix} onChange={e => setValue({ bathroomSix: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 7:</span><CustomTextField label="Bathroom 7" type="text" value={value.bathroomSeven} onChange={e => setValue({ bathroomSeven: e })}  ></CustomTextField></div></li>,
  ]
  
  const commonBathrooms = [
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 1:</span><CustomTextField label="Bathrooms Common 1" type="text" value={value.bathroomsCommonOne} onChange={e => setValue({ bathroomsCommonOne: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 2:</span><CustomTextField label="Bathrooms Common 2" type="text" value={value.bathroomsCommonTwo} onChange={e => setValue({ bathroomsCommonTwo: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 3:</span><CustomTextField label="Bathrooms Common 3" type="text" value={value.bathroomsCommonThree} onChange={e => setValue({ bathroomsCommonThree: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 4:</span><CustomTextField label="Bathrooms Common 4" type="text" value={value.bathroomsCommonFour} onChange={e => setValue({ bathroomsCommonFour: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 5:</span><CustomTextField label="Bathrooms Common 5" type="text" value={value.bathroomsCommonFive} onChange={e => setValue({ bathroomsCommonFive: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 6:</span><CustomTextField label="Bathrooms Common 6" type="text" value={value.bathroomsCommonSix} onChange={e => setValue({ bathroomsCommonSix: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 7:</span><CustomTextField label="Bathrooms Common 7" type="text" value={value.bathroomsCommonSeven} onChange={e => setValue({ bathroomsCommonSeven: e })}  ></CustomTextField></div></li>,
  ]
  
  const bedroomHeating = [
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 1 Heating:</span><CustomTextField label="Bedroom 1 Heating" type="text" value={value.bedroomOneHeating} onChange={e => setValue({ bedroomOneHeating: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 2 Heating:</span><CustomTextField label="Bedroom 2 Heating" type="text" value={value.bedroomTwoHeating} onChange={e => setValue({ bedroomTwoHeating: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 3 Heating:</span><CustomTextField label="Bedroom 3 Heating" type="text" value={value.bedroomThreeHeating} onChange={e => setValue({ bedroomThreeHeating: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 4 Heating:</span><CustomTextField label="Bedroom 4 Heating" type="text" value={value.bedroomFourHeating} onChange={e => setValue({ bedroomFourHeating: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 5 Heating:</span><CustomTextField label="Bedroom 5 Heating" type="text" value={value.bedroomFiveHeating} onChange={e => setValue({ bedroomFiveHeating: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 6 Heating:</span><CustomTextField label="Bedroom 6 Heating" type="text" value={value.bedroomSixHeating} onChange={e => setValue({ bedroomSixHeating: e })}  ></CustomTextField></div></li>,
    <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 7 Heating:</span><CustomTextField label="Bedroom 7 Heating" type="text" value={value.bedroomSevenHeating} onChange={e => setValue({ bedroomSevenHeating: e })}  ></CustomTextField></div></li>,
  ]
  
  const renderedBedrooms = bedrooms.slice(0, value.bedroomNumber).map((bedroomElement, index) => (React.cloneElement(bedroomElement, { key: `bedroom_${index + 1}` })));
  const renderedBathrooms = bathrooms.slice(0, value.bathroomNumber).map((bathroomElement, index) => (React.cloneElement(bathroomElement, { key: `bathroom_${index + 1}` })));;
  const renderedCommonBathrooms = commonBathrooms.slice(0, value.bathroomNumber).map((bathroomElement, index) => (React.cloneElement(bathroomElement, { key: `bathroom_${index + 1}` })));;
  const renderedBedroomHeating = bedroomHeating.slice(0, value.bedroomNumber).map((bedroomElement, index) => (React.cloneElement(bedroomElement, { key: `bedroom_${index + 1}` })));;


  return (
    <FormWrapper title="Bedrooms & Bathrooms">

      {value.bedrooms.map((bedroom, index) => (
        <BedroomCard
          key={index}
          index={index}
          bedroom={bedroom}
          onUpdate={newBedroom => setValue({
            bedrooms: value.bedrooms.with(index, newBedroom)
          })}
        />
      ))}


    
      <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error!
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
        <FormGroup>
        <div className="extra-categories">
          <div className="media-query-custom-breakpoint">

            <div className="beds-category main-category">
              <h3>Bedrooms</h3>
              <ul className="media-query-custom-breakpoint">
               {renderedBedrooms}
              </ul>
            </div>

            <div className="beds-heating-cat main-category">
              <h3>Bedroom Heating</h3>
              <ul className="media-query-custom-breakpoint">
              {renderedBedroomHeating}
              </ul>
            </div>

            <div className="baths-category main-category">
              <h3>Bathrooms</h3>
              <ul className="media-query-custom-breakpoint">
              {renderedBathrooms}
              </ul>
            </div>
            <div className="common-baths-cat main-category">
              <h3>Common bathrooms</h3>
              <ul className="media-query-custom-breakpoint">
              {renderedCommonBathrooms}
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>En-suite bathroom 1:</span><CustomTextField label="En-suite bathroom 1" type="text" value={value.enSuiteBathroomOne} onChange={e => setValue({ enSuiteBathroomOne: e })}  ></CustomTextField></div></li>            
              </ul>
            </div>
          </div>
        </div>

        <div className=" bedsnbaths-extras-cat main-category">
          <h3>Extras</h3>
          <ul className="multi-options-grid">
          <CustomCheckbox label="Baby listening device" value={value.extrasBabyListeningDevice} onChange={handleCheckboxChange('extrasBabyListeningDevice')} />
          <CustomCheckbox label="Baby potty" value={value.extrasBabyPotty} onChange={handleCheckboxChange('extrasBabyPotty')} />
          <CustomCheckbox label="Baby changing table" value={value.extrasBabyChangingTable} onChange={handleCheckboxChange('extrasBabyChangingTable')} />
          <CustomCheckbox label="Baby linen" value={value.extrasBabyLinen} onChange={handleCheckboxChange('extrasBabyLinen')} />
          <CustomCheckbox label="Baby washing gel" value={value.extrasBabyWashingGel} onChange={handleCheckboxChange('extrasBabyWashingGel')} />
          <CustomCheckbox label="Port bebe" value={value.extrasPortBebe} onChange={handleCheckboxChange('extrasPortBebe')} />
          <CustomCheckbox label="Cleaning products" value={value.cleaningProducts} onChange={handleCheckboxChange('cleaningProducts')} />
          <CustomCheckbox label="Baby bath" value={value.extrasBabyBath} onChange={handleCheckboxChange('extrasBabyBath')} />
          <CustomCheckbox label="Child safety gate" value={value.extrasChildSafetyGate} onChange={handleCheckboxChange('extrasChildSafetyGate')} />
          <CustomCheckbox label="Changing mat" value={value.extrasChangingMat} onChange={handleCheckboxChange('extrasChangingMat')} />
          </ul>


          <div className="common-area-beds-cat main-category">
            <h3>Common area beds</h3>
            <ul className="duo-options-grid">
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Common area bed 1:</span><CustomTextField label="Common area bed 1" type="text" value={value.commonAreaBedOne} onChange={e => setValue({ commonAreaBedOne: e })}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Common area bed 2:</span><CustomTextField label="Common area bed 2" type="text" value={value.commonAreaBedTwo} onChange={e => setValue({ commonAreaBedTwo: e })}  ></CustomTextField></div></li>
            </ul>
          </div>
        </div>




      </FormGroup>
    </FormWrapper >
  )
}



