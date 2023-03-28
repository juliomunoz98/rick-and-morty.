import { useState } from "react";
import styles from "../Form/form.module.css";

export default function Form (props){

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const validLettersAndNumbers = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);


const validate = (inputs) => {
    const errors = {};

    if(!regexEmail.test(inputs.userName)){
        errors.userName =  "Debe ser un email";
    }
    if(!inputs.userName){
        errors.userName = "No puede ser vacio";
    }
    if (inputs.userName.length > 35) {
    errors.userName = "no puede tener mas de 35 caracteres";
    }
    if(!validLettersAndNumbers.test(inputs.password)) {
    errors.password = "Debe contener minimo un numero";
    }
    if (inputs.password.length < 6 || inputs.password.length > 10 ) {
    errors.password = "Debe de tener entre 6 y 10 caracteres";
    }
    return errors;
    };

    const [userData, setUserData]= useState({
        userName:"",
        password:"",
    });

    const [errors, setErrors]= useState({
        userName:"",
        password:"",
    });




const handleChange =(event)=>{
    const {name, value}= event.target;
    setUserData({
        ...userData,
        [name]: value,
    });
    setErrors(validate({
        ...userData, [name]: value,
    }))
};

const handleSubmit =(event)=>{
    event.preventDefault()
    props.login(userData)
}







 return(
    <div className={styles.bax}>
        <h2>LOGIN</h2>
    <form  onSubmit={handleSubmit}>     
       <div className={styles.inputbax}>

        <input type="text" value={userData.userName} name="userName" onChange={handleChange} className={errors.userName && styles.warning} required/>

        <label htmlFor="">Username: </label>       

        {errors.userName ? ( <p style={{color: "red"}}>{errors.userName}</p>): null}

        </div>
        <div className={styles.inputbax}>

        <input type="password" value={userData.password} name="password" onChange={handleChange} className={errors.password && styles.warning}required/>   

        <label htmlFor="">Password: </label>

        {errors.password ? ( <p style={{color: "red"}}>{errors.password}</p>) : null}

        </div>
         
         <button className={styles.botonsin} type="submit">Login</button>
    
       
      </form>
    
 </div>
 )
}

 