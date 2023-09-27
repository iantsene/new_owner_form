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
            <div className="extra-categories">
           
            <div className="category-styling">
              <h3>Pool</h3>


        <FormControlLabel control={<Checkbox size="small" checked={data.levelGround} onChange={handleCheckboxChange('levelGround')} />} label="Level ground" />
        <FormControlLabel control={<Checkbox size="small" checked={data.terrace} onChange={handleCheckboxChange('terrace')} />} label="Terrace" />
        <FormControlLabel control={<Checkbox size="small" checked={data.outsideFurniture} onChange={handleCheckboxChange('outsideFurniture')} />} label="Outside furniture" />
        <FormControlLabel control={<Checkbox size="small" checked={data.depthMarks} onChange={handleCheckboxChange('depthMarks')} />} label="Depth marks" />
        <FormControlLabel control={<Checkbox size="small" checked={data.safetySign} onChange={handleCheckboxChange('safetySign')} />} label="Safety sign" />
        <FormControlLabel control={<Checkbox size="small" checked={data.swimmingRing} onChange={handleCheckboxChange('swimmingRing')} />} label="Swimming ring" />
        <FormControlLabel control={<Checkbox size="small" checked={data.staircase} onChange={handleCheckboxChange('staircase')} />} label="Staircase" />
        <FormControlLabel control={<Checkbox size="small" checked={data.jacuzziJets} onChange={handleCheckboxChange('jacuzziJets')} />} label="Jacuzzi jets" />
        <FormControlLabel control={<Checkbox size="small" checked={data.poolMaintenace} onChange={handleCheckboxChange('poolMaintenace')} />} label="Pool maintenace" />
        <FormControlLabel control={<Checkbox size="small" checked={data.accessToPool} onChange={handleCheckboxChange('accessToPool')} />} label="Access to pool" />
        <FormControlLabel control={<Checkbox size="small" checked={data.fence} onChange={handleCheckboxChange('fence')} />} label="Fence" />
        <FormControlLabel control={<Checkbox size="small" checked={data.poolTowels} onChange={handleCheckboxChange('poolTowels')} />} label="Pool towels" />
        <FormControlLabel control={<Checkbox size="small" checked={data.poolShower} onChange={handleCheckboxChange('poolShower')} />} label="Pool shower" />
        <FormControlLabel control={<Checkbox size="small" checked={data.poolLasso} onChange={handleCheckboxChange('poolLasso')} />} label="Pool lasso" />
        <FormControlLabel control={<Checkbox size="small" checked={data.solarPanels} onChange={handleCheckboxChange('solarPanels')} />} label="Solar panels" />
        <FormControlLabel control={<Checkbox size="small" checked={data.inflatables} onChange={handleCheckboxChange('inflatables')} />} label="Inflatables" />
        
        
        </div>

        <h3>Pool dimensions</h3>
        <TextField id="outlined-basic" size="small" label="Min width" variant="outlined" value={minWidth} onChange={e => updateFields({minWidth: e.target.value})} />
        <TextField id="outlined-basic" size="small" label="Max width" variant="outlined" value={maxWidth} onChange={e => updateFields({maxWidth: e.target.value})} />
        <TextField id="outlined-basic" size="small" label="Min depth" variant="outlined" value={minDepth} onChange={e => updateFields({minDepth: e.target.value})} />
        <TextField id="outlined-basic" size="small" label="Max depth" variant="outlined" value={maxdepth} onChange={e => updateFields({maxdepth: e.target.value})} />
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}
