import { Checkbox, FormControlLabel, FormGroup, InputBase, TextField } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";


type UserData = {
    basketballCourt: boolean
    cycling: boolean
    crossCountrySkiing: boolean
    deepseaFishing: boolean
    equestrianEvents: boolean
    fishing: boolean
    fishingBay: boolean
    fishingFly: boolean
    fishingFreshwater: boolean
    fishingSurf: boolean
    golf: boolean
    golfOptional: boolean
    hiking: boolean
    hotAirBallooning: boolean
    hunting: boolean
    area: boolean
    sports: boolean
    iceSkating: boolean
    jetSkiing: boolean
    kayaking: boolean
    mountainBiking: boolean
    mountainClimbing: boolean
    mountaineering: boolean
    paragliding: boolean
    parasailing: boolean
    pierFishing: boolean
    rafting: boolean
    racquetball: boolean
    rockClimbing: boolean
    rollerBlading: boolean
    sailing: boolean
    skiLiftPrivileges: boolean
    skiLiftPrivilegesOptional: boolean
    skiing: boolean
    skiingWater: boolean
    snorkeling: boolean
    snowboarding: boolean
    snowmobiling: boolean
    spelunking: boolean
    surfing: boolean
    swimming: boolean
    tennis: boolean
    whitewaterRafting: boolean
    windSurfing: boolean
    sportsSnorkelingDiving: boolean
    sportsTubingWater: boolean
    powerBoatRental: boolean
    scubaOrSnorkeling: string

}

