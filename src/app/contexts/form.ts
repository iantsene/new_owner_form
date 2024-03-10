import { createContext, useContext } from "react";
import INITIAL_DATA from "../variables/variables";
import {FormDataTypes} from "../types/all-form-types"


export const INITIAL_STATE: FormDataTypes = INITIAL_DATA;

interface FormContextProps {
    value: FormDataTypes;
    setValue: (newState: Partial<FormDataTypes>) => void;
    handleFieldChange: (tab: any, fieldName: string, value: any) => void
}

const FormContext = createContext<FormContextProps>({
    value: INITIAL_STATE,
    setValue: () => {},
    handleFieldChange: (fieldValue) => {},
})



export const FormProvider = FormContext.Provider;

export const useFormData = () => useContext(FormContext);

