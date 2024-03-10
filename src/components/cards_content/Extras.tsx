import { FormGroup } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import AccessibleIcon from '@mui/icons-material/Accessible';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PetsIcon from '@mui/icons-material/Pets';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import { useFormData } from "@/app/contexts/form";
import CustomCheckbox from "../reuseable-components/CustomCheckbox";




export default function Extras() {

  const { value, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange('extras', fieldName, e.target.checked);
  };

  return (
    <FormWrapper title="Extras">
      <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error!
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
      <FormGroup>
        <div className="extra-categories">


        <div className="extra-parties-cat main-category">
            <h3>Extra Parties & Eco</h3>
            <ul className="media-query-custom-breakpoint">
          <CustomCheckbox label="Extra Eco house" value={value.extras.ecoHouse} onChange={handleCheckboxChange('ecoHouse')} /> 
          <CustomCheckbox label="Extra Parties not allowed" value={value.extras.partiesNotAllowed} onChange={handleCheckboxChange('partiesNotAllowed')} /> 
          <CustomCheckbox label="Extra Parties allowed" value={value.extras.partiesAllowed} onChange={handleCheckboxChange('partiesAllowed')} /> 
            </ul>

          </div>

      
        <div className="accessibility-cat main-category">
          <h3>Accessibility options</h3>
          <ul className="duo-options-grid">
              <CustomCheckbox label="Wheelchair friendly" value={value.extras.wheelchairFriendly} icon={<AccessibleIcon />} onChange={handleCheckboxChange('wheelchairFriendly')} />
              <CustomCheckbox label="Children Allowed" value={value.extras.childrenAllowed} icon={<FamilyRestroomIcon />} onChange={handleCheckboxChange('childrenAllowed')} />
              <CustomCheckbox label="Pets allowed" value={value.extras.petsAllowed} icon={<PetsIcon />} onChange={handleCheckboxChange('petsAllowed')} />
              <CustomCheckbox label="Smoking allowed" value={value.extras.smokingAllowed} icon={<SmokingRoomsIcon />} onChange={handleCheckboxChange('smokingAllowed')} />
          </ul>
        </div>

        <div className=" bedsnbaths-extras-cat main-category">
          <h3>Beds and baths extras</h3>
          <ul className="multi-options-grid">
          <CustomCheckbox label="Baby listening device" value={value.extras.babyListeningDevice} onChange={handleCheckboxChange('babyListeningDevice')} />
          <CustomCheckbox label="Baby potty" value={value.extras.babyPotty} onChange={handleCheckboxChange('babyPotty')} />
          <CustomCheckbox label="Baby changing table" value={value.extras.babyChangingTable} onChange={handleCheckboxChange('babyChangingTable')} />
          <CustomCheckbox label="Baby linen" value={value.extras.babyLinen} onChange={handleCheckboxChange('babyLinen')} />
          <CustomCheckbox label="Baby washing gel" value={value.extras.babyWashingGel} onChange={handleCheckboxChange('babyWashingGel')} />
          <CustomCheckbox label="Port bebe" value={value.extras.portBebe} onChange={handleCheckboxChange('portBebe')} />
          <CustomCheckbox label="Cleaning products" value={value.extras.cleaningProducts} onChange={handleCheckboxChange('cleaningProducts')} />
          <CustomCheckbox label="Baby bath" value={value.extras.babyBath} onChange={handleCheckboxChange('babyBath')} />
          <CustomCheckbox label="Child safety gate" value={value.extras.childSafetyGate} onChange={handleCheckboxChange('childSafetyGate')} />
          <CustomCheckbox label="Changing mat" value={value.extras.changingMat} onChange={handleCheckboxChange('changingMat')} />
          </ul>
          </div>

          <div className="main-category">
            <h3>Physical Distancing</h3>
            <ul className="duo-options-grid">
          <CustomCheckbox label="Physical Distancing" value={value.extras.physicalDistancing} onChange={handleCheckboxChange('physicalDistancing')} /> 
            </ul>

          </div>

        </div>
      </FormGroup>
    </FormWrapper>
  )
}

