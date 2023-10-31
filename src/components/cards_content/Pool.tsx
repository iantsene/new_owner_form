import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import CustomTextField from "../reuseable-components/CustomTextField";

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
        
           
             <div className="pool-category main-category">
              <h3>Pool amenities & properties</h3>

          <ul className='multi-options-grid' >
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={levelGround} onChange={handleCheckboxChange('levelGround')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Level ground</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={terrace} onChange={handleCheckboxChange('terrace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Terrace</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={outsideFurniture} onChange={handleCheckboxChange('outsideFurniture')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outside furniture</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={depthMarks} onChange={handleCheckboxChange('depthMarks')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Depth marks</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={safetySign} onChange={handleCheckboxChange('safetySign')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Safety sign</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={swimmingRing} onChange={handleCheckboxChange('swimmingRing')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Swimming ring</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={staircase} onChange={handleCheckboxChange('staircase')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Staircase</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={jacuzziJets} onChange={handleCheckboxChange('jacuzziJets')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Jacuzzi jets</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={poolMaintenace} onChange={handleCheckboxChange('poolMaintenace')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pool maintenace</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={accessToPool} onChange={handleCheckboxChange('accessToPool')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Access to pool</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={fence} onChange={handleCheckboxChange('fence')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fence</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={poolTowels} onChange={handleCheckboxChange('poolTowels')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pool towels</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={poolShower} onChange={handleCheckboxChange('poolShower')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pool shower</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={poolLasso} onChange={handleCheckboxChange('poolLasso')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Pool lasso</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={solarPanels} onChange={handleCheckboxChange('solarPanels')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Solar panels</span></div>} /></li>
          <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={inflatables} onChange={handleCheckboxChange('inflatables')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Inflatables</span></div>} /></li>
          </ul>
       
        
        </div>
        <div className="pool-dimensions-category main-category">
        <h3>Pool dimensions</h3>
        <ul className="duo-options-grid">
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Min width:</span><CustomTextField label="Min width" type="number" value={minWidth} onChange={e => updateFields({minWidth : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Max width:</span><CustomTextField label="Max width" type="number" value={maxWidth} onChange={e => updateFields({maxWidth : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Min depth:</span><CustomTextField label="Min depth" type="number" value={minDepth} onChange={e => updateFields({minDepth : e})}  ></CustomTextField></div></li>
        <li className="list-item-container"><img className="icon" src="/Icons/icon-placeholder.png" alt="icon" /><div className="label"><span>Max depth:</span><CustomTextField label="Max depth" type="number" value={maxdepth} onChange={e => updateFields({maxdepth : e})}  ></CustomTextField></div></li>
        </ul>
        </div>
        
        
        
       
      
        </FormGroup>
        </FormWrapper>
        )
}
