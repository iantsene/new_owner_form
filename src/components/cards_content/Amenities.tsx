import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormData } from "@/app/types/all-form-types";



type UserFormProps = FormData & {
updateFields: (fields: Partial<FormData>) => void

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

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Amenities">
             <FormGroup>
            <div className="extra-categories">


            <div className="category-styling">
        <h3>Amenities</h3>
        
        
        <FormControlLabel control={<Checkbox checked={data.shampooProvided} onChange={handleSelfCheckInChange('shampooProvided')} />} label="Shampoo provided" />
        <FormControlLabel control={<Checkbox checked={data.carHireRecommended} onChange={handleSelfCheckInChange('carHireRecommended')} />} label="Car hire recommended" />
        <FormControlLabel control={<Checkbox checked={data.carHireNotEssential} onChange={handleSelfCheckInChange('carHireNotEssential')} />} label="Car hire not essential" />
        <FormControlLabel control={<Checkbox checked={data.beachSunLoungersProvided} onChange={handleSelfCheckInChange('beachSunLoungersProvided')} />} label="Beach sun loungers provided" />
        <FormControlLabel control={<Checkbox checked={data.beachTowelsCoolBagsAndBoxes} onChange={handleSelfCheckInChange('beachTowelsCoolBagsAndBoxes')} />} label="Beach towels cool bags and boxes" />
        <FormControlLabel control={<Checkbox checked={data.beachTowelsProvided} onChange={handleSelfCheckInChange('beachTowelsProvided')} />} label="Beach towels provided" />
        <FormControlLabel control={<Checkbox checked={data.essentials} onChange={handleSelfCheckInChange('essentials')} />} label="Essentials" />
        <FormControlLabel control={<Checkbox checked={data.hangers} onChange={handleSelfCheckInChange('hangers')} />} label="Hangers" />
        <FormControlLabel control={<Checkbox checked={data.extraPillowsAndBlankets} onChange={handleSelfCheckInChange('extraPillowsAndBlankets')} />} label="Extra pillows and blankets" />
        <FormControlLabel control={<Checkbox checked={data.roomDarkeningShades} onChange={handleSelfCheckInChange('roomDarkeningShades')} />} label="Room-darkening shades" />
        <FormControlLabel control={<Checkbox checked={data.showerGel} onChange={handleSelfCheckInChange('showerGel')} />} label="Shower gel" />
        <FormControlLabel control={<Checkbox checked={data.extrasBeachChair} onChange={handleSelfCheckInChange('extrasBeachChair')} />} label="Extras beach chair" />
        <FormControlLabel control={<Checkbox checked={data.extrasPaddleBoard} onChange={handleSelfCheckInChange('extrasPaddleBoard')} />} label="Extras paddle board" />
        <FormControlLabel control={<Checkbox checked={data.hotWaterProvided} onChange={handleSelfCheckInChange('hotWaterProvided')} />} label="Hot water provided" />
      
        </div>
          
              
        <div className="category-styling">
        <h3>Keys</h3>
        
        <TextField id="outlined-basic"  variant="outlined" value={keyLocation} onChange={e => updateFields({keyLocation: e.target.value})} label="Key location" />
        <TextField id="outlined-basic"  variant="outlined" value={extraKeyLocation} onChange={e => updateFields({extraKeyLocation: e.target.value})} label="Extra key location" />
        
      
        </div>

        <div className="category-styling">
        <h3>Linen</h3>
        <TextField id="outlined-basic"  variant="outlined" value={linenCleaningMethod} onChange={e => updateFields({linenCleaningMethod: e.target.value})} label="Linen cleaning method" />
        <FormControlLabel control={<Checkbox checked={data.bedLinen} onChange={handleSelfCheckInChange('bedLinen')} />} label="Bed linen" />
        <FormControlLabel control={<Checkbox checked={data.linenOnceAWeek} onChange={handleSelfCheckInChange('linenOnceAWeek')} />} label="Linen X1 a week" />
        <FormControlLabel control={<Checkbox checked={data.linenTwiceAWeek} onChange={handleSelfCheckInChange('linenTwiceAWeek')} />} label="Linen X2 a week" />
        </div>

        <div className="category-styling">
        <h3>Maid</h3>
        <FormControlLabel control={<Checkbox checked={data.maidEveryDay} onChange={handleSelfCheckInChange('maidEveryDay')} />} label="Maid every day" />
        <FormControlLabel control={<Checkbox checked={data.maidOnceAWeek} onChange={handleSelfCheckInChange('maidOnceAWeek')} />} label="Maid X1 a week" />
        <FormControlLabel control={<Checkbox checked={data.maidTwiceAWeek} onChange={handleSelfCheckInChange('maidTwiceAWeek')} />} label="Maid X2 a week" />
        <FormControlLabel control={<Checkbox checked={data.maidThriceAWeek} onChange={handleSelfCheckInChange('maidThriceAWeek')} />} label="Maid X3 a week" />
        <FormControlLabel control={<Checkbox checked={data.maidBreakfastIncluded} onChange={handleSelfCheckInChange('maidBreakfastIncluded')} />} label="Maid breakfast included" />
        <TextField id="outlined-basic"  variant="outlined" value={safeEnhachedCleaning} onChange={e => updateFields({safeEnhachedCleaning: e.target.value})} label="Safe enhached cleaning" />
        <TextField id="outlined-basic"  variant="outlined" value={safeCleaningDisinfection} onChange={e => updateFields({safeCleaningDisinfection: e.target.value})} label="Safe cleaning disinfection" />
        <TextField id="outlined-basic"  variant="outlined" value={safeSelfCheckInCheckOut} onChange={e => updateFields({safeSelfCheckInCheckOut: e.target.value})} label="Safe self check in check out" />
        <TextField id="outlined-basic"  variant="outlined" value={safeCommonSurfaceDisinfectantCleaning} onChange={e => updateFields({safeCommonSurfaceDisinfectantCleaning: e.target.value})} label="Safe common surface disinfectant cleaning" />
        </div>

        <div className="category-styling">
        <h3>Sanitation</h3>
        <TextField id="outlined-basic"  variant="outlined" value={safeSanitaryAssociation} onChange={e => updateFields({safeSanitaryAssociation: e.target.value})} label="Safe sanitary association" />
        <TextField id="outlined-basic"  variant="outlined" value={sanitaryStandard} onChange={e => updateFields({sanitaryStandard: e.target.value})} label="Sanitary standard" />
        </div>
        
        <div className="category-styling">
        <h3>Towels</h3>
        <FormControlLabel control={<Checkbox checked={data.towels} onChange={handleSelfCheckInChange('towels')} />} label="Towels" />
        <FormControlLabel control={<Checkbox checked={data.towelsOnceAWeek} onChange={handleSelfCheckInChange('towelsOnceAWeek')} />} label="Towels X1 a week" />
        <FormControlLabel control={<Checkbox checked={data.towelsTwiceAWeek} onChange={handleSelfCheckInChange('towelsTwiceAWeek')} />} label="Towels X2 a week" />
        <FormControlLabel control={<Checkbox checked={data.towelsThriceAWeek} onChange={handleSelfCheckInChange('towelsThriceAWeek')} />} label="Towels X3 a week" />
        </div>

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

