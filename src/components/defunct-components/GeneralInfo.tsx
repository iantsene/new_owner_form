import { Checkbox, FormControlLabel, FormGroup, TextField, InputBase, TextareaAutosize } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import AutosizeTextarea from '../reuseable-components/AutosizeTextarea';
import { useEffect, useState } from "react";

type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function GeneralInfo({  roomDescription, checkInTime, checkOutTime, luggageCheckIn, selfCheckIn, luggageDropTime, rentalLicense, extraLicenseRequired, extraLicenceGMAG, extraEcoHouse, extraPartiesNotAllowed, extraPartiesAllowed, updateFields, data, setData, handleFieldChange }: UserFormProps) {
 


  const handleCheckboxChange = (fieldName: string) => (e) => {
    handleFieldChange(fieldName, e.target.checked);
  };



  return (
    <FormWrapper title="General Information">
      <div className="category-description"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut error!
        Aperiam ducimus inventore nisi cupiditate facilis consectetur ea officia quaerat, quam neque quo reiciendis nobis iste cum quis perspiciatis.</span></div>
      <FormGroup>


      

        <div className="general-info-categories">

        <div className="main-category tablet-mq">
            <h3 className="cat-headers">Check-in options</h3>

            <ul>
              <li><img src="/Icons/icon-placeholder.png" /><label htmlFor="chkin">Check-in Time:<InputBase className="time-inputs" type="time" id="chkin" value={checkInTime} onChange={e => updateFields({ checkInTime: e.target.value })} /></label></li>
              <li><img src="/Icons/icon-placeholder.png" /><label htmlFor="chkout">Check-out Time:<InputBase className="time-inputs" type="time" id="chkout" value={checkOutTime} onChange={e => updateFields({ checkOutTime: e.target.value })} /></label></li>
              <li><img src="/Icons/icon-placeholder.png" /><label htmlFor="lgdrop">Luggage drop-off time:<InputBase className="time-inputs" type="time" value={luggageDropTime} onChange={e => updateFields({ luggageDropTime: e.target.value })} id="lgdrop" /></label></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={selfCheckIn} onChange={handleCheckboxChange('selfCheckIn')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Self Check-in</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={luggageCheckIn} onChange={handleCheckboxChange('luggageCheckIn')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Luggage Check-in</span></div>} /></li>
            </ul>
          </div>

          <div className="main-category">
            <ul>
              <h3 className="cat-headers">Licenses</h3>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={rentalLicense} onChange={handleCheckboxChange('rentalLicense')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Rental license</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={extraLicenseRequired} onChange={handleCheckboxChange('extraLicenseRequired')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra License required</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={extraLicenceGMAG} onChange={handleCheckboxChange('extraLicenceGMAG')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra License type GreeceMAG</span></div>} /></li>
            </ul>



          </div>

          <div className="main-category">
            <ul>
              <h3 className="cat-headers">Extra Parties & Eco</h3>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={extraEcoHouse} onChange={handleCheckboxChange('extraEcoHouse')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra Eco house</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={extraPartiesNotAllowed} onChange={handleCheckboxChange('extraPartiesNotAllowed')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra Parties not allowed</span></div>} /></li>
              <li className="list-item"><FormControlLabel control={<Checkbox size="small" checked={extraPartiesAllowed} onChange={handleCheckboxChange('extraPartiesAllowed')} />} label={<div className="label-content"><img src="/Icons/icon-placeholder.png" /><span className="checkbox-tags">Extra Parties allowed</span></div>} /></li>
            </ul>



          </div>
        </div>

        <div className="textarea-category">
          <h3>Brief Description</h3>
          <AutosizeTextarea
          data={data}
          setData={setData}
          
          />
         
        </div>



      </FormGroup>
    </FormWrapper>
  )
}