type UserFormProps = UserData & {
updateFields: (fields: Partial<UserData>) => void

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

    const handleSelfCheckInChange = (fieldName: string) => (e) => {
        handleFieldChange(fieldName, e.target.checked);
      };

    return (
        <FormWrapper title="Sports">
             <FormGroup>
            <div className="extra-categories">
           
            <div className="category-styling">
              <h3>Sports</h3>
        
        <FormControlLabel control={<Checkbox checked={data.basketballCourt} onChange={handleSelfCheckInChange('basketballCourt')} />} label="basketball court" />
        <FormControlLabel control={<Checkbox checked={data.cycling} onChange={handleSelfCheckInChange('cycling')} />} label="cycling" />
        <FormControlLabel control={<Checkbox checked={data.crossCountrySkiing} onChange={handleSelfCheckInChange('crossCountrySkiing')} />} label="Cross country skiing" />
        <FormControlLabel control={<Checkbox checked={data.deepseaFishing} onChange={handleSelfCheckInChange('deepseaFishing')} />} label="Deepsea fishing" />
        <FormControlLabel control={<Checkbox checked={data.equestrianEvents} onChange={handleSelfCheckInChange('equestrianEvents')} />} label="Equestrian events" />
        <FormControlLabel control={<Checkbox checked={data.fishing} onChange={handleSelfCheckInChange('fishing')} />} label="Fishing" />
        <FormControlLabel control={<Checkbox checked={data.fishingBay} onChange={handleSelfCheckInChange('fishingBay')} />} label="Fishing bay" />
        <FormControlLabel control={<Checkbox checked={data.fishingFly} onChange={handleSelfCheckInChange('fishingFly')} />} label="Fishing fly" />
        <FormControlLabel control={<Checkbox checked={data.fishingFreshwater} onChange={handleSelfCheckInChange('fishingFreshwater')} />} label="Fishing freshwater" />
        <FormControlLabel control={<Checkbox checked={data.fishingSurf} onChange={handleSelfCheckInChange('fishingSurf')} />} label="Fishing surf" />
        <FormControlLabel control={<Checkbox checked={data.golf} onChange={handleSelfCheckInChange('golf')} />} label="Golf" />
        <FormControlLabel control={<Checkbox checked={data.golfOptional} onChange={handleSelfCheckInChange('golfOptional')} />} label="Golf optional" />
        <FormControlLabel control={<Checkbox checked={data.hiking} onChange={handleSelfCheckInChange('hiking')} />} label="Hiking" />
        <FormControlLabel control={<Checkbox checked={data.hotAirBallooning} onChange={handleSelfCheckInChange('hotAirBallooning')} />} label="Hot air ballooning" />
        <FormControlLabel control={<Checkbox checked={data.hunting} onChange={handleSelfCheckInChange('hunting')} />} label="Hunting" />
        <FormControlLabel control={<Checkbox checked={data.area} onChange={handleSelfCheckInChange('area')} />} label="Area" />
        <FormControlLabel control={<Checkbox checked={data.sports} onChange={handleSelfCheckInChange('sports')} />} label="Sports" />
        <FormControlLabel control={<Checkbox checked={data.iceSkating} onChange={handleSelfCheckInChange('iceSkating')} />} label="Ice skating" />
        <FormControlLabel control={<Checkbox checked={data.jetSkiing} onChange={handleSelfCheckInChange('jetSkiing')} />} label="Jet skiing" />
        <FormControlLabel control={<Checkbox checked={data.kayaking} onChange={handleSelfCheckInChange('kayaking')} />} label="Kayaking" />
        <FormControlLabel control={<Checkbox checked={data.mountainBiking} onChange={handleSelfCheckInChange('mountainBiking')} />} label="Mountain biking" />
        <FormControlLabel control={<Checkbox checked={data.mountainClimbing} onChange={handleSelfCheckInChange('mountainClimbing')} />} label="Mountain climbing" />
        <FormControlLabel control={<Checkbox checked={data.mountaineering} onChange={handleSelfCheckInChange('mountaineering')} />} label="Mountaineering" />
        <FormControlLabel control={<Checkbox checked={data.paragliding} onChange={handleSelfCheckInChange('paragliding')} />} label="Paragliding" />
        <FormControlLabel control={<Checkbox checked={data.parasailing} onChange={handleSelfCheckInChange('parasailing')} />} label="Parasailing" />
        <FormControlLabel control={<Checkbox checked={data.pierFishing} onChange={handleSelfCheckInChange('pierFishing')} />} label="Pier fishing" />
        <FormControlLabel control={<Checkbox checked={data.rafting} onChange={handleSelfCheckInChange('rafting')} />} label="Rafting" />
        <FormControlLabel control={<Checkbox checked={data.racquetball} onChange={handleSelfCheckInChange('racquetball')} />} label="Racquetball" />
        <FormControlLabel control={<Checkbox checked={data.rockClimbing} onChange={handleSelfCheckInChange('rockClimbing')} />} label="Rock climbing" />
        <FormControlLabel control={<Checkbox checked={data.rollerBlading} onChange={handleSelfCheckInChange('rollerBlading')} />} label="Roller blading" />
        <FormControlLabel control={<Checkbox checked={data.sailing} onChange={handleSelfCheckInChange('sailing')} />} label="Sailing" />
        <FormControlLabel control={<Checkbox checked={data.skiLiftPrivileges} onChange={handleSelfCheckInChange('skiLiftPrivileges')} />} label="Ski lift privilegesoptional" />
        <FormControlLabel control={<Checkbox checked={data.skiLiftPrivilegesOptional} onChange={handleSelfCheckInChange('skiLiftPrivilegesOptional')} />} label="Skiing" />
        <FormControlLabel control={<Checkbox checked={data.skiing} onChange={handleSelfCheckInChange('Skiing')} />} label="Skiing water" />
        <FormControlLabel control={<Checkbox checked={data.skiingWater} onChange={handleSelfCheckInChange('skiingWater')} />} label="Snorkeling" />
        <FormControlLabel control={<Checkbox checked={data.snorkeling} onChange={handleSelfCheckInChange('snorkeling')} />} label="Snowboarding" />
        <FormControlLabel control={<Checkbox checked={data.snowboarding} onChange={handleSelfCheckInChange('snowboarding')} />} label="Snowmobiling" />
        <FormControlLabel control={<Checkbox checked={data.snowmobiling} onChange={handleSelfCheckInChange('snowmobiling')} />} label="Spelunking" />
        <FormControlLabel control={<Checkbox checked={data.spelunking} onChange={handleSelfCheckInChange('spelunking')} />} label="Surfing" />
        <FormControlLabel control={<Checkbox checked={data.surfing} onChange={handleSelfCheckInChange('surfing')} />} label="Swimming" />
        <FormControlLabel control={<Checkbox checked={data.swimming} onChange={handleSelfCheckInChange('swimming')} />} label="Tennis" />
        <FormControlLabel control={<Checkbox checked={data.tennis} onChange={handleSelfCheckInChange('tennis')} />} label="Whitewater rafting" />
        <FormControlLabel control={<Checkbox checked={data.whitewaterRafting} onChange={handleSelfCheckInChange('whitewaterRafting')} />} label="Wind surfing" />
        <FormControlLabel control={<Checkbox checked={data.windSurfing} onChange={handleSelfCheckInChange('windSurfing')} />} label="Sports snorkeling diving" />
        <FormControlLabel control={<Checkbox checked={data.sportsSnorkelingDiving} onChange={handleSelfCheckInChange('sportsSnorkelingDiving')} />} label="Sports tubing water" />
        <FormControlLabel control={<Checkbox checked={data.sportsTubingWater} onChange={handleSelfCheckInChange('sportsTubingWater')} />} label="Power boat rental" />
        <FormControlLabel control={<Checkbox checked={data.powerBoatRental} onChange={handleSelfCheckInChange('powerBoatRental')} />} label="Power boat rental" />
        <TextField id="outlined-basic" label="Scuba or snorkeling" variant="outlined" value={scubaOrSnorkeling} onChange={e => updateFields({scubaOrSnorkeling : e.target.value})} />
        </div>
       
        </div>
        </FormGroup>
        </FormWrapper>
        )
}
