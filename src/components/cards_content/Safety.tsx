import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import AccessibleIcon from '@mui/icons-material/Accessible';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PetsIcon from '@mui/icons-material/Pets';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import { useFormData } from "@/app/contexts/form";




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
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.carbonMonoxideAlarm} onChange={handleCheckboxChange('carbonMonoxideAlarm')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Carbon monoxide alarm</span></div>} /></li>
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.emergencyExitRoute} onChange={handleCheckboxChange('emergencyExitRoute')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Emergency exit route</span></div>} /></li>
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.firstAidKit} onChange={handleCheckboxChange('firstAidKit')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">First aid kit</span></div>} /></li>
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.fireExtinguisher} onChange={handleCheckboxChange('fireExtinguisher')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fire extinguisher</span></div>} /></li>
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.smokeAlarm} onChange={handleCheckboxChange('smokeAlarm')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Smoke alarm</span></div>} /></li>
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.deadboltLock} onChange={handleCheckboxChange('deadboltLock')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Deadbolt lock</span></div>} /></li>
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.policeEmergencyContact} onChange={handleCheckboxChange('policeEmergencyContact')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Police emergency contact</span></div>} /></li>
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.fireEmergencyContact} onChange={handleCheckboxChange('fireEmergencyContact')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Fire emergency contact</span></div>} /></li>
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.outdoorLighting} onChange={handleCheckboxChange('outdoorLighting')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Outdoor lighting</span></div>} /></li>
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.lightningProtection} onChange={handleCheckboxChange('lightningProtection')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Lightning protection</span></div>} /></li>
              <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.medicalEmergencyContact} onChange={handleCheckboxChange('medicalEmergencyContact')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Medical emergency contact</span></div>} /></li>
            </ul>

          </div>

      
        <div className="accessibility-cat main-category">
          <h3>Accessibility options</h3>
          <ul className="duo-options-grid">
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.wheelchairFriendly} onChange={handleCheckboxChange('wheelchairFriendly')} />} label={<div className="label-content"><AccessibleIcon /><span className="checkbox-tags">Wheelchair friendly</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.childrenAllowed} onChange={handleCheckboxChange('childrenAllowed')} />} label={<div className="label-content"><FamilyRestroomIcon /><span className="checkbox-tags">Children Allowed</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.petsAllowed} onChange={handleCheckboxChange('petsAllowed')} />} label={<div className="label-content"><PetsIcon /><span className="checkbox-tags">Pets allowed</span></div>} /></li>
            <li className="list-items"><FormControlLabel control={<Checkbox size="small" checked={value.smokingAllowed} onChange={handleCheckboxChange('smokingAllowed')} />} label={<div className="label-content"><SmokingRoomsIcon /><span className="checkbox-tags">Smoking allowed</span></div>} /></li>
          </ul>
        </div>
      

        </div>
      </FormGroup>
    </FormWrapper>
  )
}

