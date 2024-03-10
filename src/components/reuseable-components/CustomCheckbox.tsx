import { Checkbox, FormControlLabel } from "@mui/material";
import { ReactNode } from "react";
import InfoIcon from "./InfoIcon";

interface Props {
    value: boolean
    label: string
    highlightedMessage?: boolean | string
    icon?: ReactNode;
    info?: string;
    onChange: (e: any) => void
    
}

function CustomCheckbox({value, label, highlightedMessage, icon, info, onChange}: Props) {
  return (
    <>
      <li className="list-items">
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={value}
              onChange={onChange}
            />
          }
          label={
            <div className="label-content">
              {icon ? icon : <img src="/Icons/icon-placeholder.png" />}
              <span className="checkbox-tags">{label}</span>
              {info ? <InfoIcon message={info} /> : undefined}
              {highlightedMessage ? <span className="clients-favorite">{highlightedMessage}</span> : undefined }
              
            </div>
          }
        />
      </li>
    </>
  );
}

export default CustomCheckbox;
