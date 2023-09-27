import {ReactNode} from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export default function FormWrapper({ title, children}: FormWrapperProps) {
    return (
        <div className="form-foreground" >
        <h2 className="formTitle">{title}</h2>
        <div className="formChildren">{children}</div>
        </div>
        )
}

