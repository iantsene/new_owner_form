import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputBase,
  TextField,
} from "@mui/material";
import FormWrapper from "../form_components/FormWrapper";
import CustomTextField from "../reuseable-components/CustomTextField";
import DropdownSelect from "../reuseable-components/DropdownSelect";
import { useFormData } from "@/app/contexts/form";



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
              {" "}
              <div className="select-flex">
                <DropdownSelect
                  label="Level:"
                  state={value.poolLevel}
                  fieldName="poolLevel"
                  handleFieldChange={handleFieldChange}
                  id={"pool-level-select"}
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
            <li className="list-items">
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={value.terrace}
                    onChange={handleCheckboxChange("terrace")}
                  />
                }
                label={
                  <div className="label-content">
                    <img src="/Icons/icon-placeholder.png" />
                    <span className="checkbox-tags">Terrace</span>
                  </div>
                }
              />
            </li>
            <li className="list-items">
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={value.poolFurniture}
                    onChange={handleCheckboxChange("poolFurniture")}
                  />
                }
                label={
                  <div className="label-content">
                    <img src="/Icons/icon-placeholder.png" />
                    <span className="checkbox-tags">Pool furniture</span>
                  </div>
                }
              />
            </li>
            <li className="list-items">
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={value.staircase}
                    onChange={handleCheckboxChange("staircase")}
                  />
                }
                label={
                  <div className="label-content">
                    <img src="/Icons/icon-placeholder.png" />
                    <span className="checkbox-tags">Staircase</span>
                  </div>
                }
              />
            </li>
            <li className="list-items">
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={value.jacuzziJets}
                    onChange={handleCheckboxChange("jacuzziJets")}
                  />
                }
                label={
                  <div className="label-content">
                    <img src="/Icons/icon-placeholder.png" />
                    <span className="checkbox-tags">Jets</span>
                  </div>
                }
              />
            </li>
            <li className="list-items">
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={value.accessToPool}
                    onChange={handleCheckboxChange("accessToPool")}
                  />
                }
                label={
                  <div className="label-content">
                    <img src="/Icons/icon-placeholder.png" />
                    <span className="checkbox-tags">Access to pool</span>
                  </div>
                }
              />
            </li>
            <li className="list-items">
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={value.fence}
                    onChange={handleCheckboxChange("fence")}
                  />
                }
                label={
                  <div className="label-content">
                    <img src="/Icons/icon-placeholder.png" />
                    <span className="checkbox-tags">Fence</span>
                  </div>
                }
              />
            </li>
            <li className="list-items">
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={value.poolTowels}
                    onChange={handleCheckboxChange("poolTowels")}
                  />
                }
                label={
                  <div className="label-content">
                    <img src="/Icons/icon-placeholder.png" />
                    <span className="checkbox-tags">Pool towels</span>
                  </div>
                }
              />
            </li>
            <li className="list-items">
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={value.poolShower}
                    onChange={handleCheckboxChange("poolShower")}
                  />
                }
                label={
                  <div className="label-content">
                    <img src="/Icons/icon-placeholder.png" />
                    <span className="checkbox-tags">Pool shower</span>
                  </div>
                }
              />
            </li>
            <li className="list-items">
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={value.inflatables}
                    onChange={handleCheckboxChange("inflatables")}
                  />
                }
                label={
                  <div className="label-content">
                    <img src="/Icons/icon-placeholder.png" />
                    <span className="checkbox-tags">Inflatables</span>
                  </div>
                }
              />
            </li>
          </ul>

          <div className="pool-safety-cat main-category">
            <h3>Safety</h3>
            <ul className="multi-options-grid">
              <li className="list-items">
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={value.safetySign}
                      onChange={handleCheckboxChange("safetySign")}
                    />
                  }
                  label={
                    <div className="label-content">
                      <img src="/Icons/icon-placeholder.png" />
                      <span className="checkbox-tags">Safety sign</span>
                    </div>
                  }
                />
              </li>
              <li className="list-items">
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={value.depthMarks}
                      onChange={handleCheckboxChange("depthMarks")}
                    />
                  }
                  label={
                    <div className="label-content">
                      <img src="/Icons/icon-placeholder.png" />
                      <span className="checkbox-tags">Depth marks</span>
                    </div>
                  }
                />
              </li>
              <li className="list-items">
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={value.poolRing}
                      onChange={handleCheckboxChange("poolRing")}
                    />
                  }
                  label={
                    <div className="label-content">
                      <img src="/Icons/icon-placeholder.png" />
                      <span className="checkbox-tags">Pool ring</span>
                    </div>
                  }
                />
              </li>
              <li className="list-items">
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={value.poolLasso}
                      onChange={handleCheckboxChange("poolLasso")}
                    />
                  }
                  label={
                    <div className="label-content">
                      <img src="/Icons/icon-placeholder.png" />
                      <span className="checkbox-tags">Pool lasso</span>
                    </div>
                  }
                />
              </li>
            </ul>
          </div>

          <div className="pool-other-cat main-category">
            <h3>Other</h3>
            <ul className="multi-options-grid">
              <li className="list-items">
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={value.solarPanels}
                      onChange={handleCheckboxChange("solarPanels")}
                    />
                  }
                  label={
                    <div className="label-content">
                      <img src="/Icons/icon-placeholder.png" />
                      <span className="checkbox-tags">Solar panels</span>
                    </div>
                  }
                />
              </li>
              <li className="list-items">
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={value.poolMaintained}
                      onChange={handleCheckboxChange("poolMaintained")}
                    />
                  }
                  label={
                    <div className="label-content">
                      <img src="/Icons/icon-placeholder.png" />
                      <span className="checkbox-tags">Pool maintained</span>
                    </div>
                  }
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="pool-dimensions-category main-category">
          <h3>Pool dimensions</h3>
          <ul className="duo-options-grid">
            <li className="list-item-container">
              <img
                className="icon"
                src="/Icons/icon-placeholder.png"
                alt="icon"
              />
              <div className="label">
                <span>Min width:</span>
                <CustomTextField
                  label="Min width"
                  type="number"
                  value={value.minWidth}
                  onChange={(e) => setValue({ minWidth: e })}
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
                <span>Max width:</span>
                <CustomTextField
                  label="Max width"
                  type="number"
                  value={value.maxWidth}
                  onChange={(e) => setValue({ maxWidth: e })}
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
                <span>Min depth:</span>
                <CustomTextField
                  label="Min depth"
                  type="number"
                  value={value.minDepth}
                  onChange={(e) => setValue({ minDepth: e })}
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
                <span>Max depth:</span>
                <CustomTextField
                  label="Max depth"
                  type="number"
                  value={value.maxdepth}
                  onChange={(e) => setValue({ maxdepth: e })}
                ></CustomTextField>
              </div>
            </li>
          </ul>
        </div>
      </FormGroup>
    </FormWrapper>
  );
}
