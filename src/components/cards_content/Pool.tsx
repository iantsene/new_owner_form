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
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.levelGround} onChange={handleCheckboxChange('levelGround')} />} label="Level ground" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.terrace} onChange={handleCheckboxChange('terrace')} />} label="Terrace" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.outsideFurniture} onChange={handleCheckboxChange('outsideFurniture')} />} label="Outside furniture" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.depthMarks} onChange={handleCheckboxChange('depthMarks')} />} label="Depth marks" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.safetySign} onChange={handleCheckboxChange('safetySign')} />} label="Safety sign" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.swimmingRing} onChange={handleCheckboxChange('swimmingRing')} />} label="Swimming ring" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.staircase} onChange={handleCheckboxChange('staircase')} />} label="Staircase" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.jacuzziJets} onChange={handleCheckboxChange('jacuzziJets')} />} label="Jacuzzi jets" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.poolMaintenace} onChange={handleCheckboxChange('poolMaintenace')} />} label="Pool maintenace" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.accessToPool} onChange={handleCheckboxChange('accessToPool')} />} label="Access to pool" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.fence} onChange={handleCheckboxChange('fence')} />} label="Fence" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.poolTowels} onChange={handleCheckboxChange('poolTowels')} />} label="Pool towels" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.poolShower} onChange={handleCheckboxChange('poolShower')} />} label="Pool shower" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.poolLasso} onChange={handleCheckboxChange('poolLasso')} />} label="Pool lasso" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.solarPanels} onChange={handleCheckboxChange('solarPanels')} />} label="Solar panels" /></li>
            <li><img src="/Icons/icon-placeholder.png" /><FormControlLabel control={<Checkbox size="small" checked={data.inflatables} onChange={handleCheckboxChange('inflatables')} />} label="Inflatables" /></li>
          </ul>
       
        
        </div>
        <div className="main-category">
        <h3>Pool dimensions</h3>
        <ul className="multi-options-grid">
          <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" label="Min width" variant="standard" value={minWidth} onChange={e => updateFields({minWidth: e.target.value})} /></li>
          <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" label="Max width" variant="standard" value={maxWidth} onChange={e => updateFields({maxWidth: e.target.value})} /></li>
          <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" label="Min depth" variant="standard" value={minDepth} onChange={e => updateFields({minDepth: e.target.value})} /></li>
          <li><img src="/Icons/icon-placeholder.png" /><TextField id="outlined-basic" size="small" label="Max depth" variant="standard" value={maxdepth} onChange={e => updateFields({maxdepth: e.target.value})} /></li>
        </ul>
        </div>
        
        
        
       
      
        </FormGroup>
        </FormWrapper>
        )
}
