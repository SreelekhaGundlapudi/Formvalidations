import { useState,useEffect } from "react";

function Form() {

 
const[formValues,setFormvalues]= useState({username: "", email:"", password:""})
const[formErrors,setFormErrors]=useState({})
const[isSubmit, setIsSubmit]=useState(false)
const{username ,email, password} = formValues

const changeHandler = (e) => {
  setFormvalues({...formValues, [e.target.name]:e.target.value})
}

const submitHandler = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true)
}

useEffect(()=>{
  console.log(formErrors);
  if(Object.keys(formErrors).length ===0 && isSubmit==true){
 console.log(formValues);
  }
},[formErrors, formValues, isSubmit])
const validate = (values)=>
{
const errors = {};

if(!values.username){
  errors.username = "username is required"
}
if(!values.email){
  errors.email = "email is required"
}
if(!values.password){
  errors.password = "password is required"
}
else if(values.password.length < 4){
  errors.password = "password must be greaterthan 4 characters"}
else if(values.password.length > 10){
  errors.password = "password must be lessthan 8 characters"
}
return(errors)
}

  return(

<div>
      <center>
        <h1>Login Form</h1>
        <form onSubmit={submitHandler}>
            <label> username: </label><br/>
            <input type='username' name='username' value={username} onChange={changeHandler}/><br/>
            <p>{formErrors.username}</p>
            <label>email:</label><br/>
            <input type='email' name='email' value={email} onChange={changeHandler}/><br/>
            <p>{formErrors.email}</p>
            <label>password:</label><br/>
            <input type='password' name='password' value={password} onChange={changeHandler}/><br/>
            
            <p>{formErrors.password}</p>
            <input type='submit' name='submit'/>
            {(Object.keys(formErrors).length ===0 && isSubmit==true)?<p>sign in successfull</p> : <p></p> }
        </form>
      </center>
    </div>

  )
  
}

export default Form;