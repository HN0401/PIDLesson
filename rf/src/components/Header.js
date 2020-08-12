import React from 'react'
import { Link } from "react-router-dom";

class Header extends React.Component {
    render(){
        return(
    <div>
        <div className="container-fluid bg-white" style={{height: "80px"}}> 
            <div className=".start text-center">
                <img id="logoImg" className="" src="../images/logo.png" alt="Persevere Logo" />
            </div>
        </div>
        <div className="navbar p-0">
            <ul className="d-flex mx-auto">
                <Link to="/FormOne" className="nav-item">
                    <li id="stepOne" className="nav-link">Personal Information</li>
                </Link>
                <Link to="/FormTwo" className="nav-item">
                    <li id="stepTwo" className="nav-link">Previous Work Experience</li>
                </Link>
                <Link to="/FormThree" className="nav-item">
                    <li id="stepThree" className="nav-link">Education History</li>
                </Link>
                <Link to="/FormFour" className="nav-item">
                    <li id="stepFour" className="nav-link">Certifications and Awards</li>
                </Link>
                <Link to="/FormFive" className="nav-item">
                    <li id="stepFive" className="nav-link">Incarceration Employment</li>
                </Link>
                <Link to="/FormSix" className="nav-item">
                    <li id="stepSix" className="nav-link">Additional Information</li>
                </Link>
                <Link to="/FormSeven" className="nav-item">
                    <li id="stepSeven" className="nav-link">Employment Plan</li>
                </Link>
            </ul>
        </div>
    </div>
        )
    }
}

export default Header