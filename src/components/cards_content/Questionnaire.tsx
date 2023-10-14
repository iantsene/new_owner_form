import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField, FormLabel, FormControl, RadioGroup, Radio } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";



type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function Questionnaire({






  updateFields, data, handleFieldChange }: UserFormProps) {

  const handleCheckboxChange = (fieldName: string) => (e) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  const handleRadioGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange('lodgingType', e.target.value);
  };

  const handleValueChange = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange(fieldName, e.target.value);
  };


    const { control, handleSubmit, watch } = useForm();
    const checked = watch('exists');

  


  return (
    <FormWrapper title="Basic info">
      <FormGroup>
      <div className="main-category">
            <h3>What type of lodging are you currently offering?</h3>
            <FormControl>
              <FormLabel id="lodge-label"></FormLabel>
              <RadioGroup
                className="radio-group"
                row
                aria-labelledby="lodge-label"
                name="lodging-types"
                value={data.lodgingType}
                onChange={handleRadioGroupChange}
              >
                <ul className="lodge-category">
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("villa")} />} value="villa" label="Villa" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("apartment")} />} value="apartment" label="Apartment" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("maissonette")} />} value="maissonette" label="Maissonette" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("room")} />} value="room" label="Room" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("studio")} />} value="studio" label="Studio" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("cottage")} />} value="cottage" label="Cottage" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("bangalow")} />} value="bangalow" label="Bangalow" /></li>
                  <li><FormControlLabel control={<Radio size="small" onChange={handleValueChange("house")} />} value="house" label="House" /></li>
                </ul>
                
              </RadioGroup>
            </FormControl>
          </div>

          <div className="main-category">
        <h3>what are the accessibility options?</h3>
          <ul>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.wheelchairFriendly} onChange={handleCheckboxChange('wheelchairFriendly')} />} label="Wheelchair friendly" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.childrenAllowed} onChange={handleCheckboxChange('childrenAllowed')} />} label="Children Allowed" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.petsAllowed} onChange={handleCheckboxChange('petsAllowed')} />}  label="Pets allowed" /></li>
            <li><FormControlLabel control={<Checkbox size="small" checked={data.smokingAllowed} onChange={handleCheckboxChange('smokingAllowed')} />} label="Smoking allowed" /></li>
          </ul>
        </div>

        <div className="main-category">
        <h3>does it have any view?</h3>
        <ul className="multi-options-grid">
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewBeachView} onChange={handleCheckboxChange('viewBeachView')} />} label="Beach view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewOcean} onChange={handleCheckboxChange('viewOcean')} />} label="Ocean view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewSea} onChange={handleCheckboxChange('viewSea')} />} label="Sea view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewBayView} onChange={handleCheckboxChange('viewBayView')} />} label="Bay view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.waterView} onChange={handleCheckboxChange('waterView')} />} label="Water view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewMarinaView} onChange={handleCheckboxChange('viewMarinaView')} />} label="Marina view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewPoolView} onChange={handleCheckboxChange('viewPoolView')} />} label="Pool view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewHarborView} onChange={handleCheckboxChange('viewHarborView')} />} label="Harbor view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewSunset} onChange={handleCheckboxChange('viewSunset')} />} label="Sunset view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewPanoramic} onChange={handleCheckboxChange('viewPanoramic')} />} label="Panoramic view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewSunrise} onChange={handleCheckboxChange('viewSunrise')} />} label="Sunrise view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewCountryside} onChange={handleCheckboxChange('viewCountryside')} />} label="Countryside view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewCityView} onChange={handleCheckboxChange('viewCityView')} />} label="City view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewGardenView} onChange={handleCheckboxChange('viewGardenView')} />} label="Garden view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewMountainView} onChange={handleCheckboxChange('viewMountainView')} />} label="Mountain view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewResortView} onChange={handleCheckboxChange('viewResortView')} />} label="Resort view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewValleyView} onChange={handleCheckboxChange('viewValleyView')} />} label="Valley view" /></li>
          <li><FormControlLabel control={<Checkbox size="small" checked={data.viewVineyardView} onChange={handleCheckboxChange('viewVineyardView')} />} label="Vineyard view" /></li>
        </ul>
        
        </div>

        <ul className="multi-options-grid">
       <li><label>Does it exist?</label>
        <Controller
          name="exists"
          control={control}
          defaultValue={false}
          render={({ field }) => <Checkbox {...field} />}
        />
        {checked && (
        <div>
          <label>Details:</label>
          <Controller
            name="details"
            control={control}
            rules={{ maxLength: 60 }}
            render={({ field }) => <TextField {...field} />}
          />
        </div>
      )}</li> 
     </ul>

      


      </FormGroup>
    </FormWrapper>
  )

      }
