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
             <FormGroup>
        
           
            <div className="category-styling">
              <h3>Pool amenities & properties</h3>

          <ul className="multi-options-grid">
            <li><FormControlLabel control={<Checkbox size="small" checked={data.levelGround} onChange={handleCheckboxChange('levelGround')} />} label="Level ground" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.terrace} onChange={handleCheckboxChange('terrace')} />} label="Terrace" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.outsideFurniture} onChange={handleCheckboxChange('outsideFurniture')} />} label="Outside furniture" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.depthMarks} onChange={handleCheckboxChange('depthMarks')} />} label="Depth marks" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.safetySign} onChange={handleCheckboxChange('safetySign')} />} label="Safety sign" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.swimmingRing} onChange={handleCheckboxChange('swimmingRing')} />} label="Swimming ring" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.staircase} onChange={handleCheckboxChange('staircase')} />} label="Staircase" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.jacuzziJets} onChange={handleCheckboxChange('jacuzziJets')} />} label="Jacuzzi jets" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.poolMaintenace} onChange={handleCheckboxChange('poolMaintenace')} />} label="Pool maintenace" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.accessToPool} onChange={handleCheckboxChange('accessToPool')} />} label="Access to pool" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.fence} onChange={handleCheckboxChange('fence')} />} label="Fence" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.poolTowels} onChange={handleCheckboxChange('poolTowels')} />} label="Pool towels" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.poolShower} onChange={handleCheckboxChange('poolShower')} />} label="Pool shower" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.poolLasso} onChange={handleCheckboxChange('poolLasso')} />} label="Pool lasso" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.solarPanels} onChange={handleCheckboxChange('solarPanels')} />} label="Solar panels" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.inflatables} onChange={handleCheckboxChange('inflatables')} />} label="Inflatables" /></li>
          </ul>
       
        
        </div>

        <h3>Pool dimensions</h3>
        <ul className="multi-options-grid">
          <li><TextField id="outlined-basic" size="small" label="Min width" variant="standard" value={minWidth} onChange={e => updateFields({minWidth: e.target.value})} /></li>
          <li><TextField id="outlined-basic" size="small" label="Max width" variant="standard" value={maxWidth} onChange={e => updateFields({maxWidth: e.target.value})} /></li>
          <li><TextField id="outlined-basic" size="small" label="Min depth" variant="standard" value={minDepth} onChange={e => updateFields({minDepth: e.target.value})} /></li>
          <li><TextField id="outlined-basic" size="small" label="Max depth" variant="standard" value={maxdepth} onChange={e => updateFields({maxdepth: e.target.value})} /></li>
        </ul>
        
        
        
        
       
      
        </FormGroup>
        </FormWrapper>
        )
}
