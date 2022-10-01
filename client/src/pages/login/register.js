import { Component } from "react"
import CONF from "../../config.json"
import { Navigate } from 'react-router-dom';


class Register extends Component{

    constructor(){
        super()
        this.state = {
            success : false
        }
        this.route = "/register"
    }

    handleSubmit(event){
		event.preventDefault();
		var registration_info = {}
		for(var field of event.target){
			registration_info[field.name] = field.value
		}
		fetch(CONF.server_address+this.route, {
			method: "POST",
            mode:"cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': "application/json;charset=utf-8"
			},
			body: JSON.stringify(registration_info)
			
		}).then((response) => response.json())
		.then((user) => {

			if(user.success === true){
				this.setState({ success : user.success });
			}
			
		});
		

    }

    render(){
        if(this.state.success === true){
            return <Navigate to="/login" replace={true} />
        }
        else{
            return (
                <form action="/register" method="post" onSubmit={(event) => this.handleSubmit(event)}>
                    Username:<br/>
                    <input type="text" name="username" placeholder="Username" required/><br/>
                    Email:<br/>
                    <input type="text" name="email" placeholder="Email" required/><br/>
                    Password:<br/>
                    <input type="password" name="password" placeholder="Enter Password" required/><br/><br/>
                    Retype Password:<br/>
                    <input type="password" name="password" placeholder="Re Enter Password" required/><br/><br/>
                    <input type="submit" value="register"/>
                </form>
            );
        }
        
    }
    
}
  
export default Register;
  