import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";

type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void
  
  }

export default function GeneralInfo({wheelchairFriendly, childrenAllowed, petsAllowed, smokingAllowed, updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="General Information">
             <FormGroup>
            <div className="extra-categories">
           
            <div className="category-styling">
            
        <FormControlLabel control={<Checkbox size="small" checked={data.wheelchairFriendly} onChange={handleCheckboxChange('wheelchairFriendly')} />} label="Wheelchair friendly" />
        <FormControlLabel control={<Checkbox size="small" checked={data.childrenAllowed} onChange={handleCheckboxChange('childrenAllowed')} />} label="Children Allowed" />
        <FormControlLabel control={<Checkbox size="small" checked={data.petsAllowed} onChange={handleCheckboxChange('petsAllowed')} />}  label="Pets allowed" />
        <FormControlLabel control={<Checkbox size="small" checked={data.smokingAllowed} onChange={handleCheckboxChange('smokingAllowed')} />} label="Smoking allowed" />
        
        </div>

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

