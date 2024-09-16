import CommonInput from "../common-input";

const formType = {
    INPUT : 'input',
    SELECT : 'select',
    TEXTAREA : 'textarea'
};

function CommonForm({
    formControls = [], 
    onHandleSubmit, 
    formData, 
    setFormData, 
    buttontext
}){  
    function renderFormElemnt(getCurrentElement){
        let content = null;

        switch (getCurrentElement?.componentType) {
            case formType.INPUT:
                content = (
                    <CommonInput 
                        label={getCurrentElement.label} 
                        name={getCurrentElement.name} 
                        id={getCurrentElement.id} 
                        type={getCurrentElement.type}
                        placeholder={getCurrentElement.placeholder} 
                        value={formData[getCurrentElement.name]} 
                        onchange={(event)=>
                            setFormData({
                                ...formData,
                                [event.target.name] : event.target.value,
                            })
                        }
                    />
                );
                break;
        
            default:
                content = (
                    <CommonInput 
                        label={getCurrentElement.label} 
                        name={getCurrentElement.name} 
                        id={getCurrentElement.id} 
                        type={getCurrentElement.type}
                        placeholder={getCurrentElement.placeholder} 
                        value={formData[getCurrentElement.name]} 
                        onchange={(event)=>
                            setFormData({
                                ...formData,
                                [event.target.name] : event.target.value,
                            })
                        }
                    />
                );
                break;
        }
        return content;
    }
    

    return (
        <form onSubmit={onHandleSubmit}>
            {formControls?.length 
                ? formControls.map(singleFormElementItem => 
                    renderFormElemnt(singleFormElementItem ))
                : null}
            <div style={{marginTop: '12px'}}>
                <button type="submit">{buttontext || 'submit'}</button>
            </div>
        </form>);
}

export default CommonForm;