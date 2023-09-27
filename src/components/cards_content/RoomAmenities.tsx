import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";



type UserFormProps = FormDataTypes & {
updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function RoomAmenities({
 
 
  physicalDistancing,
 

    updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Room Amenities">
             <FormGroup>
            <div className="extra-categories">
           
          
              
        <div className="category-styling">
        <h3>Room Amenities</h3>
        
        
        <FormControlLabel control={<Checkbox size="small" checked={data.physicalDistancing} onChange={handleCheckboxChange('physicalDistancing')} />} label="Physical distancing" />
       
       
        
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

