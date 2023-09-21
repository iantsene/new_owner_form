import FormWrapper from "../form_components/FormWrapper";

export default function Amenities() {
    return (
        <FormWrapper title="Amenities">
        <label>Email</label>
        <input autoFocus type="email" />
        <label>Password</label>
        <input type="password" />
        
        </FormWrapper>
        )
}

