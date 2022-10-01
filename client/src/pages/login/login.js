import { Component } from "react"
import CONF from "../../config.json"
import { Navigate } from 'react-router-dom';

class Login extends Component{
	constructor(){
		super()
		this.state = {
			success : false
		}
		this.route = "/login"
		// this.handleClick = this.handleClick.bind(this);
		// this.navigate = useNavigate()
	}

	handleSubmit(event) {
		console.log(event)
		event.preventDefault();
		var login_info = {}
		for(var field of event.target){
			login_info[field.name] = field.value
		}
		console.log(this);
		fetch(CONF.server_address+this.route, {
			method: "POST",
            mode:"cors",
			headers: {
				'Accept': 'application/json',
				'Content-Type': "application/json;charset=utf-8"
			},
			body: JSON.stringify(login_info)
			
		}).then((response) => response.json())
		.then((user) => {

			if(user.success === true){
				this.setState({ success : user.success });
			}
			
			// return user.success;
		});
		


	}

  render(){
	if(this.state.success){
		return <Navigate to="/home" replace={true} />
	}
	else{
		return (
			<>
			<form action="/login" method="post" onSubmit={(event) => this.handleSubmit(event)}>
				Username:<br/>
				<input type="text" name="username" placeholder="Username" required/><br/>
				Password:<br/>
				<input type="password" name="password" placeholder="Password" required/><br/><br/>
				<input type="submit" value="login"/>
			</form>
			</>
			
		);
	}
    
  }
  
}



export default Login;
