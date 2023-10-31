import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";

type UserFormProps = FormDataTypes & {
  updateFields: (fields: Partial<FormDataTypes>) => void
  
  }

export default function AttractionsLeisure({
    
    attractionBay,
    attractionAttractionscoinLaundry,
    attractionDutyFree,
    attractionHealthBeautyspa,
    attractionMarina,
    attractionMuseums,
    attractionThemeParks,
    attractionWaterParks,
    attractionWineryTours,
    attractionZoo,
    leisureAntiquing,
    leisureBirdWatching,
    leisureEcoTourism,
    leisureGambling,
    leisureHorsebackRiding,
    leisureOutletShopping,
    leisurePaddleBoating,
    leisureSledding,
    leisureBoating,
    leisureShopping,
    leisureWildLifeViewing,
    leisureWaterSports,
    leisureFitnessCenter,
    leisureHospital,
    leisureLaundromat,

    updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Attractions & Leisure">
             <FormGroup>
            <div className="extra-categories">
           
            <div className="category-styling">
              <h3>Attractions & Leisure</h3>
        <FormControlLabel control={<Checkbox size="small" checked={data.attractionBay} onChange={handleCheckboxChange('attractionBay')} />} label="Attraction Bay" />
        <FormControlLabel control={<Checkbox size="small" checked={data.attractionAttractionscoinLaundry} onChange={handleCheckboxChange('attractionAttractionscoinLaundry')} />} label="Attraction Attractionscoin laundry" />
        <FormControlLabel control={<Checkbox size="small" checked={data.attractionDutyFree} onChange={handleCheckboxChange('attractionDutyFree')} />} label="Attraction Duty free" />
        <FormControlLabel control={<Checkbox size="small" checked={data.attractionHealthBeautyspa} onChange={handleCheckboxChange('attractionHealthBeautyspa')} />} label="Attraction Health beautyspa" />
        <FormControlLabel control={<Checkbox size="small" checked={data.attractionMarina} onChange={handleCheckboxChange('attractionMarina')} />} label="Attraction Marina" />
        <FormControlLabel control={<Checkbox size="small" checked={data.attractionMuseums} onChange={handleCheckboxChange('attractionMuseums')} />} label="Attraction Museums" />
        <FormControlLabel control={<Checkbox size="small" checked={data.attractionThemeParks} onChange={handleCheckboxChange('attractionThemeParks')} />} label="Attraction Theme parks" />
        <FormControlLabel control={<Checkbox size="small" checked={data.attractionWaterParks} onChange={handleCheckboxChange('attractionWaterParks')} />} label="Attraction Water parks" />
        <FormControlLabel control={<Checkbox size="small" checked={data.attractionWineryTours} onChange={handleCheckboxChange('attractionWineryTours')} />} label="Attraction Winery tours" />
        <FormControlLabel control={<Checkbox size="small" checked={data.attractionZoo} onChange={handleCheckboxChange('attractionZoo')} />} label="Attraction Zoo" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureAntiquing} onChange={handleCheckboxChange('leisureAntiquing')} />} label="Leisure Antiquing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureBirdWatching} onChange={handleCheckboxChange('leisureBirdWatching')} />} label="Leisure Bird watching" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureEcoTourism} onChange={handleCheckboxChange('leisureEcoTourism')} />} label="Leisure Eco tourism" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureGambling} onChange={handleCheckboxChange('leisureGambling')} />} label="Leisure Gambling" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureHorsebackRiding} onChange={handleCheckboxChange('leisureHorsebackRiding')} />} label="Leisure Horseback riding" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureOutletShopping} onChange={handleCheckboxChange('leisureOutletShopping')} />} label="Leisure Outlet shopping" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisurePaddleBoating} onChange={handleCheckboxChange('leisurePaddleBoating')} />} label="Leisure Paddle boating" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureSledding} onChange={handleCheckboxChange('leisureSledding')} />} label="Leisure Sledding" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureBoating} onChange={handleCheckboxChange('leisureBoating')} />} label="Leisure Boating" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureShopping} onChange={handleCheckboxChange('leisureShopping')} />} label="Leisure Shopping" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureWildLifeViewing} onChange={handleCheckboxChange('leisureWildLifeViewing')} />} label="Leisure Wild lifeviewing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureWaterSports} onChange={handleCheckboxChange('leisureWaterSports')} />} label="Leisure Water sports" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureFitnessCenter} onChange={handleCheckboxChange('leisureFitnessCenter')} />} label="Leisure Fitness center" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureHospital} onChange={handleCheckboxChange('leisureHospital')} />} label="Leisure Hospital" />
        <FormControlLabel control={<Checkbox size="small" checked={data.leisureLaundromat} onChange={handleCheckboxChange('leisureLaundromat')} />} label="Leisure Laundromat" />
        
        </div>
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}
