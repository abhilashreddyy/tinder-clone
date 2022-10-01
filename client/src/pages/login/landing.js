import { Link } from "react-router-dom";

function Landing() {
    return (
        <>
        <Link to="/login">Please Login Here!</Link><br/>
        <Link to="/register">Please Register Here!</Link>
        </>
        
        // <a href="/login">Please Login Here!</a>
    );
}

export default Landing;