import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";



type UserFormProps = FormDataTypes & {
updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function Amenities({
    
  beachSunLoungersProvided,
  beachTowelsCoolBagsAndBoxes,
  beachTowelsProvided,
  essentials,
  hangers,
  extraPillowsAndBlankets,
  roomDarkeningShades,
  showerGel,
  extrasBeachChair,
  extrasPaddleBoard,
  hotWaterProvided,
  maidEveryDay,
  maidOnceAWeek,
  maidTwiceAWeek,
  maidThriceAWeek,
  maidBreakfastIncluded,
  bedLinen,
  linenOnceAWeek,
  linenTwiceAWeek,
  towels,
  towelsOnceAWeek,
  towelsTwiceAWeek,
  towelsThriceAWeek,
  shampooProvided,
  carHireRecommended,
  carHireNotEssential,
  keyLocation,
  extraKeyLocation,
  linenCleaningMethod,
  safeEnhachedCleaning,
  safeCleaningDisinfection,
  safeSelfCheckInCheckOut,
  safeCommonSurfaceDisinfectantCleaning,
  safeSanitaryAssociation,
  sanitaryStandard,

  
 

    updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Amenities">
             <FormGroup>
            <div className="extra-categories">


            <div className="category-styling">
        <h3>Amenities</h3>
        
        
        <FormControlLabel control={<Checkbox size="small" checked={data.shampooProvided} onChange={handleCheckboxChange('shampooProvided')} />} label="Shampoo provided" />
        <FormControlLabel control={<Checkbox size="small" checked={data.carHireRecommended} onChange={handleCheckboxChange('carHireRecommended')} />} label="Car hire recommended" />
        <FormControlLabel control={<Checkbox size="small" checked={data.carHireNotEssential} onChange={handleCheckboxChange('carHireNotEssential')} />} label="Car hire not essential" />
        <FormControlLabel control={<Checkbox size="small" checked={data.beachSunLoungersProvided} onChange={handleCheckboxChange('beachSunLoungersProvided')} />} label="Beach sun loungers provided" />
        <FormControlLabel control={<Checkbox size="small" checked={data.beachTowelsCoolBagsAndBoxes} onChange={handleCheckboxChange('beachTowelsCoolBagsAndBoxes')} />} label="Beach towels cool bags and boxes" />
        <FormControlLabel control={<Checkbox size="small" checked={data.beachTowelsProvided} onChange={handleCheckboxChange('beachTowelsProvided')} />} label="Beach towels provided" />
        <FormControlLabel control={<Checkbox size="small" checked={data.essentials} onChange={handleCheckboxChange('essentials')} />} label="Essentials" />
        <FormControlLabel control={<Checkbox size="small" checked={data.hangers} onChange={handleCheckboxChange('hangers')} />} label="Hangers" />
        <FormControlLabel control={<Checkbox size="small" checked={data.extraPillowsAndBlankets} onChange={handleCheckboxChange('extraPillowsAndBlankets')} />} label="Extra pillows and blankets" />
        <FormControlLabel control={<Checkbox size="small" checked={data.roomDarkeningShades} onChange={handleCheckboxChange('roomDarkeningShades')} />} label="Room-darkening shades" />
        <FormControlLabel control={<Checkbox size="small" checked={data.showerGel} onChange={handleCheckboxChange('showerGel')} />} label="Shower gel" />
        <FormControlLabel control={<Checkbox size="small" checked={data.extrasBeachChair} onChange={handleCheckboxChange('extrasBeachChair')} />} label="Extras beach chair" />
        <FormControlLabel control={<Checkbox size="small" checked={data.extrasPaddleBoard} onChange={handleCheckboxChange('extrasPaddleBoard')} />} label="Extras paddle board" />
        <FormControlLabel control={<Checkbox size="small" checked={data.hotWaterProvided} onChange={handleCheckboxChange('hotWaterProvided')} />} label="Hot water provided" />
      
        </div>
          
              
        <div className="category-styling">
        <h3>Keys</h3>
        
        <TextField id="outlined-basic" size="small" variant="outlined" value={keyLocation} onChange={e => updateFields({keyLocation: e.target.value})} label="Key location" />
        <TextField id="outlined-basic" size="small" variant="outlined" value={extraKeyLocation} onChange={e => updateFields({extraKeyLocation: e.target.value})} label="Extra key location" />
        
      
        </div>

        <div className="category-styling">
        <h3>Linen</h3>
        <TextField id="outlined-basic"  variant="outlined" value={linenCleaningMethod} onChange={e => updateFields({linenCleaningMethod: e.target.value})} label="Linen cleaning method" />
        <FormControlLabel control={<Checkbox size="small" checked={data.bedLinen} onChange={handleCheckboxChange('bedLinen')} />} label="Bed linen" />
        <FormControlLabel control={<Checkbox size="small" checked={data.linenOnceAWeek} onChange={handleCheckboxChange('linenOnceAWeek')} />} label="Linen X1 a week" />
        <FormControlLabel control={<Checkbox size="small" checked={data.linenTwiceAWeek} onChange={handleCheckboxChange('linenTwiceAWeek')} />} label="Linen X2 a week" />
        </div>

        <div className="category-styling">
        <h3>Maid</h3>
        <FormControlLabel control={<Checkbox size="small" checked={data.maidEveryDay} onChange={handleCheckboxChange('maidEveryDay')} />} label="Maid every day" />
        <FormControlLabel control={<Checkbox size="small" checked={data.maidOnceAWeek} onChange={handleCheckboxChange('maidOnceAWeek')} />} label="Maid X1 a week" />
        <FormControlLabel control={<Checkbox size="small" checked={data.maidTwiceAWeek} onChange={handleCheckboxChange('maidTwiceAWeek')} />} label="Maid X2 a week" />
        <FormControlLabel control={<Checkbox size="small" checked={data.maidThriceAWeek} onChange={handleCheckboxChange('maidThriceAWeek')} />} label="Maid X3 a week" />
        <FormControlLabel control={<Checkbox size="small" checked={data.maidBreakfastIncluded} onChange={handleCheckboxChange('maidBreakfastIncluded')} />} label="Maid breakfast included" />
        <TextField id="outlined-basic" size="small"  variant="outlined" value={safeEnhachedCleaning} onChange={e => updateFields({safeEnhachedCleaning: e.target.value})} label="Safe enhached cleaning" />
        <TextField id="outlined-basic" size="small"  variant="outlined" value={safeCleaningDisinfection} onChange={e => updateFields({safeCleaningDisinfection: e.target.value})} label="Safe cleaning disinfection" />
        <TextField id="outlined-basic" size="small"  variant="outlined" value={safeSelfCheckInCheckOut} onChange={e => updateFields({safeSelfCheckInCheckOut: e.target.value})} label="Safe self check in check out" />
        <TextField id="outlined-basic" size="small"  variant="outlined" value={safeCommonSurfaceDisinfectantCleaning} onChange={e => updateFields({safeCommonSurfaceDisinfectantCleaning: e.target.value})} label="Safe common surface disinfectant cleaning" />
        </div>

        <div className="category-styling">
        <h3>Sanitation</h3>
        <TextField id="outlined-basic" size="small" variant="outlined" value={safeSanitaryAssociation} onChange={e => updateFields({safeSanitaryAssociation: e.target.value})} label="Safe sanitary association" />
        <TextField id="outlined-basic" size="small" variant="outlined" value={sanitaryStandard} onChange={e => updateFields({sanitaryStandard: e.target.value})} label="Sanitary standard" />
        </div>
        
        <div className="category-styling">
        <h3>Towels</h3>
        <FormControlLabel control={<Checkbox size="small" checked={data.towels} onChange={handleCheckboxChange('towels')} />} label="Towels" />
        <FormControlLabel control={<Checkbox size="small" checked={data.towelsOnceAWeek} onChange={handleCheckboxChange('towelsOnceAWeek')} />} label="Towels X1 a week" />
        <FormControlLabel control={<Checkbox size="small" checked={data.towelsTwiceAWeek} onChange={handleCheckboxChange('towelsTwiceAWeek')} />} label="Towels X2 a week" />
        <FormControlLabel control={<Checkbox size="small" checked={data.towelsThriceAWeek} onChange={handleCheckboxChange('towelsThriceAWeek')} />} label="Towels X3 a week" />
        </div>

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

