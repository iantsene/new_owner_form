import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import { FormDataTypes } from "@/app/types/all-form-types";



type UserFormProps = FormDataTypes & {
updateFields: (fields: Partial<FormDataTypes>) => void

}
export default function Sports({
    
    
    basketballCourt,
    cycling,
    crossCountrySkiing,
    deepseaFishing,
    equestrianEvents,
    fishing,
    fishingBay,
    fishingFly,
    fishingFreshwater,
    fishingSurf,
    golf,
    golfOptional,
    hiking,
    hotAirBallooning,
    hunting,
    area,
    sports,
    iceSkating,
    jetSkiing,
    kayaking,
    mountainBiking,
    mountainClimbing,
    mountaineering,
    paragliding,
    parasailing,
    pierFishing,
    rafting,
    racquetball,
    rockClimbing,
    rollerBlading,
    sailing,
    skiLiftPrivileges,
    skiLiftPrivilegesOptional,
    skiing,
    skiingWater,
    snorkeling,
    snowboarding,
    snowmobiling,
    spelunking,
    surfing,
    swimming,
    tennis,
    whitewaterRafting,
    windSurfing,
    sportsSnorkelingDiving,
    sportsTubingWater,
    powerBoatRental,
    scubaOrSnorkeling,

    updateFields, data, handleFieldChange }: UserFormProps) {

    const handleCheckboxChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Sports">
             <FormGroup>
            <div className="extra-categories">
           
            <div className="category-styling">
              <h3>Sports</h3>
        
        <FormControlLabel control={<Checkbox size="small" checked={data.basketballCourt} onChange={handleCheckboxChange('basketballCourt')} />} label="basketball court" />
        <FormControlLabel control={<Checkbox size="small" checked={data.cycling} onChange={handleCheckboxChange('cycling')} />} label="cycling" />
        <FormControlLabel control={<Checkbox size="small" checked={data.crossCountrySkiing} onChange={handleCheckboxChange('crossCountrySkiing')} />} label="Cross country skiing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.deepseaFishing} onChange={handleCheckboxChange('deepseaFishing')} />} label="Deepsea fishing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.equestrianEvents} onChange={handleCheckboxChange('equestrianEvents')} />} label="Equestrian events" />
        <FormControlLabel control={<Checkbox size="small" checked={data.fishing} onChange={handleCheckboxChange('fishing')} />} label="Fishing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.fishingBay} onChange={handleCheckboxChange('fishingBay')} />} label="Fishing bay" />
        <FormControlLabel control={<Checkbox size="small" checked={data.fishingFly} onChange={handleCheckboxChange('fishingFly')} />} label="Fishing fly" />
        <FormControlLabel control={<Checkbox size="small" checked={data.fishingFreshwater} onChange={handleCheckboxChange('fishingFreshwater')} />} label="Fishing freshwater" />
        <FormControlLabel control={<Checkbox size="small" checked={data.fishingSurf} onChange={handleCheckboxChange('fishingSurf')} />} label="Fishing surf" />
        <FormControlLabel control={<Checkbox size="small" checked={data.golf} onChange={handleCheckboxChange('golf')} />} label="Golf" />
        <FormControlLabel control={<Checkbox size="small" checked={data.golfOptional} onChange={handleCheckboxChange('golfOptional')} />} label="Golf optional" />
        <FormControlLabel control={<Checkbox size="small" checked={data.hiking} onChange={handleCheckboxChange('hiking')} />} label="Hiking" />
        <FormControlLabel control={<Checkbox size="small" checked={data.hotAirBallooning} onChange={handleCheckboxChange('hotAirBallooning')} />} label="Hot air ballooning" />
        <FormControlLabel control={<Checkbox size="small" checked={data.hunting} onChange={handleCheckboxChange('hunting')} />} label="Hunting" />
        <FormControlLabel control={<Checkbox size="small" checked={data.area} onChange={handleCheckboxChange('area')} />} label="Area" />
        <FormControlLabel control={<Checkbox size="small" checked={data.sports} onChange={handleCheckboxChange('sports')} />} label="Sports" />
        <FormControlLabel control={<Checkbox size="small" checked={data.iceSkating} onChange={handleCheckboxChange('iceSkating')} />} label="Ice skating" />
        <FormControlLabel control={<Checkbox size="small" checked={data.jetSkiing} onChange={handleCheckboxChange('jetSkiing')} />} label="Jet skiing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.kayaking} onChange={handleCheckboxChange('kayaking')} />} label="Kayaking" />
        <FormControlLabel control={<Checkbox size="small" checked={data.mountainBiking} onChange={handleCheckboxChange('mountainBiking')} />} label="Mountain biking" />
        <FormControlLabel control={<Checkbox size="small" checked={data.mountainClimbing} onChange={handleCheckboxChange('mountainClimbing')} />} label="Mountain climbing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.mountaineering} onChange={handleCheckboxChange('mountaineering')} />} label="Mountaineering" />
        <FormControlLabel control={<Checkbox size="small" checked={data.paragliding} onChange={handleCheckboxChange('paragliding')} />} label="Paragliding" />
        <FormControlLabel control={<Checkbox size="small" checked={data.parasailing} onChange={handleCheckboxChange('parasailing')} />} label="Parasailing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.pierFishing} onChange={handleCheckboxChange('pierFishing')} />} label="Pier fishing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.rafting} onChange={handleCheckboxChange('rafting')} />} label="Rafting" />
        <FormControlLabel control={<Checkbox size="small" checked={data.racquetball} onChange={handleCheckboxChange('racquetball')} />} label="Racquetball" />
        <FormControlLabel control={<Checkbox size="small" checked={data.rockClimbing} onChange={handleCheckboxChange('rockClimbing')} />} label="Rock climbing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.rollerBlading} onChange={handleCheckboxChange('rollerBlading')} />} label="Roller blading" />
        <FormControlLabel control={<Checkbox size="small" checked={data.sailing} onChange={handleCheckboxChange('sailing')} />} label="Sailing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.skiLiftPrivileges} onChange={handleCheckboxChange('skiLiftPrivileges')} />} label="Ski lift privilegesoptional" />
        <FormControlLabel control={<Checkbox size="small" checked={data.skiLiftPrivilegesOptional} onChange={handleCheckboxChange('skiLiftPrivilegesOptional')} />} label="Skiing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.skiing} onChange={handleCheckboxChange('Skiing')} />} label="Skiing water" />
        <FormControlLabel control={<Checkbox size="small" checked={data.skiingWater} onChange={handleCheckboxChange('skiingWater')} />} label="Snorkeling" />
        <FormControlLabel control={<Checkbox size="small" checked={data.snorkeling} onChange={handleCheckboxChange('snorkeling')} />} label="Snowboarding" />
        <FormControlLabel control={<Checkbox size="small" checked={data.snowboarding} onChange={handleCheckboxChange('snowboarding')} />} label="Snowmobiling" />
        <FormControlLabel control={<Checkbox size="small" checked={data.snowmobiling} onChange={handleCheckboxChange('snowmobiling')} />} label="Spelunking" />
        <FormControlLabel control={<Checkbox size="small" checked={data.spelunking} onChange={handleCheckboxChange('spelunking')} />} label="Surfing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.surfing} onChange={handleCheckboxChange('surfing')} />} label="Swimming" />
        <FormControlLabel control={<Checkbox size="small" checked={data.swimming} onChange={handleCheckboxChange('swimming')} />} label="Tennis" />
        <FormControlLabel control={<Checkbox size="small" checked={data.tennis} onChange={handleCheckboxChange('tennis')} />} label="Whitewater rafting" />
        <FormControlLabel control={<Checkbox size="small" checked={data.whitewaterRafting} onChange={handleCheckboxChange('whitewaterRafting')} />} label="Wind surfing" />
        <FormControlLabel control={<Checkbox size="small" checked={data.windSurfing} onChange={handleCheckboxChange('windSurfing')} />} label="Sports snorkeling diving" />
        <FormControlLabel control={<Checkbox size="small" checked={data.sportsSnorkelingDiving} onChange={handleCheckboxChange('sportsSnorkelingDiving')} />} label="Sports tubing water" />
        <FormControlLabel control={<Checkbox size="small" checked={data.sportsTubingWater} onChange={handleCheckboxChange('sportsTubingWater')} />} label="Power boat rental" />
        <FormControlLabel control={<Checkbox size="small" checked={data.powerBoatRental} onChange={handleCheckboxChange('powerBoatRental')} />} label="Power boat rental" />
        <TextField id="outlined-basic" size="small" label="Scuba or snorkeling" variant="outlined" value={scubaOrSnorkeling} onChange={e => updateFields({scubaOrSnorkeling : e.target.value})} />
        </div>
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}
