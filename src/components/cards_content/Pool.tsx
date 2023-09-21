import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";


type UserData = {
    levelGround: boolean
    terrace: boolean
    outsideFurniture: boolean
    depthMarks: boolean
    safetySign: boolean
    swimmingRing: boolean
    staircase: boolean
    jacuzziJets: boolean
    poolMaintenace: boolean
    accessToPool: boolean
    fence: boolean
    poolTowels: boolean
    poolShower: boolean
    poolLasso: boolean
    solarPanels: boolean
    inflatables: boolean
    minWidth: string
    maxWidth: string
    minDepth: string
    maxdepth: string
}

type UserFormProps = UserData & {
updateFields: (fields: Partial<UserData>) => void

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
        <FormControlLabel control={<Checkbox checked={data.minWidth } onChange={handleSelfCheckInChange('minWidth ')} />} label="min width " />
        <FormControlLabel control={<Checkbox checked={data.maxWidth } onChange={handleSelfCheckInChange('maxWidth ')} />} label="max width " />
        <FormControlLabel control={<Checkbox checked={data.minDepth } onChange={handleSelfCheckInChange('minDepth ')} />} label="min depth " />
        <FormControlLabel control={<Checkbox checked={data.maxdepth} onChange={handleSelfCheckInChange('maxdepth')} />} label="max depth" />
        
        
        </div>
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}
