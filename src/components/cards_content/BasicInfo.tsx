import * as React from "react";
import { useState } from "react";
import { FormControlLabel, FormGroup, InputBase, RadioGroup, Radio, FormControl, InputLabel, Select, OutlinedInput, MenuItem, SelectChangeEvent } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import VillaIcon from "@mui/icons-material/Villa";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CottageIcon from "@mui/icons-material/Cottage";
import HouseIcon from "@mui/icons-material/House";
import CustomTextField from "../reuseable-components/CustomTextField";
import DropdownSelect from "../reuseable-components/DropdownSelect";
import { useFormData } from "@/app/contexts/form";
import CustomCheckbox from "../reuseable-components/CustomCheckbox";


export default function BasicInfo() {
  const { value, setValue, handleFieldChange } = useFormData();
  const [isOpen, setIsOpen] = useState({
    bedroomBeds: false,
    commonAreaBeds: false,
    commonBaths: false 
  });
    

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange('basicInfo', fieldName, e.target.checked);
  };

  const handleRadioGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange("basicInfo", "lodgingType", e.target.value);
  };



const handleBedroomChange = (e:  SelectChangeEvent<number>) => {
  const selectedValue = e.target.value;
  setValue({
    basicInfo: {
      ...value.basicInfo,
      bedroomNumber: selectedValue as number},
    bedsNbaths: {
      ...value.bedsNbaths,
      bedrooms: new Array(selectedValue).fill(0).map(() => ({
        bedroomType: "",
        level: "",
        beds: [],
        enSuiteTypes: [{ type: "", subtype: "" }],
        heating: [],
      })),
    },
  });
};


const handleCommonAreaBedsChange = (e:  SelectChangeEvent<number>) => {
  const selectedValue = e.target.value;

  setValue({
    basicInfo: {
      ...value.basicInfo,
      commonAreaBedsNumber: selectedValue as number},
    bedsNbaths: {
      ...value.bedsNbaths,
      commonAreaBeds: selectedValue !== 0 ? [{
        level: '',
        commonBeds: [],
      }] : [],
    },
  });
};


const handleCommonBathsChange = (e:  SelectChangeEvent<number>) => {
  const selectedValue = e.target.value;

  setValue({
    basicInfo: {
      ...value.basicInfo,
      bathroomNumber: selectedValue as number},
    bedsNbaths: {
      ...value.bedsNbaths,
      commonBaths: selectedValue != 0 ? [{
        level: '',
        commonBathTypes: [{type: '', subtype: ''}],
      }] : [],
    },
  });
};




