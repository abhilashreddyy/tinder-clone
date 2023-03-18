import { useState } from 'react';
import {useNavigate} from "react-router-dom";

function RegistrationPage(){
    var navigate = useNavigate()
    const [data,setData] = useState({
        username:"",
        password:"",
        firstname:"",
        lastname:"",
        re_password : "",
    });
    const {username, password, firstname, lastname, re_password} = data;

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const sendRegistrationInfo = (event)=>{
        event.preventDefault()
        fetch('http://localhost:8000/register', {
        method: 'POST',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                "username" : username,
                "password" : password,
                "firstname" : firstname,
                "lastname" : lastname
            })
        })
        .then(response => {
            response.json().then((response_body) => {
                navigate("/login")
            })
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }


    return (
        <div>
            <form className = "registerform" onSubmit={sendRegistrationInfo}>
                <label>
                    User Name: <br />
                    <input type="text" placeholder="Enter your email" name="username" value = {username} onChange={changeHandler} /><br />
                </label>
                <label>
                    First Name: <br />
                    <input type="text" placeholder="First Name" name="firstname" value = {firstname} onChange={changeHandler} /><br />
                </label>
                <label>
                    Last Name: <br />
                    <input type="text" placeholder="Last Name" name="lastname" value = {lastname} onChange={changeHandler} /><br />
                </label>
                <label>
                    Password: <br />
                    <input type="password" placeholder="Password" name="password" value = {password} onChange={changeHandler} /><br />
                </label>
                <label>
                    Re Enter Password: <br />
                    <input type="password" placeholder="Re Enter Password" name="re_password" value = {re_password} onChange={changeHandler} />
                </label>
                <br />
                <br />
                <input type="submit"/>
            </form>
        </div>
        
    )
}

export default RegistrationPage