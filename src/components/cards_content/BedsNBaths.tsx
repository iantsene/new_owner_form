import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import CustomTextField from "../reuseable-components/CustomTextField";



type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function BedsNBaths({

  bedroomOneType,
  bedroomTwoType,
  bedroomThreeType,
  bedroomFourType,
  bedroomFiveType,
  bedroomSixType,
  bedroomSevenType,
  bathroomOne,
  bathroomTwo,
  bathroomThree,
  bathroomFour,
  bathroomFive,
  bathroomSix,
  bathroomSeven,
  bedroomOneHeating,
  bedroomTwoHeating,
  bedroomThreeHeating,
  bedroomFourHeating,
  bedroomFiveHeating,
  bedroomSixHeating,
  bedroomSevenHeating,
  bathroomsCommonOne,
  bathroomsCommonTwo,
  bathroomsCommonThree,
  bathroomsCommonFour,
  bathroomsCommonFive,
  bathroomsCommonSix,
  bathroomsCommonSeven,
  commonAreaBedOne,
  commonAreaBedTwo,
  cot,
  enSuiteBathroomOne,
  extrasBabyBath,
  extrasBabyPotty,
  extrasChangingMat,
  extrasBabyLinen,
  extrasBabyWashingGel,
  extrasPortBebe,
  extrasBabyListeningDevice,
  extrasBabyChangingTable,
  extrasChildSafetyGate,
  cleaningProducts,



  updateFields, data, handleFieldChange }: UserFormProps) {

  const handleCheckboxChange = (fieldName: string) => (e) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  return (
    <FormWrapper title="Bedrooms & Bathrooms">
      <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error!
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
      <FormGroup>
        <div className="extra-categories">
          <div className="media-query-custom-breakpoint">
          <div className="beds">

            <div className="beds-category main-category">
              <h3>Bedrooms</h3>
              <ul className="media-query-custom-breakpoint">
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 1 Type:</span><CustomTextField label="Bedroom 1 Type" type="text" value={bedroomOneType} onChange={e => updateFields({ bedroomOneType: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 2 Type:</span><CustomTextField label="Bedroom 2 Type" type="text" value={bedroomTwoType} onChange={e => updateFields({ bedroomTwoType: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 3 Type:</span><CustomTextField label="Bedroom 3 Type" type="text" value={bedroomThreeType} onChange={e => updateFields({ bedroomThreeType: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 4 Type:</span><CustomTextField label="Bedroom 4 Type" type="text" value={bedroomFourType} onChange={e => updateFields({ bedroomFourType: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 5 Type:</span><CustomTextField label="Bedroom 5 Type" type="text" value={bedroomFiveType} onChange={e => updateFields({ bedroomFiveType: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 6 Type:</span><CustomTextField label="Bedroom 6 Type" type="text" value={bedroomSixType} onChange={e => updateFields({ bedroomSixType: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 7 Type:</span><CustomTextField label="Bedroom 7 Type" type="text" value={bedroomSevenType} onChange={e => updateFields({ bedroomSevenType: e })}  ></CustomTextField></div></li>
              </ul>
            </div>

            <div className="beds-heating-cat main-category">
              <h3>Bedroom Heating</h3>
              <ul className="media-query-custom-breakpoint">
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 1 Heating:</span><CustomTextField label="Bedroom 1 Heating" type="text" value={bedroomOneHeating} onChange={e => updateFields({ bedroomOneHeating: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 2 Heating:</span><CustomTextField label="Bedroom 2 Heating" type="text" value={bedroomTwoHeating} onChange={e => updateFields({ bedroomTwoHeating: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 3 Heating:</span><CustomTextField label="Bedroom 3 Heating" type="text" value={bedroomThreeHeating} onChange={e => updateFields({ bedroomThreeHeating: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 4 Heating:</span><CustomTextField label="Bedroom 4 Heating" type="text" value={bedroomFourHeating} onChange={e => updateFields({ bedroomFourHeating: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 5 Heating:</span><CustomTextField label="Bedroom 5 Heating" type="text" value={bedroomFiveHeating} onChange={e => updateFields({ bedroomFiveHeating: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 6 Heating:</span><CustomTextField label="Bedroom 6 Heating" type="text" value={bedroomSixHeating} onChange={e => updateFields({ bedroomSixHeating: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bedroom 7 Heating:</span><CustomTextField label="Bedroom 7 Heating" type="text" value={bedroomSevenHeating} onChange={e => updateFields({ bedroomSevenHeating: e })}  ></CustomTextField></div></li>
              </ul>
            </div>

          </div>
          <div className="baths">
            <div className="baths-category main-category">

              <h3>Bathrooms</h3>
              <ul className="media-query-custom-breakpoint">
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 1:</span><CustomTextField label="Bathroom 1" type="text" value={bathroomOne} onChange={e => updateFields({ bathroomOne: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 2:</span><CustomTextField label="Bathroom 2" type="text" value={bathroomTwo} onChange={e => updateFields({ bathroomTwo: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 3:</span><CustomTextField label="Bathroom 3" type="text" value={bathroomThree} onChange={e => updateFields({ bathroomThree: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 4:</span><CustomTextField label="Bathroom 4" type="text" value={bathroomFour} onChange={e => updateFields({ bathroomFour: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 5:</span><CustomTextField label="Bathroom 5" type="text" value={bathroomFive} onChange={e => updateFields({ bathroomFive: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 6:</span><CustomTextField label="Bathroom 6" type="text" value={bathroomSix} onChange={e => updateFields({ bathroomSix: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathroom 7:</span><CustomTextField label="Bathroom 7" type="text" value={bathroomSeven} onChange={e => updateFields({ bathroomSeven: e })}  ></CustomTextField></div></li>
              </ul>
            </div>
            <div className="common-baths-cat main-category">
              <h3>Common bathrooms</h3>
              <ul className="media-query-custom-breakpoint">
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 1:</span><CustomTextField label="Bathrooms Common 1" type="text" value={bathroomsCommonOne} onChange={e => updateFields({ bathroomsCommonOne: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 2:</span><CustomTextField label="Bathrooms Common 2" type="text" value={bathroomsCommonTwo} onChange={e => updateFields({ bathroomsCommonTwo: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 3:</span><CustomTextField label="Bathrooms Common 3" type="text" value={bathroomsCommonThree} onChange={e => updateFields({ bathroomsCommonThree: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 4:</span><CustomTextField label="Bathrooms Common 4" type="text" value={bathroomsCommonFour} onChange={e => updateFields({ bathroomsCommonFour: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 5:</span><CustomTextField label="Bathrooms Common 5" type="text" value={bathroomsCommonFive} onChange={e => updateFields({ bathroomsCommonFive: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 6:</span><CustomTextField label="Bathrooms Common 6" type="text" value={bathroomsCommonSix} onChange={e => updateFields({ bathroomsCommonSix: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Bathrooms Common 7:</span><CustomTextField label="Bathrooms Common 7" type="text" value={bathroomsCommonSeven} onChange={e => updateFields({ bathroomsCommonSeven: e })}  ></CustomTextField></div></li>
                <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>En-suite bathroom 1:</span><CustomTextField label="En-suite bathroom 1" type="text" value={enSuiteBathroomOne} onChange={e => updateFields({ enSuiteBathroomOne: e })}  ></CustomTextField></div></li>
              </ul>
            </div>

          </div>

          </div>
        </div>
        <div className=" bedsnbaths-extras-cat main-category">
          <h3>Extras</h3>
          <ul className="multi-options-grid">
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={extrasBabyBath} onChange={handleCheckboxChange('extrasBabyBath')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Baby bath</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={extrasBabyPotty} onChange={handleCheckboxChange('extrasBabyPotty')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Baby potty</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={extrasBabyChangingTable} onChange={handleCheckboxChange('extrasBabyChangingTable')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Baby changing table</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={extrasBabyLinen} onChange={handleCheckboxChange('extrasBabyLinen')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Baby linen</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={extrasBabyWashingGel} onChange={handleCheckboxChange('extrasBabyWashingGel')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Baby washing gel</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={extrasPortBebe} onChange={handleCheckboxChange('extrasPortBebe')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Port bebe</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={extrasBabyListeningDevice} onChange={handleCheckboxChange('extrasBabyListeningDevice')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Baby listening device</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={extrasChangingMat} onChange={handleCheckboxChange('extrasChangingMat')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Changing mat</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={extrasChildSafetyGate} onChange={handleCheckboxChange('extrasChildSafetyGate')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Child safety gate</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={cleaningProducts} onChange={handleCheckboxChange('cleaningProducts')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Cleaning products</span></div>} /></li>
          </ul>


          <div className="common-area-beds-cat main-category">
            <h3>Common area beds</h3>
            <ul className="duo-options-grid">
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Common area bed 1:</span><CustomTextField label="Common area bed 1" type="text" value={commonAreaBedOne} onChange={e => updateFields({ commonAreaBedOne: e })}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Common area bed 2:</span><CustomTextField label="Common area bed 2" type="text" value={commonAreaBedTwo} onChange={e => updateFields({ commonAreaBedTwo: e })}  ></CustomTextField></div></li>
              <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Cot:</span><CustomTextField label="Cot" type="text" value={cot} onChange={e => updateFields({ cot: e })}  ></CustomTextField></div></li>
            </ul>
          </div>
        </div>




      </FormGroup>
    </FormWrapper>
  )
}



