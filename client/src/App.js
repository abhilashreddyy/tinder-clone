import { BrowserRouter, Router, Route , Link, Routes} from "react-router-dom";

import Landing from "./pages/login/landing";
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import Home from "./pages/home"

function App() {
  return (
    <>
    <BrowserRouter>
      <Landing />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App;
