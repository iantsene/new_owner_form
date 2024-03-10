import { FormGroup } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { useFormData } from "@/app/contexts/form";
import CustomCheckbox from "../reuseable-components/CustomCheckbox";




export default function Safety() {

  const { value, setValue, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange('safety', fieldName, e.target.checked);
  };

  return (
    <FormWrapper title="Safety">
      <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error!
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
      <FormGroup>
        <div className="extra-categories">


          <div className="safety-category category-styling">

            <ul className="multi-options-grid">
                <CustomCheckbox label="Carbon monoxide alarm" value={value.safety.carbonMonoxideAlarm} onChange={handleCheckboxChange('carbonMonoxideAlarm')} />
                <CustomCheckbox label="Emergency exit route" value={value.safety.emergencyExitRoute} onChange={handleCheckboxChange('emergencyExitRoute')} />
                <CustomCheckbox label="First aid kit" value={value.safety.firstAidKit} onChange={handleCheckboxChange('firstAidKit')} />
                <CustomCheckbox label="Fire extinguisher" value={value.safety.fireExtinguisher} onChange={handleCheckboxChange('fireExtinguisher')} />
                <CustomCheckbox label="Smoke alarm" value={value.safety.smokeAlarm} onChange={handleCheckboxChange('smokeAlarm')} />
                <CustomCheckbox label="Deadbolt lock" value={value.safety.deadboltLock} onChange={handleCheckboxChange('deadboltLock')} />
                <CustomCheckbox label="Police emergency contact" value={value.safety.policeEmergencyContact} onChange={handleCheckboxChange('policeEmergencyContact')} />
                <CustomCheckbox label="Fire emergency contact" value={value.safety.fireEmergencyContact} onChange={handleCheckboxChange('fireEmergencyContact')} />
                <CustomCheckbox label="Outdoor lighting" value={value.safety.outdoorLighting} onChange={handleCheckboxChange('outdoorLighting')} />
                <CustomCheckbox label="Lightning protection" value={value.safety.lightningProtection} onChange={handleCheckboxChange('lightningProtection')} />
                <CustomCheckbox label="Medical emergency contact" value={value.safety.medicalEmergencyContact} onChange={handleCheckboxChange('medicalEmergencyContact')} />
          </ul>

          </div>
      

        </div>
      </FormGroup>
    </FormWrapper>
  )
}

