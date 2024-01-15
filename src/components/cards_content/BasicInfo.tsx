import * as React from "react";
import { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputBase,
  RadioGroup,
  Radio,
} from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";
import VillaIcon from "@mui/icons-material/Villa";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CottageIcon from "@mui/icons-material/Cottage";
import HouseIcon from "@mui/icons-material/House";
import CustomTextField from "../reuseable-components/CustomTextField";
import DropdownSelect from "../reuseable-components/DropdownSelect";
import { useFormData } from "@/app/contexts/form";


export default function BasicInfo() {
  const { value, setValue, handleFieldChange } = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const handleRadioGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange("lodgingType", e.target.value);
  };

  const handleBedroomChange = (e: string, numRooms: number) => {
    setValue({
      bedroomNumber: numRooms,
      bedrooms: new Array(numRooms).fill(0).map(() => ({
        beds: [],
        heating: false,
        type: "double",
      })),
    });
  };

  const mainCategories = [
    {
      title: "Beds and baths",
      description: "How many beds and bathrooms do you have?",
      content: (
        <>
          <div className="bedsnbaths-brief main-category">
            <div className="beds">
              <div className="select-flex">
                <DropdownSelect
                  label="Number of bedrooms:"
                  // state={bedroomNumber}
                  state={value.bedroomNumber}
                  fieldName="bedroomNumber"
                  handleFieldChange={handleBedroomChange}
                  id={"bedrooms-select"}
                  options={[
                    { value: 1, label: "one" },
                    { value: 2, label: "two" },
                    { value: 3, label: "three" },
                    { value: 4, label: "four" },
                    { value: 5, label: "five" },
                    { value: 6, label: "six" },
                    { value: 7, label: "seven" },
                  ]}
                />

                <div className="select-flex">
                  <DropdownSelect
                    label="Number of sofa beds:"
                    state={value.sofaBedsNumber}
                    fieldName="sofaBedsNumber"
                    handleFieldChange={handleFieldChange}
                    id={"sofaBeds-select"}
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
                    label="Number of camp beds:"
                    state={value.campBedsNumber}
                    fieldName="campBedsNumber"
                    handleFieldChange={handleFieldChange}
                    id={"campBeds-select"}
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
                    label="Number of folding beds:"
                    state={value.foldingBedsNumber}
                    fieldName="foldingBedsNumber"
                    handleFieldChange={handleFieldChange}
                    id={"foldingBeds-select"}
                    options={[
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
                    label="Number of cots:"
                    state={value.cotsNumber}
                    fieldName="cotsNumber"
                    handleFieldChange={handleFieldChange}
                    id={"cots-select"}
                    options={[
                      { value: 1, label: "one" },
                      { value: 2, label: "two" },
                      { value: 3, label: "three" },
                      { value: 4, label: "four" },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="baths">
              <div className="select-flex">
                <DropdownSelect
                  label="Number of bathrooms:"
                  state={value.bathroomNumber}
                  fieldName="bathroomNumber"
                  handleFieldChange={handleFieldChange}
                  id={"bathrooms-select"}
                  options={[
                    { value: 1, label: "one" },
                    { value: 2, label: "two" },
                    { value: 3, label: "three" },
                    { value: 4, label: "four" },
                    { value: 5, label: "five" },
                    { value: 6, label: "six" },
                    { value: 7, label: "seven" },
                  ]}
                />

                <div className="select-flex">
                  <DropdownSelect
                    label="Number of en-suite bathrooms:"
                    state={value.enSuiteBathsNumber}
                    fieldName="enSuiteBathsNumber"
                    handleFieldChange={handleFieldChange}
                    id={"en-suite-baths-select"}
                    options={[
                      { value: 1, label: "one" },
                      { value: 2, label: "two" },
                      { value: 3, label: "three" },
                      { value: 4, label: "four" },
                    ]}
                  />
                </div>

                {/* <div className="select-flex">
                  <DropdownSelect
                    elemLabel="Number of common baths:"
                    state={commonBathsNumber}
                    fieldName="commonBathsNumber"
                    handleFieldChange={handleFieldChange}
                    id={"common-baths-select"}
                    options={[
                      { value: 1, label: "one" },
                      { value: 2, label: "two" },
                      { value: 3, label: "three" },
                      { value: 4, label: "four" },
                    ]}
                  />
                </div> */}

                <div className="select-flex">
                  <DropdownSelect
                    label="Number of common baths:"
                    state={value.commonBathsNumber}
                    fieldName="commonBathsNumber"
                    handleFieldChange={handleFieldChange}
                    id={"common-baths-select"}
                    options={[
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
        </>
      ),
    },
    {
      title: "Property location",
      description: "Where is it located?",
      content: (
        <>
          <div className="property-address-category main-category">
            <ul className="duo-options-grid mobile-tablet-list-class">
              <li className="list-item-container">
                <img
                  className="icon"
                  src="/Icons/icon-placeholder.png"
                  alt="icon"
                />
                <div className="label">
                  <span>Property address:</span>
                  <CustomTextField
                    label="Property address"
                    type="text"
                    value={value.propertyAddress}
                    icon={
                      <img
                        className="textfield-icon"
                        src="/Icons/icon-placeholder.png"
                        alt="icon"
                      />
                    }
                    onChange={(e) => setValue({ propertyAddress: e })}
                  ></CustomTextField>
                </div>
              </li>
              <li className="list-item-container">
                <img
                  className="icon"
                  src="/Icons/icon-placeholder.png"
                  alt="icon"
                />
                <div className="label">
                  <span>Post code:</span>
                  <CustomTextField
                    label="Post code"
                    type="text"
                    value={value.postCode}
                    icon={
                      <img
                        className="textfield-icon"
                        src="/Icons/icon-placeholder.png"
                        alt="icon"
                      />
                    }
                    onChange={(e) => setValue({ postCode: e })}
                  ></CustomTextField>
                </div>
              </li>
              <li className="list-item-container">
                <img
                  className="icon"
                  src="/Icons/icon-placeholder.png"
                  alt="icon"
                />
                <div className="label">
                  <span>GPS latitude:</span>
                  <CustomTextField
                    label="GPS latitude"
                    type="text"
                    value={value.gpsLatitude}
                    icon={
                      <img
                        className="textfield-icon"
                        src="/Icons/icon-placeholder.png"
                        alt="icon"
                      />
                    }
                    onChange={(e) => setValue({ gpsLatitude: e })}
                  ></CustomTextField>
                </div>
              </li>
              <li className="list-item-container">
                <img
                  className="icon"
                  src="/Icons/icon-placeholder.png"
                  alt="icon"
                />
                <div className="label">
                  <span>GPS longitude:</span>
                  <CustomTextField
                    label="GPS longitude"
                    type="text"
                    value={value.gpsLongitude}
                    icon={
                      <img
                        className="textfield-icon"
                        src="/Icons/icon-placeholder.png"
                        alt="icon"
                      />
                    }
                    onChange={(e) => setValue({ gpsLongitude: e })}
                  ></CustomTextField>
                </div>
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ];

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  console.log(value.bedroomNumber);

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
              value={value.lodgingType}
              onChange={handleRadioGroupChange}
            >
              <ul className="multi-options-grid">
                <li className="list-items">
                  <FormControlLabel
                    control={
                      <Radio
                        size="small"
                        onChange={handleCheckboxChange("villa")}
                      />
                    }
                    value="villa"
                    label={
                      <div className="label-content">
                        <VillaIcon />
                        <span className="checkbox-tags">Villa</span>
                      </div>
                    }
                  />
                </li>
                <li className="list-items">
                  <FormControlLabel
                    control={
                      <Radio
                        size="small"
                        onChange={handleCheckboxChange("apartment")}
                      />
                    }
                    value="apartment"
                    label={
                      <div className="label-content">
                        <ApartmentIcon />
                        <span className="checkbox-tags">Apartment</span>
                      </div>
                    }
                  />
                </li>
                <li className="list-items">
                  <FormControlLabel
                    control={
                      <Radio
                        size="small"
                        onChange={handleCheckboxChange("maisonette")}
                      />
                    }
                    value="maisonette"
                    label={
                      <div className="label-content">
                        <img src="/Icons/maisonette.png" />
                        <span className="checkbox-tags">Maisonette</span>
                      </div>
                    }
                  />
                </li>
                <li className="list-items">
                  <FormControlLabel
                    control={
                      <Radio
                        size="small"
                        onChange={handleCheckboxChange("room")}
                      />
                    }
                    value="room"
                    label={
                      <div className="label-content">
                        <img src="/Icons/icons8-room-24.png" />
                        <span className="checkbox-tags">Room</span>
                      </div>
                    }
                  />
                </li>
                <li className="list-items">
                  <FormControlLabel
                    control={
                      <Radio
                        size="small"
                        onChange={handleCheckboxChange("studio")}
                      />
                    }
                    value="studio"
                    label={
                      <div className="label-content">
                        <img src="/Icons/studio.png" />
                        <span className="checkbox-tags">Studio</span>
                      </div>
                    }
                  />
                </li>
                <li className="list-items">
                  <FormControlLabel
                    control={
                      <Radio
                        size="small"
                        onChange={handleCheckboxChange("cottage")}
                      />
                    }
                    value="cottage"
                    label={
                      <div className="label-content">
                        <CottageIcon />
                        <span className="checkbox-tags">Cottage</span>
                      </div>
                    }
                  />
                </li>
                <li className="list-items">
                  <FormControlLabel
                    control={
                      <Radio
                        size="small"
                        onChange={handleCheckboxChange("bangalow")}
                      />
                    }
                    value="bangalow"
                    label={
                      <div className="label-content">
                        <img src="/Icons/icons8-bungalow-24.png" />
                        <span className="checkbox-tags">Bangalow</span>
                      </div>
                    }
                  />
                </li>
                <li className="list-items">
                  <FormControlLabel
                    control={
                      <Radio
                        size="small"
                        onChange={handleCheckboxChange("house")}
                      />
                    }
                    value="house"
                    label={
                      <div className="label-content">
                        <HouseIcon />
                        <span className="checkbox-tags">House</span>
                      </div>
                    }
                  />
                </li>
              </ul>
            </RadioGroup>
          </div>
        </>

        <div className="pool-yes-no main-category">
          <h3>Pool option</h3>
          <span>Is there a pool on the premises?</span>
          <div className="pool-option">
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={value.poolYesNo}
                  onChange={handleCheckboxChange("poolYesNo")}
                />
              }
              label={
                <div className="label-content">
                  <img src="/Icons/icon-placeholder.png" />
                  <span className="checkbox-tags">Pool exists?</span>
                </div>
              }
            />
          </div>
        </div>

        <div className="general-info-categories">
          <div className="media-query-custom-grid">
            <div className="check-in-cat main-category">
              <h3>Check-in options</h3>
              <ul className="media-query-custom-breakpoint">
                <li className="list-items">
                  <img src="/Icons/icon-placeholder.png" />
                  <div className="label">
                    <span>Check-in Time:</span>
                    <InputBase
                      type="time"
                      value={value.checkInTime}
                      onChange={(e) =>
                        setValue({ checkInTime: e.target.value })
                      }
                    />
                  </div>
                </li>
                <li className="list-items">
                  <FormControlLabel
                    label={
                      <div className="label-content">
                        <img src="/Icons/icon-placeholder.png" />
                        <span className="checkbox-tags">Self Check-in</span>
                      </div>
                    }
                    control={
                      <Checkbox
                        size="small"
                        checked={value.selfCheckIn}
                        onChange={handleCheckboxChange("selfCheckIn")}
                      />
                    }
                    labelPlacement="start"
                  />
                </li>
                <li className="list-items">
                  <img src="/Icons/icon-placeholder.png" />
                  <div className="label">
                    <span>Check-out Time:</span>
                    <InputBase
                      type="time"
                      value={value.checkOutTime}
                      onChange={(e) =>
                        setValue({ checkOutTime: e.target.value })
                      }
                    />
                  </div>
                </li>
                <li className="list-items">
                  <FormControlLabel
                    label={
                      <div className="label-content">
                        <img src="/Icons/icon-placeholder.png" />
                        <span className="checkbox-tags">Luggage Check-in</span>
                      </div>
                    }
                    control={
                      <Checkbox
                        size="small"
                        checked={value.luggageCheckIn}
                        onChange={handleCheckboxChange("luggageCheckIn")}
                      />
                    }
                    labelPlacement="start"
                  />
                </li>
                <li className="list-items">
                  <img src="/Icons/icon-placeholder.png" />
                  <div className="label">
                    <span>Luggage drop-off time:</span>
                    <InputBase
                      type="time"
                      value={value.luggageDropTime}
                      onChange={(e) =>
                        setValue({ luggageDropTime: e.target.value })
                      }
                      id="lgdrop"
                    />
                  </div>
                </li>
              </ul>
            </div>

            <div className="licenses-cat main-category">
              <h3>Licenses</h3>
              <ul className="media-query-custom-breakpoint">
                <li className="list-items">
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        checked={value.rentalLicense}
                        onChange={handleCheckboxChange("rentalLicense")}
                      />
                    }
                    label={
                      <div className="label-content">
                        <img src="/Icons/icon-placeholder.png" />
                        <span className="checkbox-tags">Rental license</span>
                      </div>
                    }
                  />
                </li>
                <li className="list-items wrap-below">
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        checked={value.extraLicenseRequired}
                        onChange={handleCheckboxChange("extraLicenseRequired")}
                      />
                    }
                    label={
                      <div className="label-content">
                        <img src="/Icons/icon-placeholder.png" />
                        <span className="checkbox-tags">
                          Extra license required
                        </span>
                      </div>
                    }
                  />
                </li>
                <li className="list-item-container">
                  <img
                    className="icon"
                    src="/Icons/icon-placeholder.png"
                    alt="icon"
                  />
                  <div className="label">
                    <span>Extra License type:</span>
                    <CustomTextField
                      label="Extra License type"
                      type="text"
                      value={value.extraLicenseType}
                      icon={
                        <img
                          className="textfield-icon"
                          src="/Icons/icon-placeholder.png"
                          alt="icon"
                        />
                      }
                      onChange={(e) => setValue({ extraLicenseType: e })}
                    ></CustomTextField>
                  </div>
                </li>
              </ul>
            </div>

            <div className="occupancy">
              <h3>Occupancy</h3>
              <div className="select-flex">
                <DropdownSelect
                  label="Max number of persons:"
                  state={value.maxPaxNumber}
                  fieldName="maxPaxNumber"
                  handleFieldChange={handleFieldChange}
                  id={"max-pax-select"}
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
                  state={value.maxAdultsNumber}
                  fieldName="maxAdultsNumber"
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
                  state={value.maxChildrenNumber}
                  fieldName="maxChildrenNumber"
                  handleFieldChange={handleFieldChange}
                  id={"max-children-select"}
                  options={[
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
        {mainCategories.map((category, index) => (
          <Accordion
            className="custom-accordion"
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography
                sx={{ width: "40%", fontWeight: "bold", flexShrink: 0 }}
              >
                {category.title}
              </Typography>
              <Typography sx={{ marginLeft: "20px", color: "text.secondary" }}>
                {category.description}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{category.content}</AccordionDetails>
          </Accordion>
        ))}
      </FormGroup>
    </FormWrapper>
  );
}
