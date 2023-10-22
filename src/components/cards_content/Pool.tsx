import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";

type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void
  
  }

export default function Pool({
    
    levelGround,
    terrace,
    outsideFurniture,
    depthMarks,
    safetySign,
    swimmingRing,
    staircase,
    jacuzziJets,
    poolMaintenace,
    accessToPool,
    fence,
    poolTowels,
    poolShower,
    poolLasso,
    solarPanels,
    inflatables,
    minWidth,
    maxWidth,
    minDepth,
    maxdepth,

    updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Pool">
          <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error! 
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
             <FormGroup>
        
           
             <div className="main-category">
              <h3>Pool amenities & properties</h3>

          <ul className="multi-options-grid">
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.levelGround} onChange={handleCheckboxChange('levelGround')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Level ground</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.terrace} onChange={handleCheckboxChange('terrace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Terrace</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.outsideFurniture} onChange={handleCheckboxChange('outsideFurniture')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outside furniture</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.depthMarks} onChange={handleCheckboxChange('depthMarks')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Depth marks</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.safetySign} onChange={handleCheckboxChange('safetySign')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Safety sign</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.swimmingRing} onChange={handleCheckboxChange('swimmingRing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Swimming ring</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.staircase} onChange={handleCheckboxChange('staircase')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Staircase</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.jacuzziJets} onChange={handleCheckboxChange('jacuzziJets')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Jacuzzi jets</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.poolMaintenace} onChange={handleCheckboxChange('poolMaintenace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pool maintenace</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.accessToPool} onChange={handleCheckboxChange('accessToPool')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Access to pool</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.fence} onChange={handleCheckboxChange('fence')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fence</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.poolTowels} onChange={handleCheckboxChange('poolTowels')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pool towels</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.poolShower} onChange={handleCheckboxChange('poolShower')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pool shower</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.poolLasso} onChange={handleCheckboxChange('poolLasso')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pool lasso</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.solarPanels} onChange={handleCheckboxChange('solarPanels')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Solar panels</span></div>} /></li>
          <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.inflatables} onChange={handleCheckboxChange('inflatables')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Inflatables</span></div>} /></li>
          </ul>
       
        
        </div>
        <div className="main-category">
        <h3>Pool dimensions</h3>
        <ul className="duo-options-grid">
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Min width:</span><TextField size="small" label="Min width" variant="standard" value={minWidth} onChange={e => updateFields({minWidth : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Max width:</span><TextField size="small" label="Max width" variant="standard" value={maxWidth} onChange={e => updateFields({maxWidth : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Min depth:</span><TextField size="small" label="Min depth" variant="standard" value={minDepth} onChange={e => updateFields({minDepth : e.target.value})} /></label></li>
        <li><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><label className="label"><span>Max depth:</span><TextField size="small" label="Max depth" variant="standard" value={maxdepth} onChange={e => updateFields({maxdepth : e.target.value})} /></label></li>
        </ul>
        </div>
        
        
        
       
      
        </FormGroup>
        </FormWrapper>
        )
}
