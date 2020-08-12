import React from 'react'
import { Link } from "react-router-dom";

const FormFive = () => (
    <form id="formFive" className="container-fluid" action="#">
    <div className="d-flex justify-content-around align-items-center text-center">
        <div>
            <Link to="/FormFour">
                <button id="backFive" type="button" className="back-button-fixed shadow bg5ec7cb tc475868 form-control ml-1 px-2 py-2 h5">Back</button>
            </Link>
        </div>
        <div className="row justify-content-center col-9 animated fadeIn">
            
            <div className="card col-4 mr-5 shadow">
                <div className="card-header bg475868 text-light rounded">
                    <h3>Incarceration Positions Added</h3>
                </div>
                <div id="loadIncarcerationPaidPositionContainer" className="card-body bg-light text-dark">
                    <ul id="loadIncarcerationPaidPosition" className="list-group">
                        <li id="oneI" className="list-unstyled"></li>
                        <li id="twoI" className="list-unstyled"></li>
                        <li id="threeI" className="list-unstyled"></li>
                    </ul>
                    <div id="incPosText">
                        <p className="text-center">After information on a previously held position has been input, click the <br/><i className="font-weight-bold">Add Position</i><br/> button below to add another position.</p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row justify-content-center">
                        <button id="backIncPosition" type="button" className="btn shadow bg-dark text-light form-control h5 w-25" disabled>&lt;</button>
                        <h3 id="currentIncLoc" className="text-monospace mx-3">1</h3>
                        <button id="forwardIncPosition" type="button" className="btn shadow bg-dark text-light form-control h5 w-25">&gt;</button>
                    </div>
                    <div className="row justify-content-center">
                        <button id="incAddPosition" type="button" className="btn shadow bg-dark text-light form-control px-2 py-2 h5">Add Position</button>
                        <div id="incError"></div>
                    </div>
                </div>  
            </div>
            <div className="card col-7 inner-container-scroll shadow" id="incJobScroll">
                <div className="card-header bg475868 text-light px-5 rounded">
                    <h3 id="incPaidPosition">Employment Details</h3>
                </div>
              
                <div id="incJobOne" className="bg-light animated fadeIn">
                    <div className="d-column mb-3">
                        <h5>Job Title</h5>
                        <input id="incJobOneTitle" name="Title" className="form-control" type="text" placeholder="Enter job title here..."/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Supervisor Name and Title</h5>
                        <div className="row justify-content-center">
                            <input id="incJobOneSupervisorName" name="Supervisor Name" className="form-control col-5" type="text" placeholder="Enter supervisor name here..."/>
                            <input id="incJobOneSupervisorTitle" type="text" name="Supervisor Title" className="col-5 form-control" placeholder="Enter supervisor title here..."/>   
                        </div>
                    </div>
                    <div className="row justify-content-center col-12 mb-3">
                        <h5 className="text-center col-12">Length of Time</h5>
                        <select id="incJobOneLengthOfTime" name="Length of Time" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="0 to 3 months">0 to 3 months</option>
                            <option value="4 to 6 months">4 to 6 months</option>
                            <option value="7 to 12 months">7 to 12 months</option>
                            <option value="1 to 2 years">1 to 2 years</option>
                            <option value="3 to 4 years">3 to 4 years</option>
                            <option value="Over 4 years">Over 4 years</option>
                        </select>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Circumstances surrounding job change</h5>
                        <input id="incJobOneReasonForLeaving" name="Circumstances" className="form-control" type="text" placeholder="Enter circumstances here..."/>
                    </div>
                    <div className="d-column my-3">
                        <h5>Skills acquired/developed</h5>
                        <input id="incJobOneSkillOne" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobOneSkillTwo" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobOneSkillThree" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobOneSkillFour" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobOneSkillFive" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                    </div>
                    <div className="d-column text-center">
                        <h5>Responsibilities on the job</h5>
                        <input id="incJobOneResponsibilityOne" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobOneResponsibilityTwo" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobOneResponsibilityThree" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobOneResponsibilityFour" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobOneResponsibilityFive" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                    </div>
                </div>
                <hr/>
                <div id="incJobTwo" className="bg-light animated fadeIn">
                    <div className="d-column mb-3">
                        <h5>Job Title</h5>
                        <input id="incJobTwoTitle" name="Title" className="form-control" type="text" placeholder="Enter job title here..."/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Supervisor Name and Title</h5>
                        <div className="row justify-content-center">
                            <input id="incJobTwoSupervisorName" name="Supervisor Name" className="form-control col-5" type="text" placeholder="Enter supervisor name here..."/>
                            <input id="incJobTwoSupervisorTitle" type="text" name="Supervisor Title" className="col-5 form-control" placeholder="Enter supervisor title here..."/>          
                        </div>
                    </div>
                    <div className="row justify-content-center col-12 mb-3">
                        <h5 className="text-center col-12">Length of Time</h5>
                        <select id="incJobTwoLengthOfTime" name="Length of Time" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="0 to 3 months">0 to 3 months</option>
                            <option value="4 to 6 months">4 to 6 months</option>
                            <option value="7 to 12 months">7 to 12 months</option>
                            <option value="1 to 2 years">1 to 2 years</option>
                            <option value="3 to 4 years">3 to 4 years</option>
                            <option value="Over 4 years">Over 4 years</option>
                        </select>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Circumstances surrounding job change</h5>
                        <input id="incJobTwoReasonForLeaving" name="Circumstances" className="form-control" type="text" placeholder="Enter circumstances here..."/>
                    </div>
                    <div className="d-column my-3">
                        <h5>Skills acquired/developed</h5>
                        <input id="incJobTwoSkillOne" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobTwoSkillTwo" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobTwoSkillThree" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobTwoSkillFour" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobTwoSkillFive" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                    </div>
                    <div className="d-column text-center">
                        <h5>Responsibilities on the job</h5>
                        <input id="incJobTwoResponsibilityOne" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobTwoResponsibilityTwo" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobTwoResponsibilityThree" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobTwoResponsibilityFour" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobTwoResponsibilityFive" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                    </div>  
                </div>
                <hr/>
                <div id="incJobThree" className="bg-light animated fadeIn">
                    <div className="d-column mb-3">
                        <h5>Job Title</h5>
                        <input id="incJobThreeTitle" name="Title" className="form-control" type="text" placeholder="Enter job title here..."/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Supervisor Name and Title</h5>
                        <div className="row justify-content-center">
                            <input id="incJobThreeSupervisorName" name="Supervisor Name" className="form-control col-5" type="text" placeholder="Enter supervisor name here..."/>
                            <input id="incJobThreeSupervisorTitle" type="text" name="Supervisor Title" className="col-5 form-control" placeholder="Enter supervisor title here..."/>
                        </div>
                    </div>
                    <div className="row justify-content-center col-12 mb-3">
                        <h5 className="text-center col-12">Length of Time</h5>
                        <select id="incJobThreeLengthOfTime" name="Length of Time" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="0 to 3 months">0 to 3 months</option>
                            <option value="4 to 6 months">4 to 6 months</option>
                            <option value="7 to 12 months">7 to 12 months</option>
                            <option value="1 to 2 years">1 to 2 years</option>
                            <option value="3 to 4 years">3 to 4 years</option>
                            <option value="Over 4 years">Over 4 years</option>
                        </select>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Circumstances surrounding job change</h5>
                        <input id="incJobThreeReasonForLeaving" name="Circumstances" className="form-control" type="text" placeholder="Enter circumstances here..."/>
                    </div>
                    <div className="d-column my-3">
                        <h5>Skills acquired/developed</h5>
                        <input id="incJobThreeSkillOne" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobThreeSkillTwo" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobThreeSkillThree" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobThreeSkillFour" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                        <input id="incJobThreeSkillFive" name="Skill" className="form-control" type="text" placeholder="Enter skill here..."/>
                    </div>
                    <div className="d-column text-center">
                        <h5>Responsibilities on the job</h5>
                        <input id="incJobThreeResponsibilityOne" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobThreeResponsibilityTwo" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobThreeResponsibilityThree" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobThreeResponsibilityFour" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                        <input id="incJobThreeResponsibilityFive" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here..."/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Link to="/FormSix">
                <button id="continueFive" type="button" className="continue-button-fixed shadow bg5ec7cb tc475868  form-control px-2 py-2 h5">Continue</button>
            </Link>
        </div>
    </div>
</form>
    
)

export default FormFive