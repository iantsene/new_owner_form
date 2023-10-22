import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";



type UserFormProps = FormDataTypes & {
updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function Safety({
    carbonMonoxideAlarm,
    emergencyExitRoute,
    fireEmergencyContact,
    fireExtinguisher,
    firstAidKit,
    medicalEmergencyContact,
    policeEmergencyContact,
    smokeAlarm,
    deadboltLock,
    outdoorLighting,
    lightningProtection,
    

    updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Safety">
          <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error! 
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
             <FormGroup>
            <div className="extra-categories">
           
              
        <div className="category-styling">
       
        <ul className="multi-options-grid">
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.carbonMonoxideAlarm} onChange={handleCheckboxChange('carbonMonoxideAlarm')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Carbon monoxide alarm</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.emergencyExitRoute} onChange={handleCheckboxChange('emergencyExitRoute')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Emergency exit route</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.fireEmergencyContact} onChange={handleCheckboxChange('fireEmergencyContact')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fire emergency contact</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.fireExtinguisher} onChange={handleCheckboxChange('fireExtinguisher')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fire extinguisher</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.firstAidKit} onChange={handleCheckboxChange('firstAidKit')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">First aid kit</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.medicalEmergencyContact} onChange={handleCheckboxChange('medicalEmergencyContact')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Medical emergency contact</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.policeEmergencyContact} onChange={handleCheckboxChange('policeEmergencyContact')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Police emergency contact</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.smokeAlarm} onChange={handleCheckboxChange('smokeAlarm')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Smoke alarm</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.deadboltLock} onChange={handleCheckboxChange('deadboltLock')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Deadbolt lock</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.outdoorLighting} onChange={handleCheckboxChange('outdoorLighting')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outdoor lighting</span></div>} /></li>
        <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={data.lightningProtection} onChange={handleCheckboxChange('lightningProtection')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Lightning protection</span></div>} /></li>
        </ul>
        
        </div>
        
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

