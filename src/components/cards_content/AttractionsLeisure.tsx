import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";


type UserData = {
    attractionBay: boolean
    attractionAttractionscoinLaundry: boolean
    attractionDutyFree: boolean
    attractionHealthBeautyspa: boolean
    attractionMarina: boolean
    attractionMuseums: boolean
    attractionThemeParks: boolean
    attractionWaterParks: boolean
    attractionWineryTours: boolean
    attractionZoo: boolean
    leisureAntiquing: boolean
    leisureBirdWatching: boolean
    leisureEcoTourism: boolean
    leisureGambling: boolean
    leisureHorsebackRiding: boolean
    leisureOutletShopping: boolean
    leisurePaddleBoating: boolean
    leisureSledding: boolean
    leisureBoating: boolean
    leisureShopping: boolean
    leisureWildLifeViewing: boolean
    leisureWaterSports: boolean
    leisureFitnessCenter: boolean
    leisureHospital: boolean
    leisureLaundromat: boolean

}

type UserFormProps = UserData & {
updateFields: (fields: Partial<UserData>) => void

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

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Attractions & Leisure">
             <FormGroup>
            <div className="extra-categories">
           
            <div className="category-styling">
              <h3>Attractions & Leisure</h3>
        <FormControlLabel control={<Checkbox checked={data.attractionBay} onChange={handleSelfCheckInChange('attractionBay')} />} label="Attraction Bay" />
        <FormControlLabel control={<Checkbox checked={data.attractionAttractionscoinLaundry} onChange={handleSelfCheckInChange('attractionAttractionscoinLaundry')} />} label="Attraction Attractionscoin laundry" />
        <FormControlLabel control={<Checkbox checked={data.attractionDutyFree} onChange={handleSelfCheckInChange('attractionDutyFree')} />} label="Attraction Duty free" />
        <FormControlLabel control={<Checkbox checked={data.attractionHealthBeautyspa} onChange={handleSelfCheckInChange('attractionHealthBeautyspa')} />} label="Attraction Health beautyspa" />
        <FormControlLabel control={<Checkbox checked={data.attractionMarina} onChange={handleSelfCheckInChange('attractionMarina')} />} label="Attraction Marina" />
        <FormControlLabel control={<Checkbox checked={data.attractionMuseums} onChange={handleSelfCheckInChange('attractionMuseums')} />} label="Attraction Museums" />
        <FormControlLabel control={<Checkbox checked={data.attractionThemeParks} onChange={handleSelfCheckInChange('attractionThemeParks')} />} label="Attraction Theme parks" />
        <FormControlLabel control={<Checkbox checked={data.attractionWaterParks} onChange={handleSelfCheckInChange('attractionWaterParks')} />} label="Attraction Water parks" />
        <FormControlLabel control={<Checkbox checked={data.attractionWineryTours} onChange={handleSelfCheckInChange('attractionWineryTours')} />} label="Attraction Winery tours" />
        <FormControlLabel control={<Checkbox checked={data.attractionZoo} onChange={handleSelfCheckInChange('attractionZoo')} />} label="Attraction Zoo" />
        <FormControlLabel control={<Checkbox checked={data.leisureAntiquing} onChange={handleSelfCheckInChange('leisureAntiquing')} />} label="Leisure Antiquing" />
        <FormControlLabel control={<Checkbox checked={data.leisureBirdWatching} onChange={handleSelfCheckInChange('leisureBirdWatching')} />} label="Leisure Bird watching" />
        <FormControlLabel control={<Checkbox checked={data.leisureEcoTourism} onChange={handleSelfCheckInChange('leisureEcoTourism')} />} label="Leisure Eco tourism" />
        <FormControlLabel control={<Checkbox checked={data.leisureGambling} onChange={handleSelfCheckInChange('leisureGambling')} />} label="Leisure Gambling" />
        <FormControlLabel control={<Checkbox checked={data.leisureHorsebackRiding} onChange={handleSelfCheckInChange('leisureHorsebackRiding')} />} label="Leisure Horseback riding" />
        <FormControlLabel control={<Checkbox checked={data.leisureOutletShopping} onChange={handleSelfCheckInChange('leisureOutletShopping')} />} label="Leisure Outlet shopping" />
        <FormControlLabel control={<Checkbox checked={data.leisurePaddleBoating} onChange={handleSelfCheckInChange('leisurePaddleBoating')} />} label="Leisure Paddle boating" />
        <FormControlLabel control={<Checkbox checked={data.leisureSledding} onChange={handleSelfCheckInChange('leisureSledding')} />} label="Leisure Sledding" />
        <FormControlLabel control={<Checkbox checked={data.leisureBoating} onChange={handleSelfCheckInChange('leisureBoating')} />} label="Leisure Boating" />
        <FormControlLabel control={<Checkbox checked={data.leisureShopping} onChange={handleSelfCheckInChange('leisureShopping')} />} label="Leisure Shopping" />
        <FormControlLabel control={<Checkbox checked={data.leisureWildLifeViewing} onChange={handleSelfCheckInChange('leisureWildLifeViewing')} />} label="Leisure Wild lifeviewing" />
        <FormControlLabel control={<Checkbox checked={data.leisureWaterSports} onChange={handleSelfCheckInChange('leisureWaterSports')} />} label="Leisure Water sports" />
        <FormControlLabel control={<Checkbox checked={data.leisureFitnessCenter} onChange={handleSelfCheckInChange('leisureFitnessCenter')} />} label="Leisure Fitness center" />
        <FormControlLabel control={<Checkbox checked={data.leisureHospital} onChange={handleSelfCheckInChange('leisureHospital')} />} label="Leisure Hospital" />
        <FormControlLabel control={<Checkbox checked={data.leisureLaundromat} onChange={handleSelfCheckInChange('leisureLaundromat')} />} label="Leisure Laundromat" />
        
        </div>
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}
