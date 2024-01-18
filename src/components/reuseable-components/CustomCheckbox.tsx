import { Checkbox, FormControlLabel } from "@mui/material";
import { ReactNode } from "react";

interface Props {
    value: boolean
    label: string
    clientsFavorite?: boolean
    highlightedMessage?: string
    icon?: ReactNode;
    onChange: (e: any) => void
    
}

function CustomCheckbox({value, label, clientsFavorite, highlightedMessage, icon, onChange}: Props) {
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
              {clientsFavorite ? <span className="clients-favorite">{highlightedMessage}</span> : null }
              
            </div>
          }
        />
      </li>
    </>
  );
}

export default CustomCheckbox;
