import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElement } from "../../config";

const initialRegisterFormData ={
    name: '',
    email: '',
    password: ''
}

function RegisterComponent(){

    const [registerFormData, setRegisterFormData]= useState(initialRegisterFormData);

    function handleRegisterOnSubmit(event){
        event.preventDefult();
        console.log(registerFormData);
        setRegisterFormData(initialRegisterFormData);
        
    }

    return (
        <div>
            <h1>Register Page</h1>
            <CommonForm
            formControls={registerFormElement}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            buttontext={'Register'}
            onHandleSubmit={handleRegisterOnSubmit}
            />
        </div>
    );
}
export default RegisterComponent;