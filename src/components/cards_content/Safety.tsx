import { FormGroup } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import AccessibleIcon from '@mui/icons-material/Accessible';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PetsIcon from '@mui/icons-material/Pets';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import { useFormData } from "@/app/contexts/form";
import CustomCheckbox from "../reuseable-components/CustomCheckbox";




export default function Safety() {

  const { value, setValue, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  return (
    <FormWrapper title="Safety">
      <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error!
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
      <FormGroup>
        <div className="extra-categories">


          <div className="safety-category category-styling">

            <ul className="multi-options-grid">
                <CustomCheckbox label="Carbon monoxide alarm" value={value.carbonMonoxideAlarm} onChange={handleCheckboxChange('carbonMonoxideAlarm')} />
                <CustomCheckbox label="Emergency exit route" value={value.emergencyExitRoute} onChange={handleCheckboxChange('emergencyExitRoute')} />
                <CustomCheckbox label="First aid kit" value={value.firstAidKit} onChange={handleCheckboxChange('firstAidKit')} />
                <CustomCheckbox label="Fire extinguisher" value={value.fireExtinguisher} onChange={handleCheckboxChange('fireExtinguisher')} />
                <CustomCheckbox label="Smoke alarm" value={value.smokeAlarm} onChange={handleCheckboxChange('smokeAlarm')} />
                <CustomCheckbox label="Deadbolt lock" value={value.deadboltLock} onChange={handleCheckboxChange('deadboltLock')} />
                <CustomCheckbox label="Police emergency contact" value={value.policeEmergencyContact} onChange={handleCheckboxChange('policeEmergencyContact')} />
                <CustomCheckbox label="Fire emergency contact" value={value.fireEmergencyContact} onChange={handleCheckboxChange('fireEmergencyContact')} />
                <CustomCheckbox label="Outdoor lighting" value={value.outdoorLighting} onChange={handleCheckboxChange('outdoorLighting')} />
                <CustomCheckbox label="Lightning protection" value={value.lightningProtection} onChange={handleCheckboxChange('lightningProtection')} />
                <CustomCheckbox label="Medical emergency contact" value={value.medicalEmergencyContact} onChange={handleCheckboxChange('medicalEmergencyContact')} />
          </ul>

          </div>

      
        <div className="accessibility-cat main-category">
          <h3>Accessibility options</h3>
          <ul className="duo-options-grid">
              <CustomCheckbox label="Wheelchair friendly" value={value.wheelchairFriendly} icon={<AccessibleIcon />} onChange={handleCheckboxChange('wheelchairFriendly')} />
              <CustomCheckbox label="Children Allowed" value={value.childrenAllowed} icon={<FamilyRestroomIcon />} onChange={handleCheckboxChange('childrenAllowed')} />
              <CustomCheckbox label="Pets allowed" value={value.petsAllowed} icon={<PetsIcon />} onChange={handleCheckboxChange('petsAllowed')} />
              <CustomCheckbox label="Smoking allowed" value={value.smokingAllowed} icon={<SmokingRoomsIcon />} onChange={handleCheckboxChange('smokingAllowed')} />
          </ul>
        </div>
      

        </div>
      </FormGroup>
    </FormWrapper>
  )
}

