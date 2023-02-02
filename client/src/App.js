
import LoginPage from './authentication/login';
import RegistrationPage from './authentication/register';
import HomePage from './authentication/home';
import { Routes, Route, useNavigate} from "react-router-dom";
import { useState } from 'react';


function App() {
  const navigate = useNavigate();
  const [data,setData] = useState({
    isLoggedIn : false,
    isRegistered : true
  });

  const loggedIn = (authResponse) =>{
    // setData({...data, isLoggedIn : authResponse.isAuthenticated, isRegistered : authResponse.userExsits})
    if(authResponse.isAuthenticated === true){
      navigate("/home")
    }
    else{
      if(authResponse.userExists === false){
        navigate("/register")
      }
      else{
        console.log("helooooo")
        navigate("/login")
      }
      
    }
    
  }

  return(
      <Routes>
        <Route exact path='/login' element={<LoginPage 
          loginCallback = {loggedIn}/>}></Route>
        <Route exact path='/register' element={<RegistrationPage />}></Route>
        <Route exact path='/home' element={< HomePage />}></Route>
      </Routes>
    
  )

  // if(data.isLoggedIn === false){
  //   if(data.isRegistered === true){
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <LoginPage 
  //             loginCallback = {loggedIn}
  //           />
  //         </header>
  //       </div>
  //     );
  //   }
  //   else{
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <registrationPage />
  //         </header>
  //       </div>
  //     )
      
  //   }
  // }
  // else if(data.isLoggedIn === true){
  //   console.log("the user does not exsit")
  //   return (
  //     <div className='dashboard'>
  //       <p>welcome to heome page</p>
  //     </div>
  //   )
  // }
}

export default App;