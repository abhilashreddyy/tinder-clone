import { useState } from 'react';
import {useNavigate} from "react-router-dom";

// import  { Navigate } from 'react-router-dom'

function LoginPage({loginCallback}){
    var navigate = useNavigate()
    const [data,setData] = useState({
        username:"",
        password:""
    });
    const {username,password} = data;


    const sendLoginInfo = (event)=>{

        event.preventDefault()
        fetch('http://localhost:8000/login', {
        method: 'POST',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                "username" : username,
                "password" : password
            })
        })
        .then(response => {
            response.json().then((response_body) => {
                if(response_body.isAuthenticated === true){
                    navigate("/home")
                }
                else{
                    if(response_body.userExists === false){
                        navigate("/register")
                    }
                    else{
                        navigate("/login")
                    }
                }
            // loginCallback(response_body)
            })
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }

    const changeHandler = e =>{
        setData({
            ...data, 
            [e.target.name] : e.target.value,
        });
    }

    return (
    <div>
        <form className = "loginform" onSubmit={sendLoginInfo}>
            <label>
                User Name: <br />
                <input type="text" name="username" value = {username} onChange={changeHandler} />
            </label>
            <label>
            <br />Password: <br />
                <input type="password" name="password" value = {password} onChange={changeHandler} />
            </label>
            <br />
            <br />
            <input type="submit"/>
        </form>
    </div>
    )
}

export default LoginPage

