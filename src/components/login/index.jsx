import { useState } from "react";
import { loginFormElement } from "../../config";
import CommonForm from "../common-form";

const initialFormData = {
    email : '',
    password : ''
}

function LoginComponent(){

    const [loginFormData, setLoginFormData] = useState(initialFormData);


    function onHandleSubmit(event) {
        event.preventDefault();
        console.log(loginFormData, "loginFormData");

        //api logic & database logic

        setLoginFormData(initialFormData);
    }
    
    return (
        <div>
            <h1>Login Page</h1>
            <CommonForm 
                formData={loginFormData} 
                setFormData={setLoginFormData} 
                formControls={loginFormElement}
                buttontext={"Login"}
                onHandleSubmit={onHandleSubmit}
            />
        </div>
    );
}
export default LoginComponent;