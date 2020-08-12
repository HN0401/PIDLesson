import React from 'react'
import { Link } from "react-router-dom";

const FormOne = () => (
    <form id="formOne" className="container-fluid" action="#">
        <div className="d-flex justify-content-around align-items-center">
            <div>
                <Link to="/">
                    <button id="backOne" type="button" className="back-button-fixed shadow bg5ec7cb tc475868 form-control ml-1 px-2 py-2 h5">Back</button>
                </Link>
            </div>
            <div className="row justify-content-center col-9 animated fadeIn">
                <div id="formOneScroll" className="card inner-container-scroll shadow text-center">
                    <div className="card-header bg475868 text-light">
                        <h3>Personal Information</h3>
                    </div>
                    <div className="card-body container-fluid bg-light text-dark">
                        <div className="card-body m-2 shadow rounded">
                            <h3 className="text-light bg475868 rounded p-1">General Information</h3> 
                            <div className="row justify-content-center mb-4">
                                <div className="d-column col-4">
                                    <h6>First Name</h6>
                                    <input id="firstName" name="First Name" type="text" className=" form-control" />
                                    <div id="firstNameX"></div>
                                </div>
                                <div className="d-column col-4">
                                    <h6>Last Name</h6>
                                    <input id="lastName" name="Last Name" type="text" className=" form-control" />
                                    <div id="lastNameX"></div>
                                </div>
                                <div className="d-column col-2">
                                    <h6>Suffix</h6>
                                    <select id="suffix" name="Suffix" className="form-control bg475868 dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="Jr.">Jr.</option>
                                        <option value="II">II</option>
                                        <option value="III">III</option>
                                        <option value="IX">IX</option>
                                        <option value="Sr.">Sr.</option>
                                        <option value="MSW">MSW</option>
                                        <option value="PhD">PhD</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-4">
                                <div className="d-column col-3">
                                    <h6>Preferred name</h6>
                                    <input id="preferredName" name="Preferred Name" type="text" className="form-control" />
                                </div>
                                <div className="d-column col-3">
                                <h6>Gender</h6>
                                    <select id="gender" name="Gender" className="form-control bg475868 dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                        <option value="I'd Rather Not Answer">I'd rather not answer</option>
                                    </select>
                                </div>
                                <div className="d-column col-3">
                                    <h6>Age</h6>
                                    <select id="age" name="Age" className="form-control bg475868 dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="18-24">18-24</option>
                                        <option value="25-34">25-34</option>
                                        <option value="35-44">35-44</option>
                                        <option value="45-54">45-54</option>
                                        <option value="55-64">55-64</option>
                                        <option value="75+">75+</option>
                                    </select>
                                </div>
                                <div className="d-column col-3">
                                    <h6>Race</h6>
                                    <select id="race" name="Race" className="form-control bg475868 dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="Caucasian">Caucasian</option>
                                        <option value="Black or African American">Black or African American</option>
                                        <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                                        <option value="Asian">Asian</option>
                                        <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or other Pacific Islander</option>
                                        <option value="Hispanic">Hispanic</option>
                                        <option value="Other">Other</option>
                                        <option value="I'd Rather Not Answer">I'd rather not answer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-2">
                                <div className="d-column">
                                    <h6>Primary Language</h6>
                                    <select id="primaryLanguage" name="Primary Language" className="select form-control col-3" role="button">
                                        <option>Select...</option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="Danish">Danish</option>
                                        <option value="Dutch">Dutch</option>
                                        <option value="English">English</option>
                                        <option value="French">French</option>
                                        <option value="German">German</option>
                                        <option value="Italian">Italian</option>
                                        <option value="Mandarin Chinese">Mandarin Chinese</option>
                                        <option value="Portuguese">Portuguese</option>
                                        <option value="Russian">Russian</option>
                                        <option value="Spanish">Spanish</option>
                                    </select>
                                </div>
                                <div className="d-column col-6">
                                    <h6 className="mb-2">Identification Number</h6>
                                    <input id="identificationNumber" name="Identification Number" type="text" className="form-control" />
                                    <div id="identificationNumberX"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body mt-4 m-2 shadow rounded">
                            <h3 className="text-light bg475868 rounded p-1">Criminal History</h3> 
                            <div className="row justify-content-center mb-5">
                                <div className="d-column col-2">
                                    <h6>State</h6>
                                    <select id="state" name="State" type="text" className="form-control bg475868 dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                        <option value="DC">District of Columbia</option>
                                    </select>
                                    <div id="stateX"></div>
                                </div>
                                <div className="d-column col-3">
                                    <h6>Facility</h6>
                                    <input id="housingLocation" name="Housing Location" type="text" className="form-control" />
                                </div>
                            </div>    
                            <div className="row justify-content-center mb-5">
                                <div className="d-column col-5">
                                    <h6>Date of Incarceration</h6>
                                    <input id="dateOfIncarceration" name="Date Of Incarceration" type="date" className="form-control" />
                                </div>
                                <div className="d-column col-5">
                                    <h6>Estimated Release Date</h6>
                                    <div className="row justify-content-center">
                                        <input id="estimatedReleaseDate" name="Estimated Release Date" type="date" className="form-control" />
                                    </div>    
                                </div>
                            </div>
                            <div className="row justify-content-center mb-5">    
                                <div className="d-column col-5">
                                    <h6>Parole or Full Expiration</h6>
                                    <select id="paroleOrExpiration" name="Parole or Expiration" className="select dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="Parole">Parole</option>
                                        <option value="Expiration">Expiration</option>
                                    </select>
                                </div>
                                <div className="d-column col-5">
                                    <h6>Number of Times Incarcerated</h6>
                                    <select id="numberOfTimesIncarcerated" name="Number Of Times Incarcerated" className="select dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5+">5+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-column mb-5">
                                <h6>If you are comfortable sharing, what type of crime were you arrested for?</h6>
                                <select id="typeOfCrime" name="Type Of Crime" className="select dropdown btn btn-secondary dropdown-toggle" role="button">
                                    <option>Select...</option>
                                    <option value="Drugs">Drugs</option>
                                    <option value="Property">Property</option>
                                    <option value="Violence">Violence</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>   
                            
                            <div className="row justify-content-center mb-5">
                                <div className="d-column col-5">
                                    <h6>className Start Date</h6>
                                    <input id="classNameStartDate" className="form-control" name="className Start Date" type="date" className="form-control" />
                                </div>
                                <div className="d-column">
                                    <h6>AM or PM className?</h6>
                                    <select id="amOrPm" name="AM Or PM" className="form-control bg475868 dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="rounded shadow mx-2 py-2">
                            <h3 className="text-light bg475868 rounded p-1">Military History</h3> 
                            <div className="row justify-content-center mb-4 mt-2">
                                <div className="d-column col-5">
                                    <h6>Military Experience</h6>
                                    <select id="militaryExperience" name="Military Experience" className="select dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="d-column col-5">
                                    <h6>Branch of Service</h6>
                                    <select id="branchOfService" name="Branch Of Service" className="select dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="Army">Army</option>
                                        <option value="Marine Corps.">Marine Corps.</option>
                                        <option value="Navy">Navy</option>
                                        <option value="Air Force">Air Force</option>
                                        <option value="Coast Guard">Coast Guard</option>
                                        <option value="Public Health Service Commissioned Corps.">Public Health Service Commissioned Corps.</option>
                                        <option value="National Oceanic and Atmospheric Administration Commissioned Officer Corps.">National Oceanic and Atmospheric Administration Commissioned Officer Corps.</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="d-column col-5">
                                    <h6>Discharge Status</h6>
                                    <select id="dischargeStatus" name="Discharge Status" className="select dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="Honorable">Honorable</option>
                                        <option value="Dishonorable">Dishonorable</option>
                                    </select>
                                </div>
                                <div className="d-column col-5">
                                    <h6>Spouse of a Veteran?</h6>
                                    <select id="spouseOfAVeteran" name="Spouse Of A Veteran" className="select dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div>
                <Link to="/FormTwo">
                    <button id="continueOne" type="button" className="continue-button-fixed shadow bg5ec7cb tc475868 form-control px-2 py-2 h5">Continue</button>
                </Link>
            </div>
        </div> 
    </form>
)

export default FormOne