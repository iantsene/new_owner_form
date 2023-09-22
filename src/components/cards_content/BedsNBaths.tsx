import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormData } from "@/app/types/all-form-types";



type UserFormProps = FormData & {
updateFields: (fields: Partial<FormData>) => void

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

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Bedrooms & Bathrooms">
             <FormGroup>
            <div className="extra-categories">
           
          
              
        <div className="category-styling">
        <h3>Bedrooms & Bathrooms</h3>
        <TextField id="outlined-basic"  variant="outlined" value={bedroomOneType} onChange={e => updateFields({bedroomOneType: e.target.value})} label="Bedroom 1 Type" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomTwoType} onChange={e => updateFields({bedroomTwoType : e.target.value})} label="Bedroom 2 Type" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomThreeType} onChange={e => updateFields({bedroomThreeType : e.target.value})} label="Bedroom 3 Type" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomFourType} onChange={e => updateFields({bedroomFourType: e.target.value})} label="Bedroom 4 Type" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomFiveType} onChange={e => updateFields({bedroomFiveType: e.target.value})} label="Bedroom 5 Type" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomSixType} onChange={e => updateFields({bedroomSixType: e.target.value})} label="Bedroom 6 Type" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomSevenType} onChange={e => updateFields({bedroomSevenType: e.target.value})} label="Bedroom 7 Type" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomOne} onChange={e => updateFields({bathroomOne: e.target.value})} label="Bathroom 1" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomTwo} onChange={e => updateFields({bathroomTwo: e.target.value})} label="Bathroom 2" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomThree} onChange={e => updateFields({bathroomThree: e.target.value})} label="Bathroom 3" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomFour} onChange={e => updateFields({bathroomFour: e.target.value})} label="Bathroom 4" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomFive} onChange={e => updateFields({bathroomFive: e.target.value})} label="Bathroom 5" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomSix} onChange={e => updateFields({bathroomSix: e.target.value})} label="Bathroom 6" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomSeven} onChange={e => updateFields({bathroomSeven: e.target.value})} label="Bathroom 7" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomOneHeating} onChange={e => updateFields({bedroomOneHeating: e.target.value})} label="Bedroom 1 Heating" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomTwoHeating} onChange={e => updateFields({bedroomTwoHeating: e.target.value})} label="Bedroom 2 Heating" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomThreeHeating} onChange={e => updateFields({bedroomThreeHeating: e.target.value})} label="Bedroom 3 Heating" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomFourHeating} onChange={e => updateFields({bedroomFourHeating: e.target.value})} label="Bedroom 4 Heating" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomFiveHeating} onChange={e => updateFields({bedroomFiveHeating: e.target.value})} label="Bedroom 5 Heating" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomSixHeating} onChange={e => updateFields({bedroomSixHeating: e.target.value})} label="Bedroom 6 Heating" />
        <TextField id="outlined-basic"  variant="outlined" value={bedroomSevenHeating} onChange={e => updateFields({bedroomSevenHeating: e.target.value})} label="Bedroom 7 Heating" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomsCommonOne} onChange={e => updateFields({bathroomsCommonOne: e.target.value})} label="Bathrooms Common 1" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomsCommonTwo} onChange={e => updateFields({bathroomsCommonTwo: e.target.value})} label="Bathrooms Common 2" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomsCommonThree} onChange={e => updateFields({bathroomsCommonThree: e.target.value})} label="Bathrooms Common 3" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomsCommonFour} onChange={e => updateFields({bathroomsCommonFour: e.target.value})} label="Bathrooms Common 4" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomsCommonFive} onChange={e => updateFields({bathroomsCommonFive: e.target.value})} label="Bathrooms Common 5" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomsCommonSix} onChange={e => updateFields({bathroomsCommonSix: e.target.value})} label="Bathrooms Common 6" />
        <TextField id="outlined-basic"  variant="outlined" value={bathroomsCommonSeven} onChange={e => updateFields({bathroomsCommonSeven: e.target.value})} label="Bathrooms Common 7" />
        <TextField id="outlined-basic"  variant="outlined" value={commonAreaBedOne} onChange={e => updateFields({commonAreaBedOne: e.target.value})} label="Common area bed 1" />
        <TextField id="outlined-basic"  variant="outlined" value={commonAreaBedTwo} onChange={e => updateFields({commonAreaBedTwo: e.target.value})} label="Common area bed 2" />
        <TextField id="outlined-basic"  variant="outlined" value={cot} onChange={e => updateFields({cot: e.target.value})} label="Cot" />
        <TextField id="outlined-basic"  variant="outlined" value={enSuiteBathroomOne} onChange={e => updateFields({enSuiteBathroomOne: e.target.value})} label="En-suite bathroom 1" />
       
        
        <FormControlLabel control={<Checkbox checked={data.extrasBabyBath} onChange={handleSelfCheckInChange('extrasBabyBath')} />} label="Extras Baby bath" />
        <FormControlLabel control={<Checkbox checked={data.extrasBabyPotty} onChange={handleSelfCheckInChange('extrasBabyPotty')} />} label="Extras Baby potty" />
        <FormControlLabel control={<Checkbox checked={data.extrasChangingMatt} onChange={handleSelfCheckInChange('extrasChangingMatt')} />} label="Extras Changing matt" />
        <FormControlLabel control={<Checkbox checked={data.extrasBabyLinen} onChange={handleSelfCheckInChange('extrasBabyLinen')} />} label="Extras Baby linen" />
        <FormControlLabel control={<Checkbox checked={data.extrasBabyWashingGel} onChange={handleSelfCheckInChange('extrasBabyWashingGel')} />} label="Extras Baby washing gel" />
        <FormControlLabel control={<Checkbox checked={data.extrasPortBebe} onChange={handleSelfCheckInChange('extrasPortBebe')} />} label="Extras Port bebe" />
        <FormControlLabel control={<Checkbox checked={data.extrasBabyListeningDevice} onChange={handleSelfCheckInChange('extrasBabyListeningDevice')} />} label="Extras Baby listening device" />
        <FormControlLabel control={<Checkbox checked={data.extrasBabyChangingTable} onChange={handleSelfCheckInChange('extrasBabyChangingTable')} />} label="Extras Baby changing table" />
        <FormControlLabel control={<Checkbox checked={data.extrasChildSafetyGate} onChange={handleSelfCheckInChange('extrasChildSafetyGate')} />} label="Extras child safety gate" />
        <FormControlLabel control={<Checkbox checked={data.cleaningProducts} onChange={handleSelfCheckInChange('cleaningProducts')} />} label="Cleaning products" />
       
        
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

