import { Checkbox, FormControlLabel, FormGroup, InputBase } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";



type UserFormProps = FormDataTypes & {
updateFields: (fields: Partial<FormDataTypes>) => void

}

export default function Views({
viewOcean,
resort,
river,
rural,
skiIn,
skiOut,
town,
village,
waterView, 
waterfront,
viewSea,
viewSunset,
viewPanoramic,
viewSunrise,
viewCountryside,
viewBayView,
viewBeachView,
viewCityView,
viewGardenView,
viewHarborView,
viewMarinaView,
viewMountainView,
viewPoolView,
viewResortView,
viewValleyView,
viewVineyardView,

    updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Property Views">
             <FormGroup>
            <div className="extra-categories">
           
          
              
        <div className="category-styling">
        <h3>View of lodging</h3>
        <FormControlLabel control={<Checkbox size="small" checked={data.viewBeachView} onChange={handleCheckboxChange('viewBeachView')} />} label="Beach view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewOcean} onChange={handleCheckboxChange('viewOcean')} />} label="Ocean view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewSea} onChange={handleCheckboxChange('viewSea')} />} label="Sea view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewBayView} onChange={handleCheckboxChange('viewBayView')} />} label="Bay view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.waterView} onChange={handleCheckboxChange('waterView')} />} label="Water view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewMarinaView} onChange={handleCheckboxChange('viewMarinaView')} />} label="Marina view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewPoolView} onChange={handleCheckboxChange('viewPoolView')} />} label="Pool view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewHarborView} onChange={handleCheckboxChange('viewHarborView')} />} label="Harbor view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewSunset} onChange={handleCheckboxChange('viewSunset')} />} label="Sunset view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewPanoramic} onChange={handleCheckboxChange('viewPanoramic')} />} label="Panoramic view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewSunrise} onChange={handleCheckboxChange('viewSunrise')} />} label="Sunrise view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewCountryside} onChange={handleCheckboxChange('viewCountryside')} />} label="Countryside view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewCityView} onChange={handleCheckboxChange('viewCityView')} />} label="City view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewGardenView} onChange={handleCheckboxChange('viewGardenView')} />} label="Garden view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewMountainView} onChange={handleCheckboxChange('viewMountainView')} />} label="Mountain view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewResortView} onChange={handleCheckboxChange('viewResortView')} />} label="Resort view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewValleyView} onChange={handleCheckboxChange('viewValleyView')} />} label="Valley view" />
        <FormControlLabel control={<Checkbox size="small" checked={data.viewVineyardView} onChange={handleCheckboxChange('viewVineyardView')} />} label="Vineyard view" />
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}












