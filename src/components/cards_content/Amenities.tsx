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
      <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error! 
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
      <FormGroup>




        <div className="main-category">
          <h3>General Amenities</h3>
          <ul className="multi-options-grid">
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.shampooProvided} onChange={handleCheckboxChange('shampooProvided')} />} label="Shampoo provided" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.carHireRecommended} onChange={handleCheckboxChange('carHireRecommended')} />} label="Car hire recommended" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.carHireNotEssential} onChange={handleCheckboxChange('carHireNotEssential')} />} label="Car hire not essential" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.beachSunLoungersProvided} onChange={handleCheckboxChange('beachSunLoungersProvided')} />} label="Beach sun loungers provided" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.beachTowelsCoolBagsAndBoxes} onChange={handleCheckboxChange('beachTowelsCoolBagsAndBoxes')} />} label="Beach towels cool bags and boxes" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.beachTowelsProvided} onChange={handleCheckboxChange('beachTowelsProvided')} />} label="Beach towels provided" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.essentials} onChange={handleCheckboxChange('essentials')} />} label="Essentials" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.hangers} onChange={handleCheckboxChange('hangers')} />} label="Hangers" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.extraPillowsAndBlankets} onChange={handleCheckboxChange('extraPillowsAndBlankets')} />} label="Extra pillows and blankets" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.roomDarkeningShades} onChange={handleCheckboxChange('roomDarkeningShades')} />} label="Room-darkening shades" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.showerGel} onChange={handleCheckboxChange('showerGel')} />} label="Shower gel" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.extrasBeachChair} onChange={handleCheckboxChange('extrasBeachChair')} />} label="Extras beach chair" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.extrasPaddleBoard} onChange={handleCheckboxChange('extrasPaddleBoard')} />} label="Extras paddle board" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.hotWaterProvided} onChange={handleCheckboxChange('hotWaterProvided')} />} label="Hot water provided" /></li>
          </ul>
        </div>



        <div className="main-category">
          <h3>Keys</h3>
          <ul className="short-options-grid">
            <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={keyLocation} onChange={e => updateFields({ keyLocation: e.target.value })} label="Key location" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={extraKeyLocation} onChange={e => updateFields({ extraKeyLocation: e.target.value })} label="Extra key location" /></li>
          </ul>
        </div>




        <div className="main-category">

          <h3>Linen</h3>
          <ul className="short-options-grid">
            <li><img src="/Icons/icon-placeholder.png" /><TextField variant="standard" value={linenCleaningMethod} onChange={e => updateFields({ linenCleaningMethod: e.target.value })} label="Linen cleaning method" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.bedLinen} onChange={handleCheckboxChange('bedLinen')} />} label="Bed linen" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.linenOnceAWeek} onChange={handleCheckboxChange('linenOnceAWeek')} />} label="Linen X1 a week" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.linenTwiceAWeek} onChange={handleCheckboxChange('linenTwiceAWeek')} />} label="Linen X2 a week" /></li>
          </ul>
        </div>




        <div className="main-category">

          <h3>Maid</h3>
          <ul className="short-options-grid">
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.maidEveryDay} onChange={handleCheckboxChange('maidEveryDay')} />} label="Maid every day" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.maidOnceAWeek} onChange={handleCheckboxChange('maidOnceAWeek')} />} label="Maid X1 a week" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.maidTwiceAWeek} onChange={handleCheckboxChange('maidTwiceAWeek')} />} label="Maid X2 a week" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.maidThriceAWeek} onChange={handleCheckboxChange('maidThriceAWeek')} />} label="Maid X3 a week" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.maidBreakfastIncluded} onChange={handleCheckboxChange('maidBreakfastIncluded')} />} label="Maid breakfast included" /></li>
          </ul>
        </div>


        <div className="main-category">
              <h3>Safe cleaning</h3>
            <ul className="short-options-grid">
              <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={safeEnhachedCleaning} onChange={e => updateFields({ safeEnhachedCleaning: e.target.value })} label="Enhached cleaning" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={safeCleaningDisinfection} onChange={e => updateFields({ safeCleaningDisinfection: e.target.value })} label="Disinfection" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={safeSelfCheckInCheckOut} onChange={e => updateFields({ safeSelfCheckInCheckOut: e.target.value })} label="Self check in check out" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={safeCommonSurfaceDisinfectantCleaning} onChange={e => updateFields({ safeCommonSurfaceDisinfectantCleaning: e.target.value })} label="Common surface disinfectant cleaning" /></li>
            </ul>
          </div>


          <div className="main-category">
            <ul className="safe-cleaning">
              <h3>Sanitation</h3>
              <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={safeSanitaryAssociation} onChange={e => updateFields({ safeSanitaryAssociation: e.target.value })} label="Safe sanitary association" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" variant="standard" value={sanitaryStandard} onChange={e => updateFields({ sanitaryStandard: e.target.value })} label="Sanitary standard" /></li>
            </ul>
          </div>


          <div className="main-category">
            <ul >
              <h3>Towels</h3>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.towels} onChange={handleCheckboxChange('towels')} />} label="Towels" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.towelsOnceAWeek} onChange={handleCheckboxChange('towelsOnceAWeek')} />} label="Towels X1 a week" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.towelsTwiceAWeek} onChange={handleCheckboxChange('towelsTwiceAWeek')} />} label="Towels X2 a week" /></li>
              <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.towelsThriceAWeek} onChange={handleCheckboxChange('towelsThriceAWeek')} />} label="Towels X3 a week" /></li>
            </ul>
          </div>


       








      </FormGroup>
    </FormWrapper>
  )
}

