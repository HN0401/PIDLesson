import React from 'react'
import { Link } from "react-router-dom";

const FormFour = () => (
    <form id="formFour" className="container-fluid" action="#">
    <div className="d-flex justify-content-around align-items-center">
        <div>
            <Link to="/FormThree">
                <button id="backFour" type="button" className="back-button-fixed shadow bg5ec7cb tc475868 form-control ml-1 px-2 py-2 h5">Back</button>
            </Link>
        </div>
        <div className="row justify-content-center col-9 animated fadeIn">
            <div className="card inner-container-scroll shadow text-center">
                <div className="card-header text-light bg475868">
                    <h3>Certifications and Awards</h3>
                </div>
                <div className="card-body container bg-light">
                    <div className="d-column mb-4 card-body shadow rounded">
                        <h3 className="text-light bg475868 rounded p-1">Certifications</h3> 
                        <div className="">
                            <div className="row justify-content-center">
                                <h6 className="col-6">Certification Name</h6>
                                <h6 className="col-6">Date Received</h6>
                                <input id="certificationOne" name="Certification" className="form-control col-6" type="text" placeholder="Enter certification here..." />
                                <input id="certificationDateOne" name="Certification Date" className="form-control col-6" type="date"/>
                                <input id="certificationTwo" name="Certification" className="form-control col-6" type="text" placeholder="Enter certification here..."/>
                                <input id="certificationDateTwo" name="Certification Date" className="form-control col-6" type="date"/>
                                <input id="certificationThree" name="Certification" className="form-control col-6" type="text" placeholder="Enter certification here..."/>
                                <input id="certificationDateThree" name="Certification Date" className="form-control col-6" type="date"/>
                                <input id="certificationFour" name="Certification" className="form-control col-6" type="text" placeholder="Enter certification here..."/>
                                <input id="certificationDateFour" name="Certification Date" className="form-control col-6" type="date"/>
                                <input id="certificationFive" name="Certification" className="form-control col-6" type="text" placeholder="Enter certification here..."/>
                                <input id="certificationDateFive" name="Certification Date" className="form-control col-6" type="date"/>
                            </div>    
                        </div>
                    </div>
                    <div className="d-column mb-3 card-body shadow rounded">
                        <h3 className="text-light bg475868 rounded p-1">Awards</h3> 
                        <div className="d-flex justify-content-center"></div>
                            <div className="row justify-content-center">
                                <h6 className="col-6">Award Name</h6>
                                <h6 className="col-6">Date Received</h6>
                                <input id="awardOneName" name="Award-Name" className="form-control col-5" type="text" placeholder="Enter award here..."/>
                                <input id="awardOneDateReceived" name="Award-Date Received" className="form-control col-5" type="date"/>
                                <input id="awardTwoName" name="Award-Name" className="form-control col-5" type="text" placeholder="Enter award here..."/>
                                <input id="awardTwoDateReceived" name="Award-Date Received" className="form-control col-5" type="date"/>
                                <input id="awardThreeName" name="Award-Name" className="form-control col-5" type="text" placeholder="Enter award here..."/>
                                <input id="awardThreeDateReceived" name="Award-Date Received" className="form-control col-5" type="date"/>
                                <input id="awardFourName" name="Award-Name" className="form-control col-5" type="text" placeholder="Enter award here..."/>
                                <input id="awardFourDateReceived" name="Award-Date Received" className="form-control col-5" type="date"/>
                                <input id="awardFiveName" name="Award-Name" className="form-control col-5" type="text" placeholder="Enter award here..."/>
                                <input id="awardFiveDateReceived" name="Award-Date Received" className="form-control col-5" type="date"/>
                            </div>
                    </div>
                    <div className="d-column mb-3 card-body shadow rounded">
                        <h3 className="text-light bg475868 rounded p-1">Hobbies</h3>
                        <textarea id="extracurricularActivities" name="Hobbies" className="col-7 rounded" placeholder="List hobbies separated by commas(,)"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-column">
            <Link to="/FormFive">
                <button id="continueFour" type="button" className="continue-button-fixed shadow bg5ec7cb tc475868 form-control px-2 py-2 h5">Continue</button>
            </Link>
        </div>
    </div>
</form>

)

export default FormFour