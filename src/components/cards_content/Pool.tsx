import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormData } from "@/app/types/all-form-types";

type UserFormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void
  
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

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Pool">
             <FormGroup>
            <div className="extra-categories">
           
            <div className="category-styling">
              <h3>Pool</h3>


        <FormControlLabel control={<Checkbox checked={data.levelGround} onChange={handleSelfCheckInChange('levelGround')} />} label="Level ground" />
        <FormControlLabel control={<Checkbox checked={data.terrace} onChange={handleSelfCheckInChange('terrace')} />} label="Terrace" />
        <FormControlLabel control={<Checkbox checked={data.outsideFurniture} onChange={handleSelfCheckInChange('outsideFurniture')} />} label="outside furniture" />
        <FormControlLabel control={<Checkbox checked={data.depthMarks} onChange={handleSelfCheckInChange('depthMarks')} />} label="depth marks" />
        <FormControlLabel control={<Checkbox checked={data.safetySign} onChange={handleSelfCheckInChange('safetySign')} />} label="safety sign" />
        <FormControlLabel control={<Checkbox checked={data.swimmingRing} onChange={handleSelfCheckInChange('swimmingRing')} />} label="swimming ring" />
        <FormControlLabel control={<Checkbox checked={data.staircase} onChange={handleSelfCheckInChange('staircase')} />} label="staircase" />
        <FormControlLabel control={<Checkbox checked={data.jacuzziJets} onChange={handleSelfCheckInChange('jacuzziJets')} />} label="jacuzzi jets" />
        <FormControlLabel control={<Checkbox checked={data.poolMaintenace} onChange={handleSelfCheckInChange('poolMaintenace')} />} label="Pool maintenace" />
        <FormControlLabel control={<Checkbox checked={data.accessToPool} onChange={handleSelfCheckInChange('accessToPool')} />} label="Access to pool" />
        <FormControlLabel control={<Checkbox checked={data.fence} onChange={handleSelfCheckInChange('fence')} />} label="Fence" />
        <FormControlLabel control={<Checkbox checked={data.poolTowels} onChange={handleSelfCheckInChange('poolTowels')} />} label="pool towels" />
        <FormControlLabel control={<Checkbox checked={data.poolShower} onChange={handleSelfCheckInChange('poolShower')} />} label="pool shower" />
        <FormControlLabel control={<Checkbox checked={data.poolLasso} onChange={handleSelfCheckInChange('poolLasso')} />} label="pool lasso" />
        <FormControlLabel control={<Checkbox checked={data.solarPanels} onChange={handleSelfCheckInChange('solarPanels')} />} label="Solar panels" />
        <FormControlLabel control={<Checkbox checked={data.inflatables} onChange={handleSelfCheckInChange('inflatables')} />} label="Inflatables" />
        
        
        </div>

        <h3>Pool dimensions</h3>
        <TextField id="outlined-basic" label="" variant="outlined" value={minWidth} onChange={e => updateFields({minWidth: e.target.value})} />
        <TextField id="outlined-basic" label="" variant="outlined" value={maxWidth} onChange={e => updateFields({maxWidth: e.target.value})} />
        <TextField id="outlined-basic" label="" variant="outlined" value={minDepth} onChange={e => updateFields({minDepth: e.target.value})} />
        <TextField id="outlined-basic" label="" variant="outlined" value={maxdepth} onChange={e => updateFields({maxdepth: e.target.value})} />
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}
