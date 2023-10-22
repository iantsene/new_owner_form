import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import React from "react";



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
  safeCommonSurfaceDisinfecting,
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
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={shampooProvided} onChange={handleCheckboxChange('shampooProvided')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Shampoo provided</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={carHireRecommended} onChange={handleCheckboxChange('carHireRecommended')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Car hire recommended</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={carHireNotEssential} onChange={handleCheckboxChange('carHireNotEssential')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Car hire not essential</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={beachSunLoungersProvided} onChange={handleCheckboxChange('beachSunLoungersProvided')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Beach sun loungers provided</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={beachTowelsCoolBagsAndBoxes} onChange={handleCheckboxChange('beachTowelsCoolBagsAndBoxes')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Beach towels cool bags and boxes</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={beachTowelsProvided} onChange={handleCheckboxChange('beachTowelsProvided')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Beach towels provided</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={essentials} onChange={handleCheckboxChange('essentials')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Essentials</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={hangers} onChange={handleCheckboxChange('hangers')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Hangers</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={extraPillowsAndBlankets} onChange={handleCheckboxChange('extraPillowsAndBlankets')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Extra pillows and blankets</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={roomDarkeningShades} onChange={handleCheckboxChange('roomDarkeningShades')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Room-darkening shades</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={showerGel} onChange={handleCheckboxChange('showerGel')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Shower gel</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={extrasBeachChair} onChange={handleCheckboxChange('extrasBeachChair')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Extras beach chair</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={extrasPaddleBoard} onChange={handleCheckboxChange('extrasPaddleBoard')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Extras paddle board</span></div>} /></li>
<li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={hotWaterProvided} onChange={handleCheckboxChange('hotWaterProvided')} />} label={<div className="label-content"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><span className="checkbox-tags">Hot water provided</span></div>} /></li>
          </ul>
        </div>



        <div className="main-category">
          <h3>Keys</h3>
          <ul className="duo-options-grid">
          <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Key location:</span><TextField size="small" label="Key location" variant="standard" value={keyLocation} onChange={e => updateFields({keyLocation : e.target.value})} /></label></li>
          <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Extra key location:</span><TextField size="small" label="Extra key location" variant="standard" value={extraKeyLocation} onChange={e => updateFields({extraKeyLocation : e.target.value})} /></label></li>
          </ul>
        </div>




        <div className="main-category">

          <h3>Linen</h3>
          <ul className="duo-options-grid">
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={bedLinen} onChange={handleCheckboxChange('bedLinen')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Bed linen</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={linenOnceAWeek} onChange={handleCheckboxChange('linenOnceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Linen X1 a week</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={linenTwiceAWeek} onChange={handleCheckboxChange('linenTwiceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Linen X2 a week</span></div>} /></li>
            <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Linen cleaning method:</span><TextField size="small" label="Linen cleaning method" variant="standard" value={linenCleaningMethod} onChange={e => updateFields({linenCleaningMethod : e.target.value})} /></label></li>
            
          </ul>
        </div>




        <div className="main-category">

          <h3>Maid</h3>
          <ul className="short-options-grid">
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={maidEveryDay} onChange={handleCheckboxChange('maidEveryDay')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Maid every day</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={maidOnceAWeek} onChange={handleCheckboxChange('maidOnceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Maid X1 a week</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={maidTwiceAWeek} onChange={handleCheckboxChange('maidTwiceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Maid X2 a week</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={maidThriceAWeek} onChange={handleCheckboxChange('maidThriceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Maid X3 a week</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={maidBreakfastIncluded} onChange={handleCheckboxChange('maidBreakfastIncluded')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Maid breakfast included</span></div>} /></li>
        </ul>
        </div>


        <div className="main-category">
              <h3>Safe cleaning</h3>
            <ul className="duo-options-grid">

            <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Enhached cleaning:</span><TextField size="small" label="Enhached cleaning" variant="standard" value={safeEnhachedCleaning} onChange={e => updateFields({safeEnhachedCleaning : e.target.value})} /></label></li>
            <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Disinfection:</span><TextField size="small" label="Disinfection" variant="standard" value={safeCleaningDisinfection} onChange={e => updateFields({safeCleaningDisinfection : e.target.value})} /></label></li>
            <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Self check in check out:</span><TextField size="small" label="Self check in check out" variant="standard" value={safeSelfCheckInCheckOut} onChange={e => updateFields({safeSelfCheckInCheckOut : e.target.value})} /></label></li>
            <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Common surface disinfecting:</span><TextField size="small" label="Common surface disinfecting" variant="standard" value={safeCommonSurfaceDisinfecting} onChange={e => updateFields({safeCommonSurfaceDisinfecting : e.target.value})} /></label></li>
            </ul>
          </div>


          <div className="main-category">
            <ul className="safe-cleaning">
              <h3>Sanitation</h3>
              <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Safe sanitary association:</span><TextField size="small" label="Safe sanitary association" variant="standard" value={safeSanitaryAssociation} onChange={e => updateFields({safeSanitaryAssociation : e.target.value})} /></label></li>
              <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Sanitary standard:</span><TextField size="small" label="Sanitary standard" variant="standard" value={sanitaryStandard} onChange={e => updateFields({sanitaryStandard : e.target.value})} /></label></li>

            </ul>
          </div>


          <div className="main-category">
            <ul >
              <h3>Towels</h3>





        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={towels} onChange={handleCheckboxChange('towels')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Towels</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={towelsOnceAWeek} onChange={handleCheckboxChange('towelsOnceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Towels X1 a week</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={towelsTwiceAWeek} onChange={handleCheckboxChange('towelsTwiceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Towels X2 a week</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={towelsThriceAWeek} onChange={handleCheckboxChange('towelsThriceAWeek')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Towels X3 a week</span></div>} /></li>
            </ul>
          </div>


       








      </FormGroup>
    </FormWrapper>
  )
}