const bednbathOptions= [
  { value: 1, label: "one (1)" },
  { value: 2, label: "two (2)" },
  { value: 3, label: "three (3)" },
  { value: 4, label: "four (4)" },
  { value: 5, label: "five (5)" },
  { value: 6, label: "six (6)" },
  { value: 7, label: "seven (7)" },
];
      

  return (
    <FormWrapper title="Basic info">
      <div className="category-description">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut
          error! Aperiam ducimus inventore nisi cupiditate facilis consectetur
          ea officia quaerat, quam neque quo reiciendis nobis iste cum quis
          perspiciatis.
        </span>
      </div>
      <FormGroup>
        <>
          <div className="property-type-cat main-category">
            <h3>Property type</h3>
            <RadioGroup
              className="radio-group"
              row
              aria-labelledby="lodge-label"
              name="lodging-types"
              value={value.basicInfo.lodgingType}
              onChange={handleRadioGroupChange}
            >
              <ul className="multi-options-grid">
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange("villa")} />} value="villa" label={<div className="label-content"><VillaIcon /><span className="checkbox-tags">Villa</span> </div> } /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange("apartment")} />} value="apartment" label={<div className="label-content"><ApartmentIcon /><span className="checkbox-tags">Apartment</span> </div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange("maisonette")} />} value="maisonette" label={<div className="label-content"><img src="/Icons/maisonette.png" /><span className="checkbox-tags">Maisonette</span></div> } /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange("room")} />} value="room" label={<div className="label-content"><img src="/Icons/icons8-room-24.png" /><span className="checkbox-tags">Room</span></div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange("studio")} />} value="studio" label={<div className="label-content"><img src="/Icons/studio.png" /><span className="checkbox-tags">Studio</span></div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange("cottage")} />} value="cottage" label={<div className="label-content"><CottageIcon /><span className="checkbox-tags">Cottage</span></div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange("bangalow")} />} value="bangalow" label={<div className="label-content"><img src="/Icons/icons8-bungalow-24.png" /><span className="checkbox-tags">Bangalow</span></div>} /></li>
                <li className="list-items"><FormControlLabel control={<Radio size="small" onChange={handleCheckboxChange("house")} />} value="house" label={<div className="label-content"><HouseIcon /><span className="checkbox-tags">House</span></div>} /></li>
              </ul>
            </RadioGroup>
          </div>
        </>

        <div className="pool-yes-no main-category">
          <h3>Pool option</h3>
          <span>Is there a pool on the premises?</span>
          <div className="pool-option">
            <CustomCheckbox
              label="Pool exists"
              highlightedMessage='important!'
              value={value.basicInfo.poolExists}
              onChange={handleCheckboxChange("poolExists")}
            />
          </div>
        </div>

        <div className="general-info-categories">
          <div className="media-query-custom-grid">
            <div className="check-in-cat main-category">
              <h3>Check-in options</h3>
              <ul className="media-query-custom-breakpoint">
                <li className="list-items"><img src="/Icons/icon-placeholder.png" /><div className="label"><span>Check-in Time:</span><InputBase type="time" value={value.basicInfo.checkInTime} onChange={(e) => setValue({basicInfo: {...value.basicInfo, checkInTime: e.target.value}})} /></div></li>
                <CustomCheckbox label="Self Check-in" value={value.basicInfo.selfCheckIn} onChange={handleCheckboxChange("selfCheckIn")} />
                <li className="list-items"><img src="/Icons/icon-placeholder.png" /><div className="label"><span>Check-out Time:</span><InputBase type="time" value={value.basicInfo.checkOutTime} onChange={(e) => setValue({basicInfo: {...value.basicInfo, checkOutTime: e.target.value}})} /></div></li>
                <CustomCheckbox label="Luggage Check-in" value={value.basicInfo.luggageCheckIn} onChange={handleCheckboxChange("luggageCheckIn")} />
                <li className="list-items"><img src="/Icons/icon-placeholder.png" /><div className="label"><span>Luggage drop-off time:</span><InputBase type="time" value={value.basicInfo.luggageDropTime} onChange={(e) => setValue({basicInfo: {...value.basicInfo, luggageDropTime: e.target.value}})} id="lgdrop" /></div></li>
              </ul>
            </div>

            <div className="licenses-cat main-category">
              <h3>Licenses</h3>
              <ul className="media-query-custom-breakpoint">
                <CustomCheckbox label="Rental license" value={value.basicInfo.rentalLicense} onChange={handleCheckboxChange("rentalLicense")} /> 
                <CustomCheckbox label="license required" value={value.basicInfo.extraLicenseRequired} onChange={handleCheckboxChange("extraLicenseRequired")} />
                <CustomTextField label="License type" type="text" value={value.basicInfo.extraLicenseType} onChange={(e) => setValue({basicInfo: {...value.basicInfo, extraLicenseType: e}})} />
              </ul>
            </div>

            <div className="occupancy">
              <h3>Max property occupancy</h3>
              <div className="select-flex">
                <DropdownSelect
                  label="Max number of persons:"
                  state={value.basicInfo.maxPaxNumber}
                  fieldName="basicInfo.maxPaxNumber"
                  handleFieldChange={handleFieldChange}
                  id={"max-pax-select"}
                  required
                  options={[
                    { value: 1, label: "one" },
                    { value: 2, label: "two" },
                    { value: 3, label: "three" },
                    { value: 4, label: "four" },
                  ]}
                />
              </div>

              <div className="select-flex">
                <DropdownSelect
                  label="Max number of adults:"
                  state={value.basicInfo.maxAdultsNumber}
                  fieldName="basicInfo.maxAdultsNumber"
                  handleFieldChange={handleFieldChange}
                  id={"max-adults-select"}
                  options={[
                    { value: 1, label: "one" },
                    { value: 2, label: "two" },
                    { value: 3, label: "three" },
                    { value: 4, label: "four" },
                  ]}
                />
              </div>

              <div className="select-flex">
                <DropdownSelect
                  label="Max number of children:"
                  state={value.basicInfo.maxChildrenNumber}
                  fieldName="basicInfo.maxChildrenNumber"
                  handleFieldChange={handleFieldChange}
                  id={"max-children-select"}
                  options={[
                    { value: 0, label: "none" },
                    { value: 1, label: "one" },
                    { value: 2, label: "two" },
                    { value: 3, label: "three" },
                    { value: 4, label: "four" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        

        <div className="bedsnbaths-brief main-category">
        <h3>Beds and Baths</h3>
  <p>How many beds and bathrooms do you have?</p>
<div className="beds">

  <h3>Bedrooms</h3>
  <div className="select-flex">
  <FormControl sx={{ m: 1, minWidth: 100 }} >
  <InputLabel id="bedrooms-select">Number of bedrooms</InputLabel>
    <Select
      id="bedrooms-select"
      open={isOpen.bedroomBeds}
      onClose={() => setIsOpen({...isOpen, bedroomBeds: false})}
      onOpen={() => setIsOpen({...isOpen, bedroomBeds: true})}
      value={value.basicInfo.bedroomNumber}
      onChange={(e: SelectChangeEvent<number>)=> handleBedroomChange(e)}
      input={<OutlinedInput label="Number of bedrooms" />}
    >
      {bednbathOptions.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  </div>



  <div className="baths">
  <h3>Common area bathrooms</h3>
  <div className="select-flex">
    <FormControl sx={{ m: 1, minWidth: 100 }} >
    <InputLabel id="bedrooms-select">Number of common bathrooms</InputLabel>
    <Select
      id="bedrooms-select"
      open={isOpen.commonBaths}
      onClose={() => setIsOpen({...isOpen, commonBaths: false})}
      onOpen={() => setIsOpen({...isOpen, commonBaths: true})}
      value={value.basicInfo.bathroomNumber}
      onChange={(e: SelectChangeEvent<number>) => handleCommonBathsChange(e)}
      input={<OutlinedInput label="Number of common bathrooms" />}
      >
      <MenuItem value={0}>
        <em>None</em>
      </MenuItem>
      {bednbathOptions.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
    </div> 


    <div className="extra-beds">
      <h3>Common area beds</h3>

      <div className="select-flex">
    <FormControl sx={{ m: 1, minWidth: 100 }} >
    <InputLabel id="bedrooms-select">Number of common area beds</InputLabel>
    <Select
      id="bedrooms-select"
      open={isOpen.commonAreaBeds}
      onClose={() => setIsOpen({...isOpen, commonAreaBeds: false})}
      onOpen={() => setIsOpen({...isOpen, commonAreaBeds: true})}
      value={value.basicInfo.commonAreaBedsNumber}
      onChange={(e: SelectChangeEvent<number>) => handleCommonAreaBedsChange(e)}
      input={<OutlinedInput label="Number of common area beds" />}
    >
      <MenuItem value={0}>
        <em>None</em>
      </MenuItem>
      {bednbathOptions.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
    </div> 

    <div className="select-flex">
      <DropdownSelect
        label="Number of sofa beds"
        state={value.basicInfo.sofaBedsNumber}
        fieldName="basicInfo.sofaBedsNumber"
        handleFieldChange={handleFieldChange}
        id={"sofaBeds-select"}
        options={[
          { value: 0, label: "none" },
          { value: 1, label: "one" },
          { value: 2, label: "two" },
          { value: 3, label: "three" },
          { value: 4, label: "four" },
          { value: 5, label: "five" },
          { value: 6, label: "six" },
          { value: 7, label: "seven" },
        ]}
      />
    </div> 

    <div className="select-flex">
      <DropdownSelect
        label="Number of camp beds"
        state={value.basicInfo.campBedsNumber}
        fieldName="basicInfo.campBedsNumber"
        handleFieldChange={handleFieldChange}
        id={"campBeds-select"}
        options={[
          { value: 0, label: "none" },
          { value: 1, label: "one" },
          { value: 2, label: "two" },
          { value: 3, label: "three" },
          { value: 4, label: "four" },
          { value: 5, label: "five" },
          { value: 6, label: "six" },
          { value: 7, label: "seven" },
        ]}
      />
    </div>

    <div className="select-flex">
      <DropdownSelect
        label="Number of folding beds"
        state={value.basicInfo.foldingBedsNumber}
        fieldName="basicInfo.foldingBedsNumber"
        handleFieldChange={handleFieldChange}
        id={"foldingBeds-select"}
        options={[
          { value: 0, label: "none" },
          { value: 1, label: "one" },
          { value: 2, label: "two" },
          { value: 3, label: "three" },
          { value: 4, label: "four" },
          { value: 5, label: "five" },
          { value: 6, label: "six" },
          { value: 7, label: "seven" },
        ]}
      />
    </div>

    <div className="select-flex">
      <DropdownSelect
        label="Number of cots"
        state={value.basicInfo.cotsNumber}
        fieldName="basicInfo.cotsNumber"
        handleFieldChange={handleFieldChange}
        id={"cots-select"}
        options={[
          { value: 0, label: "none" },
          { value: 1, label: "one" },
          { value: 2, label: "two" },
          { value: 3, label: "three" },
          { value: 4, label: "four" },
          { value: 5, label: "five" },
          { value: 6, label: "six" },
          { value: 7, label: "seven" },
        ]}
      />
    </div>
    </div>

    <div className="select-flex">
      <DropdownSelect
        label="Number of en-suite bathrooms"
        state={value.basicInfo.enSuiteBathsNumber}
        fieldName="basicInfo.enSuiteBathsNumber"
        handleFieldChange={handleFieldChange}
        id={"en-suite-baths-select"}
        options={[
          { value: 0, label: "none" },
          { value: 1, label: "one" },
          { value: 2, label: "two" },
          { value: 3, label: "three" },
          { value: 4, label: "four" },
          { value: 5, label: "five" },
          { value: 6, label: "six" },
          { value: 7, label: "seven" },
        ]}
      />
    </div>


    <div className="select-flex">
      <DropdownSelect
        label="Number of common baths:"
        state={value.basicInfo.commonBathsNumber}
        fieldName="basicInfo.commonBathsNumber"
        handleFieldChange={handleFieldChange}
        id={"common-baths-select"}
        options={[
          { value: 0, label: "none" },
          { value: 1, label: "one" },
          { value: 2, label: "two" },
          { value: 3, label: "three" },
          { value: 4, label: "four" },
          { value: 5, label: "five" },
          { value: 6, label: "six" },
          { value: 7, label: "seven" },
        ]}
      />
    </div>
  
</div>
</div>

</div>



<div className="property-address-category main-category">
<h3>Property Location</h3>
<p>Where is it located?</p>
<ul className="duo-options-grid mobile-tablet-list-class">
  <CustomTextField label="Property address" type="text" value={value.basicInfo.propertyAddress} onChange={(e) => setValue({basicInfo: {...value.basicInfo, propertyAddress: e}})} />
  <CustomTextField label="Post code" type="text" value={value.basicInfo.postCode} onChange={(e) => setValue({basicInfo: {...value.basicInfo, postCode: e}})} />
  <CustomTextField label="GPS latitude" type="text" value={value.basicInfo.gpsLatitude} onChange={(e) => setValue({basicInfo: {...value.basicInfo, gpsLatitude: e}})} />
  <CustomTextField label="GPS longitude" type="text" value={value.basicInfo.gpsLongitude} onChange={(e) => setValue({basicInfo: {...value.basicInfo, gpsLongitude: e}})} />
</ul>
</div>

      </FormGroup>
    </FormWrapper>
  );
}
