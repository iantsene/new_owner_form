import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";


type UserData = {
wheelchairFriendly: boolean
childrenAllowed: boolean
petsAllowed: boolean
smokingAllowed: boolean

}

type UserFormProps = UserData & {
updateFields: (fields: Partial<UserData>) => void

}

export default function GeneralInfo({wheelchairFriendly, childrenAllowed, petsAllowed, smokingAllowed, updateFields, data, handleFieldChange }: UserFormProps) {

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="General Information">
             <FormGroup>
            <div className="extra-categories">
           
            <div className="category-styling">
            
        <FormControlLabel control={<Checkbox checked={data.wheelchairFriendly} onChange={handleSelfCheckInChange('wheelchairFriendly')} />} label="Wheelchair friendly" />
        <FormControlLabel control={<Checkbox checked={data.childrenAllowed} onChange={handleSelfCheckInChange('childrenAllowed')} />} label="Children Allowed" />
        <FormControlLabel control={<Checkbox checked={data.petsAllowed} onChange={handleSelfCheckInChange('petsAllowed')} />}  label="Pets allowed" />
        <FormControlLabel control={<Checkbox checked={data.smokingAllowed} onChange={handleSelfCheckInChange('smokingAllowed')} />} label="Smoking allowed" />
        
        </div>

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

