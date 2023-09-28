import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";



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
  extrasChangingMatt,
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
      <FormGroup>
        <div className="extra-categories">
          <div className="category-styling">
          <div className="main-category"> 
          <h3>Bedrooms and Bathrooms details</h3>
          </div>
              <div className="bedrooms">
              <div className="bedsnbaths-category"> 
                <ul>
                <h4>Bedroom types</h4>
                <li><TextField size="small" variant="standard" value={bedroomOneType} onChange={e => updateFields({ bedroomOneType: e.target.value })} label="Bedroom 1 Type" /></li>
                <li><TextField size="small" variant="standard" value={bedroomTwoType} onChange={e => updateFields({ bedroomTwoType: e.target.value })} label="Bedroom 2 Type" /></li>
                <li><TextField size="small" variant="standard" value={bedroomThreeType} onChange={e => updateFields({ bedroomThreeType: e.target.value })} label="Bedroom 3 Type" /></li>
                <li><TextField size="small" variant="standard" value={bedroomFourType} onChange={e => updateFields({ bedroomFourType: e.target.value })} label="Bedroom 4 Type" /></li>
                <li><TextField size="small" variant="standard" value={bedroomFiveType} onChange={e => updateFields({ bedroomFiveType: e.target.value })} label="Bedroom 5 Type" /></li>
                <li><TextField size="small" variant="standard" value={bedroomSixType} onChange={e => updateFields({ bedroomSixType: e.target.value })} label="Bedroom 6 Type" /></li>
                <li><TextField size="small" variant="standard" value={bedroomSevenType} onChange={e => updateFields({ bedroomSevenType: e.target.value })} label="Bedroom 7 Type" /></li>
            </ul>
                </div>
                <div className="bedsnbaths-category"> 
            <ul>
              <h4>Bedroom heating</h4>
              <li><TextField size="small" variant="standard" value={bedroomOneHeating} onChange={e => updateFields({ bedroomOneHeating: e.target.value })} label="Bedroom 1 Heating" /></li>
              <li><TextField size="small" variant="standard" value={bedroomTwoHeating} onChange={e => updateFields({ bedroomTwoHeating: e.target.value })} label="Bedroom 2 Heating" /></li>
              <li><TextField size="small" variant="standard" value={bedroomThreeHeating} onChange={e => updateFields({ bedroomThreeHeating: e.target.value })} label="Bedroom 3 Heating" /></li>
              <li><TextField size="small" variant="standard" value={bedroomFourHeating} onChange={e => updateFields({ bedroomFourHeating: e.target.value })} label="Bedroom 4 Heating" /></li>
              <li><TextField size="small" variant="standard" value={bedroomFiveHeating} onChange={e => updateFields({ bedroomFiveHeating: e.target.value })} label="Bedroom 5 Heating" /></li>
              <li><TextField size="small" variant="standard" value={bedroomSixHeating} onChange={e => updateFields({ bedroomSixHeating: e.target.value })} label="Bedroom 6 Heating" /></li>
              <li><TextField size="small" variant="standard" value={bedroomSevenHeating} onChange={e => updateFields({ bedroomSevenHeating: e.target.value })} label="Bedroom 7 Heating" /></li>
            </ul>
              </div>
            <div className="bathrooms">
            <div className="bedsnbaths-category"> 
            <ul>
              <h4>Bathrooms</h4>
              <li><li><TextField size="small" variant="standard" value={bathroomOne} onChange={e => updateFields({ bathroomOne: e.target.value })} label="Bathroom 1" /></li></li>
              <li><li><TextField size="small" variant="standard" value={bathroomTwo} onChange={e => updateFields({ bathroomTwo: e.target.value })} label="Bathroom 2" /></li></li>
              <li><li><TextField size="small" variant="standard" value={bathroomThree} onChange={e => updateFields({ bathroomThree: e.target.value })} label="Bathroom 3" /></li></li>
              <li><li><TextField size="small" variant="standard" value={bathroomFour} onChange={e => updateFields({ bathroomFour: e.target.value })} label="Bathroom 4" /></li></li>
              <li><li><TextField size="small" variant="standard" value={bathroomFive} onChange={e => updateFields({ bathroomFive: e.target.value })} label="Bathroom 5" /></li></li>
              <li><li><TextField size="small" variant="standard" value={bathroomSix} onChange={e => updateFields({ bathroomSix: e.target.value })} label="Bathroom 6" /></li></li>
              <li><li><TextField size="small" variant="standard" value={bathroomSeven} onChange={e => updateFields({ bathroomSeven: e.target.value })} label="Bathroom 7" /></li></li>
            </ul>
              </div>
              <div className="bedsnbaths-category"> 
            <ul>
              <h4>Common bathrooms</h4>
              <li><TextField size="small" variant="standard" value={bathroomsCommonOne} onChange={e => updateFields({ bathroomsCommonOne: e.target.value })} label="Bathrooms Common 1" /></li>
              <li><TextField size="small" variant="standard" value={bathroomsCommonTwo} onChange={e => updateFields({ bathroomsCommonTwo: e.target.value })} label="Bathrooms Common 2" /></li>
              <li><TextField size="small" variant="standard" value={bathroomsCommonThree} onChange={e => updateFields({ bathroomsCommonThree: e.target.value })} label="Bathrooms Common 3" /></li>
              <li><TextField size="small" variant="standard" value={bathroomsCommonFour} onChange={e => updateFields({ bathroomsCommonFour: e.target.value })} label="Bathrooms Common 4" /></li>
              <li><TextField size="small" variant="standard" value={bathroomsCommonFive} onChange={e => updateFields({ bathroomsCommonFive: e.target.value })} label="Bathrooms Common 5" /></li>
              <li><TextField size="small" variant="standard" value={bathroomsCommonSix} onChange={e => updateFields({ bathroomsCommonSix: e.target.value })} label="Bathrooms Common 6" /></li>
              <li><TextField size="small" variant="standard" value={bathroomsCommonSeven} onChange={e => updateFields({ bathroomsCommonSeven: e.target.value })} label="Bathrooms Common 7" /></li>
              <li><TextField size="small" variant="standard" value={enSuiteBathroomOne} onChange={e => updateFields({ enSuiteBathroomOne: e.target.value })} label="En-suite bathroom 1" /></li>
            </ul>
            </div>
            </div>

          </div>

          <div className="main-category"> 
            <h3>Extras</h3>
            <ul className="multi-options-grid">
            <li><FormControlLabel control={<Checkbox size="small" checked={data.extrasBabyBath} onChange={handleCheckboxChange('extrasBabyBath')} />} label="Baby bath" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.extrasBabyPotty} onChange={handleCheckboxChange('extrasBabyPotty')} />} label="Baby potty" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.extrasChangingMatt} onChange={handleCheckboxChange('extrasChangingMatt')} />} label="Changing matt" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.extrasBabyLinen} onChange={handleCheckboxChange('extrasBabyLinen')} />} label="Baby linen" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.extrasBabyWashingGel} onChange={handleCheckboxChange('extrasBabyWashingGel')} />} label="Baby washing gel" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.extrasPortBebe} onChange={handleCheckboxChange('extrasPortBebe')} />} label="Port bebe" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.extrasBabyListeningDevice} onChange={handleCheckboxChange('extrasBabyListeningDevice')} />} label="Baby listening device" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.extrasBabyChangingTable} onChange={handleCheckboxChange('extrasBabyChangingTable')} />} label="Baby changing table" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.extrasChildSafetyGate} onChange={handleCheckboxChange('extrasChildSafetyGate')} />} label="Child safety gate" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.cleaningProducts} onChange={handleCheckboxChange('cleaningProducts')} />} label="Cleaning products" /></li>
            </ul>
            </div>

            <div className="main-category"> 
            <ul>
              <h3>Common area beds</h3>
              <li><TextField size="small" variant="standard" value={commonAreaBedOne} onChange={e => updateFields({ commonAreaBedOne: e.target.value })} label="Common area bed 1" /></li>
              <li><TextField size="small" variant="standard" value={commonAreaBedTwo} onChange={e => updateFields({ commonAreaBedTwo: e.target.value })} label="Common area bed 2" /></li>
              <li><TextField size="small" variant="standard" value={cot} onChange={e => updateFields({ cot: e.target.value })} label="Cot" /></li>
            </ul>
            </div>




            


            
            
           






          </div>
        </div>
      </FormGroup>
    </FormWrapper>
  )
}



