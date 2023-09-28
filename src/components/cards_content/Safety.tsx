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
             <FormGroup>
            <div className="extra-categories">
           
              
        <div className="category-styling">
       
        <ul className="multi-options-grid">
          <li><FormControlLabel control={<Checkbox size="small" checked={data.carbonMonoxideAlarm} onChange={handleCheckboxChange('carbonMonoxideAlarm')} />} label="Carbon monoxide alarm" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.emergencyExitRoute} onChange={handleCheckboxChange('emergencyExitRoute')} />} label="Emergency exit route" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.fireEmergencyContact} onChange={handleCheckboxChange('fireEmergencyContact')} />} label="Fire emergency contact" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.fireExtinguisher} onChange={handleCheckboxChange('fireExtinguisher')} />} label="Fire extinguisher" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.firstAidKit} onChange={handleCheckboxChange('firstAidKit')} />} label="First aid kit" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.medicalEmergencyContact} onChange={handleCheckboxChange('medicalEmergencyContact')} />} label="Medical emergency contact" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.policeEmergencyContact} onChange={handleCheckboxChange('policeEmergencyContact')} />} label="Police emergency contact" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.smokeAlarm} onChange={handleCheckboxChange('smokeAlarm')} />} label="Smoke alarm" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.deadboltLock} onChange={handleCheckboxChange('deadboltLock')} />} label="Deadbolt lock" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.outdoorLighting} onChange={handleCheckboxChange('outdoorLighting')} />} label="Outdoor lighting" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.lightningProtection} onChange={handleCheckboxChange('lightningProtection')} />} label="Lightning protection" /></li>
        </ul>
        
        
        
        
        
        
        
        
        
        
        
        
        
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

