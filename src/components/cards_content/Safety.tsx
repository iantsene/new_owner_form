import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormData } from "@/app/types/all-form-types";



type UserFormProps = FormData & {
updateFields: (fields: Partial<FormData>) => void

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

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Safety">
             <FormGroup>
            <div className="extra-categories">
           
              
        <div className="category-styling">
        <h3>Safety</h3>
        <FormControlLabel control={<Checkbox checked={data.carbonMonoxideAlarm} onChange={handleSelfCheckInChange('carbonMonoxideAlarm')} />} label="Carbon monoxide alarm" />
        <FormControlLabel control={<Checkbox checked={data.emergencyExitRoute} onChange={handleSelfCheckInChange('emergencyExitRoute')} />} label="Emergency exit route" />
        <FormControlLabel control={<Checkbox checked={data.fireEmergencyContact} onChange={handleSelfCheckInChange('fireEmergencyContact')} />} label="Fire emergency contact" />
        <FormControlLabel control={<Checkbox checked={data.fireExtinguisher} onChange={handleSelfCheckInChange('fireExtinguisher')} />} label="Fire extinguisher" />
        <FormControlLabel control={<Checkbox checked={data.firstAidKit} onChange={handleSelfCheckInChange('firstAidKit')} />} label="First aid kit" />
        <FormControlLabel control={<Checkbox checked={data.medicalEmergencyContact} onChange={handleSelfCheckInChange('medicalEmergencyContact')} />} label="Medical emergency contact" />
        <FormControlLabel control={<Checkbox checked={data.policeEmergencyContact} onChange={handleSelfCheckInChange('policeEmergencyContact')} />} label="Police emergency contact" />
        <FormControlLabel control={<Checkbox checked={data.smokeAlarm} onChange={handleSelfCheckInChange('smokeAlarm')} />} label="Smoke alarm" />
        <FormControlLabel control={<Checkbox checked={data.deadboltLock} onChange={handleSelfCheckInChange('deadboltLock')} />} label="Deadbolt lock" />
        <FormControlLabel control={<Checkbox checked={data.outdoorLighting} onChange={handleSelfCheckInChange('outdoorLighting')} />} label="Outdoor lighting" />
        <FormControlLabel control={<Checkbox checked={data.lightningProtection} onChange={handleSelfCheckInChange('lightningProtection')} />} label="Lightning protection" />
        
        
        
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

