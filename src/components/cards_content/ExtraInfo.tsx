import { Checkbox, InputBase, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Paper, } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";

type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void
  
  }

export default function ExtraInfo({checkInTime, checkOutTime, luggageCheckIn, selfCheckIn, luggageDropTime, rentalLicense, extraLicenseRequired, extraLicenceGMAG, extraEcoHouse, extraPartiesNotAllowed, extraPartiesAllowed, updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Extra Website Information">
             <FormGroup>
            <div className="extra-categories">
           
            <div className="category-styling">
            <h3 className="cat-headers">Check-in options</h3> 
        <label htmlFor="chkin">Check-in Time:
        <InputBase type="time" id="chkin" value={checkInTime} onChange={e => updateFields({checkInTime : e.target.value})} /></label>
        <label htmlFor="chkout">Check-out Time:
        <InputBase type="time" id="chkout"  value={checkOutTime} onChange={e => updateFields({checkOutTime : e.target.value})} /></label>
      
        
        <FormControlLabel control={<Checkbox size="small" checked={data.selfCheckIn} onChange={handleCheckboxChange('selfCheckIn')} />}  value={selfCheckIn} label="Self Check-in" />
        <FormControlLabel control={<Checkbox size="small" checked={data.luggageCheckIn} onChange={handleCheckboxChange('luggageCheckIn')} />} label="Luggage Check-in" />
        <label htmlFor="lgdrop">Luggage drop-off time:
        <InputBase className="time-inputs" type="time" value={luggageDropTime} onChange={e => updateFields({luggageDropTime : e.target.value})} id="lgdrop" /></label>
        </div>

        <div className="category-styling">
        <h3 className="cat-headers">Licenses</h3>
        <FormControlLabel control={<Checkbox size="small" checked={data.rentalLicense} onChange={handleCheckboxChange('rentalLicense')} />} label="Rental license" />
        <FormControlLabel control={<Checkbox size="small" checked={data.extraLicenseRequired} onChange={handleCheckboxChange('extraLicenseRequired')} />} label="Extra License required" />
        <FormControlLabel control={<Checkbox size="small" checked={data.extraLicenceGMAG} onChange={handleCheckboxChange('extraLicenceGMAG')} />} label="Extra License type GreeceMAG" />
        </div>

        <div className="category-styling">
        <h3 className="cat-headers">Extra Parties & Eco</h3>
        <FormControlLabel control={<Checkbox size="small" checked={data.extraEcoHouse} onChange={handleCheckboxChange('extraEcoHouse')} />} label="Extra Eco house" />
        <FormControlLabel control={<Checkbox size="small" checked={data.extraPartiesNotAllowed} onChange={handleCheckboxChange('extraPartiesNotAllowed')} />} label="Extra Parties not allowed" />
        <FormControlLabel control={<Checkbox size="small" checked={data.extraPartiesAllowed} onChange={handleCheckboxChange('extraPartiesAllowed')} />} label="Extra Parties allowed" />
        </div>
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

