import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import useForm from '../hooks';
import validate from '../validate';

let LoginForm = (props) => {
    const {inputs, handleInputChange, handleSubmit ,errors} = useForm({nif:'',actividades:''},validate);
    console.log(errors.nif)
    return (
        <form onSubmit={handleSubmit}>
            <h1>Evalua y mejora tu negocio</h1>
            <div className={'form-group'}>
                <Field name="nif" className={'form-field'} type='text' placeholder='NIF' component="input" onChange={handleInputChange} onBlur={handleInputChange}value="{inputs.nif}" required=""/>    
                {errors.nif && <span className="error">{errors.nif}</span>}
            </div>
            <div className={'form-group'} style={{marginBottom:"0px"}}>
                <Autocomplete
                    
                    className={'dropdown'}
                    options={props.actions}
                    getOptionLabel={(option) => option}
                    style={{ width: '100%',color: '#22d099' }}
                    renderInput={(params) => <TextField name='actividades' {...params} label="Sector de Actividad" variant="outlined" value='{inputs.actividades}'/>}
                    onBlur={handleInputChange}
                    onChange={handleInputChange}
                    renderOption={
                        (option, { inputValue }) => {
                            const matches = match(option, inputValue);
                            const parts = parse(option, matches);
                            return (
                                <div>
                                {parts.map((part, index) => (
                                    <span key={index} style={{ fontWeight: part.highlight ? 700 : 400  }}>
                                    {part.text}
                                    </span>
                                ))}
                                </div>
                            );
                        }
                    }
                />
                {errors.actividades && <span className="error">{errors.actividades}</span>}
            </div>
            
            <div className={'form-submit'}>
                <button style={{ lineHeight: "10px" , height: "64px", padding: "0 3.125em"}} type='submit' className={'hexa xl'}>CONTINUAR<svg class="icon btn__icon arrow" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" stroke="currentColor" stroke-width="1.302" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.891,1l4.665,4.665c0.601,0.6,0.601,1.573,0,2.174l-4.665,4.664"></path><line fill="none" stroke="currentColor" stroke-width="1.302" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="12.839" y1="6.751" x2="1" y2="6.751"></line></g></svg></button>
                
            </div>
            
        </form>
    
    )
}


LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm;
