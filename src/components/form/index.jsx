import { useState } from "react";


function FormComponet(params) {

    const [nameValue, setNameValue]= useState('');
    const [emailValue, setEmailValue]= useState('');
    const [formData, setFormData]= useState({
        name : '',
        email : ''
    });
    
    function handleInputChange(event) {
        // console.log(event);
        const {value} = event.target;
        setNameValue(value);
    }
    function handleEmailChange(event) {
        const {value} = event.target;
        setEmailValue(value);
    }
    function handleOnChange(event) {
        console.log(event.target.name);
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name] : value
        });
        
    }
    function handleSubmit(event) {
        event.preventDefault();

        //call the api and pass the name value

        console.log(nameValue, emailValue, 'nameValue');
        
    }

    console.log(formData);
    

    return <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <input 
                value={formData.name} 
                name="name" 
                id="name" 
                placeholder="Enter Your Name"
                // onChange={handleInputChange}
                onChange={handleOnChange}/>
            
            <input 
                value={formData.email}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                // onChange={handleEmailChange}
                onChange={handleOnChange}
            />
            <button type="submit">Submit</button>
        </form>
        
    </div>
}

export default FormComponet;