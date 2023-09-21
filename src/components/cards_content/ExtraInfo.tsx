import { Checkbox, InputBase, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";


type UserData = {
checkInTime: string
checkOutTime: string
selfCheckIn: boolean
luggageCheckIn: boolean
luggageDropTime: string
rentalLicense: boolean
extraLicenseRequired: boolean
extraLicenceGMAG: boolean
extraEcoHouse: boolean
extraPartiesNotAllowed: boolean
extraPartiesAllowed: boolean

}

type UserFormProps = UserData & {
updateFields: (fields: Partial<UserData>) => void
}

export default function ExtraInfo({checkInTime, checkOutTime, luggageCheckIn, selfCheckIn, luggageDropTime, rentalLicense, extraLicenseRequired, extraLicenceGMAG, extraEcoHouse, extraPartiesNotAllowed, extraPartiesAllowed, updateFields, data, handleFieldChange }: UserFormProps) {

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
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
      
        
        <FormControlLabel control={<Checkbox checked={data.selfCheckIn} onChange={handleSelfCheckInChange('selfCheckIn')} />}  value={selfCheckIn} label="Self Check-in" />
        <FormControlLabel control={<Checkbox checked={data.luggageCheckIn} onChange={handleSelfCheckInChange('luggageCheckIn')} />} label="Luggage Check-in" />
        <label htmlFor="lgdrop">Luggage drop-off time:
        <InputBase className="time-inputs" type="time" value={luggageDropTime} onChange={e => updateFields({luggageDropTime : e.target.value})} id="lgdrop" /></label>
        </div>

        <div className="category-styling">
        <h3 className="cat-headers">Licenses</h3>
        <FormControlLabel control={<Checkbox checked={data.rentalLicense} onChange={handleSelfCheckInChange('rentalLicense')} />} label="Rental license" />
        <FormControlLabel control={<Checkbox checked={data.extraLicenseRequired} onChange={handleSelfCheckInChange('extraLicenseRequired')} />} label="Extra License required" />
        <FormControlLabel control={<Checkbox checked={data.extraLicenceGMAG} onChange={handleSelfCheckInChange('extraLicenceGMAG')} />} label="Extra License type GreeceMAG" />
        </div>

        <div className="category-styling">
        <h3 className="cat-headers">Extra Parties & Eco</h3>
        <FormControlLabel control={<Checkbox checked={data.extraEcoHouse} onChange={handleSelfCheckInChange('extraEcoHouse')} />} label="Extra Eco house" />
        <FormControlLabel control={<Checkbox checked={data.extraPartiesNotAllowed} onChange={handleSelfCheckInChange('extraPartiesNotAllowed')} />} label="Extra Parties not allowed" />
        <FormControlLabel control={<Checkbox checked={data.extraPartiesAllowed} onChange={handleSelfCheckInChange('extraPartiesAllowed')} />} label="Extra Parties allowed" />
        </div>
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}

