import { Checkbox, FormControlLabel, FormGroup, TextField, InputBase } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";

type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function GeneralInfo({ wheelchairFriendly, childrenAllowed, petsAllowed, smokingAllowed, roomDescription, checkInTime, checkOutTime, luggageCheckIn, selfCheckIn, luggageDropTime, rentalLicense, extraLicenseRequired, extraLicenceGMAG, extraEcoHouse, extraPartiesNotAllowed, extraPartiesAllowed, updateFields, data, handleFieldChange }: UserFormProps) {




  const maxCharacters = 500;
  const handleCheckboxChange = (fieldName: string) => (e) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  return (
    <FormWrapper title="General Information">
      <FormGroup>
        

          <div className="general-info-categories">

            <div className="main-category">
              <h3 className="cat-headers">Check-in options</h3>

              <ul>
                <li><label htmlFor="chkin">Check-in Time:<InputBase className="time-inputs" type="time" id="chkin" value={checkInTime} onChange={e => updateFields({ checkInTime: e.target.value })} /></label></li>
                <li><label htmlFor="chkout">Check-out Time:<InputBase className="time-inputs" type="time" id="chkout" value={checkOutTime} onChange={e => updateFields({ checkOutTime: e.target.value })} /></label></li>
                <li><FormControlLabel control={<Checkbox size="small" checked={data.selfCheckIn} onChange={handleCheckboxChange('selfCheckIn')} />} value={selfCheckIn} label="Self Check-in" /></li>
                <li><FormControlLabel control={<Checkbox size="small" checked={data.luggageCheckIn} onChange={handleCheckboxChange('luggageCheckIn')} />} label="Luggage Check-in" /></li>
                <li><label htmlFor="lgdrop">Luggage drop-off time:<InputBase className="time-inputs" type="time" value={luggageDropTime} onChange={e => updateFields({ luggageDropTime: e.target.value })} id="lgdrop" /></label></li>
              </ul>








            </div>

            <div className="main-category">
              <ul>
                <h3 className="cat-headers">Licenses</h3>
                <li><FormControlLabel control={<Checkbox size="small" checked={data.rentalLicense} onChange={handleCheckboxChange('rentalLicense')} />} label="Rental license" /></li>
                <li><FormControlLabel control={<Checkbox size="small" checked={data.extraLicenseRequired} onChange={handleCheckboxChange('extraLicenseRequired')} />} label="Extra License required" /></li>
                <li><FormControlLabel control={<Checkbox size="small" checked={data.extraLicenceGMAG} onChange={handleCheckboxChange('extraLicenceGMAG')} />} label="Extra License type GreeceMAG" /></li>
              </ul>



            </div>

            <div className="main-category">
              <ul>
                <h3 className="cat-headers">Extra Parties & Eco</h3>
                <li><FormControlLabel control={<Checkbox size="small" checked={data.extraEcoHouse} onChange={handleCheckboxChange('extraEcoHouse')} />} label="Extra Eco house" /></li>
                <li><FormControlLabel control={<Checkbox size="small" checked={data.extraPartiesNotAllowed} onChange={handleCheckboxChange('extraPartiesNotAllowed')} />} label="Extra Parties not allowed" /></li>
                <li><FormControlLabel control={<Checkbox size="small" checked={data.extraPartiesAllowed} onChange={handleCheckboxChange('extraPartiesAllowed')} />} label="Extra Parties allowed" /></li>
              </ul>



            </div>


            <div className="main-category">
              <h3>Brief Description</h3>
              <TextField
                label={`Character Limit: ${maxCharacters - roomDescription.length} characters left`}
                multiline
                rows={16}
                variant="outlined"
                value={roomDescription}
                fullWidth
                onChange={e => updateFields({ roomDescription: e.target.value })}
              />
            </div>
          </div>

        
      </FormGroup>
    </FormWrapper>
  )
}

