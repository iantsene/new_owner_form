import { Checkbox, FormControlLabel, FormGroup, InputBase } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormData } from "@/app/types/all-form-types";



type UserFormProps = FormData & {
updateFields: (fields: Partial<FormData>) => void

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

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Property Views">
             <FormGroup>
            <div className="extra-categories">
           
          
              
        <div className="category-styling">
        <h3>View of lodging</h3>
        <FormControlLabel control={<Checkbox checked={data.viewBeachView} onChange={handleSelfCheckInChange('viewBeachView')} />} label="Beach view" />
        <FormControlLabel control={<Checkbox checked={data.viewOcean} onChange={handleSelfCheckInChange('viewOcean')} />} label="Ocean view" />
        <FormControlLabel control={<Checkbox checked={data.viewSea} onChange={handleSelfCheckInChange('viewSea')} />} label="Sea view" />
        <FormControlLabel control={<Checkbox checked={data.viewBayView} onChange={handleSelfCheckInChange('viewBayView')} />} label="Bay view" />
        <FormControlLabel control={<Checkbox checked={data.waterView} onChange={handleSelfCheckInChange('waterView')} />} label="Water view" />
        <FormControlLabel control={<Checkbox checked={data.viewMarinaView} onChange={handleSelfCheckInChange('viewMarinaView')} />} label="Marina view" />
        <FormControlLabel control={<Checkbox checked={data.viewPoolView} onChange={handleSelfCheckInChange('viewPoolView')} />} label="Pool view" />
        <FormControlLabel control={<Checkbox checked={data.viewHarborView} onChange={handleSelfCheckInChange('viewHarborView')} />} label="Harbor view" />
        <FormControlLabel control={<Checkbox checked={data.viewSunset} onChange={handleSelfCheckInChange('viewSunset')} />} label="Sunset view" />
        <FormControlLabel control={<Checkbox checked={data.viewPanoramic} onChange={handleSelfCheckInChange('viewPanoramic')} />} label="Panoramic view" />
        <FormControlLabel control={<Checkbox checked={data.viewSunrise} onChange={handleSelfCheckInChange('viewSunrise')} />} label="Sunrise view" />
        <FormControlLabel control={<Checkbox checked={data.viewCountryside} onChange={handleSelfCheckInChange('viewCountryside')} />} label="Countryside view" />
        <FormControlLabel control={<Checkbox checked={data.viewCityView} onChange={handleSelfCheckInChange('viewCityView')} />} label="City view" />
        <FormControlLabel control={<Checkbox checked={data.viewGardenView} onChange={handleSelfCheckInChange('viewGardenView')} />} label="Garden view" />
        <FormControlLabel control={<Checkbox checked={data.viewMountainView} onChange={handleSelfCheckInChange('viewMountainView')} />} label="Mountain view" />
        <FormControlLabel control={<Checkbox checked={data.viewResortView} onChange={handleSelfCheckInChange('viewResortView')} />} label="Resort view" />
        <FormControlLabel control={<Checkbox checked={data.viewValleyView} onChange={handleSelfCheckInChange('viewValleyView')} />} label="Valley view" />
        <FormControlLabel control={<Checkbox checked={data.viewVineyardView} onChange={handleSelfCheckInChange('viewVineyardView')} />} label="Vineyard view" />
       

        </div>
        
        

        
        
       
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}












