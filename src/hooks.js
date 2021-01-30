import React,{useState} from 'react';
import validate from './validate';

const useForm = (initialValues) => {
    const [inputs,setInputs] = useState(initialValues);
    const [errors,setErrors] = useState({});
    
    const handleSubmit = (event) => {
        
    }
    const handleInputChange = (e) => {
      setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
        const validationErrors = validate(inputs);
        const noErrors = Object.keys(validationErrors).length === 0;
        setErrors(validationErrors);
        if(noErrors){
          console.log("Authenticated",inputs);
        }else{
          console.log("errors try again",validationErrors);
        }
      }
      
    return {
      handleSubmit,
     handleInputChange,
     inputs,
     errors
      };
}
export default useForm;