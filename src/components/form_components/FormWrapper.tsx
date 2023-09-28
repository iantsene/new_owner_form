import { Paper } from "@mui/material"
import {ReactNode} from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export default function FormWrapper({ title, children}: FormWrapperProps) {
    return (
        <Paper className="paper" sx={{ p: 3 }}>
        <div className="form-foreground" >
        <h2 className="form-title">{title}</h2>
        <div className="formChildren">{children}</div>
        </div>
        </Paper>
        )
}

