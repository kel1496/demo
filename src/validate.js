const validate = (inputs) => {
    console.log('asdasd',inputs)
   const errors = {};
   if (!inputs.nif) {
       errors.nif = 'Por favor, rellena este campo';
   } else if (
       !/^[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}$/i.test(inputs.nif)
   ) {
       errors.nif = 'Lo sentimos, el NIF introducido no coincide con el formato de un NIF de empresa en España';
   }

   if(!inputs.actividades){
       errors.actividades = 'Por favor, rellena este campo'
   }
   
   return errors;
 }
 export default validate;