import { FormGroup } from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import CustomTextField from "../reuseable-components/CustomTextField";
import DropdownSelect from "../reuseable-components/DropdownSelect";
import { useFormData } from "@/app/contexts/form";
import CustomCheckbox from "../reuseable-components/CustomCheckbox";



export default function Pool() {

  const {value, setValue, handleFieldChange} = useFormData();

  const handleCheckboxChange = (fieldName: string) => (e: any) => {
    handleFieldChange(fieldName, e.target.checked);
  };

  return (
    <FormWrapper title="Pool">
      <div className="category-description">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut
          error! Aperiam ducimus inventore nisi cupiditate facilis consectetur
          ea officia quaerat, quam neque quo reiciendis nobis iste cum quis
          perspiciatis.
        </span>
      </div>
      <FormGroup>
        <div className="pool-category main-category">
          <h3>Pool amenities & properties</h3>

       <ul className="multi-options-grid">
            <li>
              <div className="select-flex">
                <DropdownSelect
                  label="Pool Level"
                  state={value.poolLevel}
                  fieldName="poolLevel"
                  handleFieldChange={handleFieldChange}
                  id="pool-level-select"
                  options={[
                    { value: "ground", label: "ground" },
                    { value: "first floor", label: "first floor" },
                    { value: "second floor", label: "second floor" },
                    { value: "third floor", label: "third floor" },
                    { value: "attic", label: "attic" },
                    { value: "terrace", label: "terrace" },
                    { value: "roof terrace", label: "roof terrace" },
                  ]}
                />
              </div>
            </li>
            <CustomCheckbox label="Terrace" value={value.terrace} onChange={handleCheckboxChange('terrace')} />
            <CustomCheckbox label="Pool furniture" value={value.poolFurniture} onChange={handleCheckboxChange('poolFurniture')} />
            <CustomCheckbox label="Staircase" value={value.staircase} onChange={handleCheckboxChange('staircase')} />
            <CustomCheckbox label="Jets" value={value.jacuzziJets} onChange={handleCheckboxChange('jacuzziJets')} />
            <CustomCheckbox label="Access to pool" value={value.accessToPool} onChange={handleCheckboxChange('accessToPool')} />
            <CustomCheckbox label="Fence" value={value.fence} onChange={handleCheckboxChange('fence')} />
            <CustomCheckbox label="Pool towels" value={value.poolTowels} onChange={handleCheckboxChange('poolTowels')} />
            <CustomCheckbox label="Pool shower" value={value.poolShower} onChange={handleCheckboxChange('poolShower')} />
            <CustomCheckbox label="Inflatables" value={value.inflatables} onChange={handleCheckboxChange('inflatables')} />
      </ul>

          <div className="pool-safety-cat main-category">
            <h3>Safety</h3>
            <ul className="multi-options-grid">
                <CustomCheckbox label="Safety sign" value={value.safetySign} onChange={handleCheckboxChange('safetySign')} />
                <CustomCheckbox label="Depth marks" value={value.depthMarks} onChange={handleCheckboxChange('depthMarks')} />
                <CustomCheckbox label="Pool ring" value={value.poolRing} onChange={handleCheckboxChange('poolRing')} />
                <CustomCheckbox label="Pool lasso" value={value.poolLasso} onChange={handleCheckboxChange('poolLasso')} />
                <CustomCheckbox label="Solar panels" value={value.solarPanels} onChange={handleCheckboxChange('solarPanels')} />
                <CustomCheckbox label="Pool maintained" value={value.poolMaintained} onChange={handleCheckboxChange('poolMaintained')} />
            </ul>
          </div>
        </div>
        <div className="pool-dimensions-category main-category">
          <h3>Pool dimensions</h3>
          <ul className="duo-options-grid">
            
                <CustomTextField
                  label="Min width"
                  type="number"
                  value={value.minWidth}
                  onChange={(e) => setValue({ minWidth: e })}
                />
          
                <CustomTextField
                  label="Max width"
                  type="number"
                  value={value.maxWidth}
                  onChange={(e) => setValue({ maxWidth: e })}
                />
            
                <CustomTextField
                  label="Min depth"
                  type="number"
                  value={value.minDepth}
                  onChange={(e) => setValue({ minDepth: e })}
                />
            
                <CustomTextField
                  label="Max depth"
                  type="number"
                  value={value.maxdepth}
                  onChange={(e) => setValue({ maxdepth: e })}
                />
          </ul>
        </div>
      </FormGroup>
    </FormWrapper>
  );
}
