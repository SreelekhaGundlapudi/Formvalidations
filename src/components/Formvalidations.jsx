import React from 'react'
import { useState } from 'react'




const Formvalidations = () => {

const [data, setData] = useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:''
})

const{username, email, password, confirmpassword} = data

const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
}

const submitHandler = e => {
    e.preventDefault()
    if(username.length <= 5)
        {
            alert("username must be above 8 characters")
        }
        else if(password !== confirmpassword){
            console.log("passwords do not match");
        }

    }

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
            <label> username: </label><br/>
            <input type='username' name='username' value={username} onChange={changeHandler}/><br/>
            <label>email:</label><br/>
            <input type='email' name='email' value={email} onChange={changeHandler}/><br/>
            <label>password:</label><br/>
            <input type='password' name='password' value={password} onChange={changeHandler}/><br/>
            <label>confirmpassword:</label><br/>
            <input type='confirmpassword' name='confirmpassword' value={confirmpassword} onChange={changeHandler}/><br/>
            {password !== confirmpassword ? <p>passwords do not match</p>:null}
            <input type='submit' name='submit'/>
        </form>
      </center>
    </div>
  )
}

export default Formvalidations
