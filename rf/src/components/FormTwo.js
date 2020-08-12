import React from 'react'
import { Link } from "react-router-dom";

const FormTwo = () => (
    <form id="formTwo" className="container-fluid" action="#">
    <div className="d-flex justify-content-around align-items-center text-center">
        <div>
            <Link to="/FormOne">
                <button id="backTwo" type="button" className="back-button-fixed shadow bg5ec7cb tc475868 form-control ml-1 px-2 py-2 h5">Back</button>
            </Link>
        </div>
        <div className="row justify-content-center col-9 animated fadeIn">
            <div className="card col-4 mr-5 shadow">
                <div className="card-header bg475868 text-light rounded">
                    <h3>Previous Employment</h3>
                </div>
                <div id="loadPaidPositionContainer" className="card-body bg-light text-dark">
                    <ul id="loadPaidPosition" className="list-group">
                        <h3 id="one"></h3>
                        <li id="onel" className="list-unstyled"></li>
                        <h3 id="two"></h3>
                        <li id="twol" className="list-unstyled"></li>
                        <h3 id="three"></h3>
                        <li id="threel" className="list-unstyled"></li>
                    </ul>
                    <div id="paidPosText">
                        <p className="text-center">After information on a previously held position has been input, click the <br/><i className="font-weight-bold">Add Paid Position</i><br/> button below to add another position.</p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row justify-content-center">
                        <button id="backPosition" type="button" className="btn shadow bg-dark text-light form-control h5 w-25" disabled>&lt;</button>
                        <h3 id="currentLoc" className="text-monospace mx-3">1</h3>
                        <button id="forwardPosition" type="button" className="btn shadow bg-dark text-light form-control h5 w-25">&gt;</button>
                    </div>
                    <div className="row justify-content-center">
                        <button id="addPosition" type="button" className="btn shadow bg-dark text-light form-control px-2 py-2 h5">Add Paid Position</button>
                        <div id="error"></div>
                    </div>
                </div>  
            </div>
            <div className="card inner-container-scroll shadow" id="jobScroll">
                <div className="card-header bg475868 text-light px-5 rounded">
                    <h3 id="paidPosition">Employment Details</h3>
                </div>
                <div id="preJobOne" className="bg-light animated fadeIn">
                    <div className="d-column mb-3">
                        <h5>Company Name</h5>
                        <input id="jobOneLocation" name="Employer Name" className="form-control" type="text" placeholder="Enter company name"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Type of Business</h5>
                        <input id="typeOfBusiness" name="Type Of Business" className="form-control" type="text" placeholder="Enter type of business"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Job Title</h5>
                        <input id="jobOneTitle" name="Title" className="form-control" type="text" placeholder="Enter job title"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Supervisor Name</h5>
                        <input id="supervisorName" name="Supervisor Name" className="form-control" type="text" placeholder="Enter supervisor name"/>
                    </div>
                    <div className="row justify-content-center mb-3">
                        <div className="d-column col-5">
                            <h5>Beginning Pay</h5>
                            <input id="jobOneBeginPay" name="Beginning Pay" className="form-control" step="0.01" type="number" placeholder="Enter beginning pay"/>
                        </div>
                        <div className="d-column col-5">
                            <h5>Ending Pay</h5>
                            <input id="jobOneEndPay" name="Ending Pay" className="form-control" step="0.01" type="number" placeholder="Enter ending pay"/>
                        </div>
                    </div>
                    <div className="d-column mb-3">
                        <div className="row justify-content-center">
                            <div className="d-column col-5">
                                <h5>Start Date</h5>
                                <input id="jobOneStartDate" name="Start Date" type="date" className="form-control"/>
                            </div>
                            <div className="d-column col-5">
                                <h5>End Date</h5>
                                <input id="jobOneEndDate" name="End Date" type="date" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Job Duties</h5>
                        <input id="jobDuties" name="Duties" className="form-control" type="text" placeholder="Enter job duties"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Did you give a two-weeks notice?</h5>
                        <select id="jobOneTwoWeeksNotice" name="Two-Weeks Notice" className="select dropdown btn btn-secondary dropdown-toggle" role="button">                
                            <option>Select...</option>
                            <option value="No">No</option> 
                            <option value="In person">In person</option>
                            <option value="In writing">In writing</option>
                            <option value="Phone call">Phone call</option>
                            <option value="Other">Other</option>                           
                        </select>
                    </div>
                    <div className="d-column text-center mb-3">
                        <div className="d-column mb-3">
                            <h5>How was job found?</h5>
                            <select id="howWasJobOneFound" name="How Job Was Found" className="select dropdown btn btn-secondary dropdown-toggle" role="button">
                                <option>Select...</option>
                                <option value="Word of mouth">Word of mouth</option>
                                <option value="In person">In person</option>
                                <option value="Online(Job board)">Online(Job board)</option>
                                <option value="Online(Company website)">Online(Company Website)</option>
                                <option value="News paper">News paper</option>
                                <option value="Job fair">Job fair</option>
                                <option value="Other">Other</option>                                         
                            </select>
                        </div>
                        <div className="d-column mb-3">
                            <h5>How did you apply for the job?</h5>
                            <select id="howDidYouApplyForJobOne" name="Applied For The Job" className="select dropdown btn btn-secondary dropdown-toggle" role="button">
                                <option>Select...</option>
                                <option value="In person">In person</option>
                                <option value="Online(Job board)">Online(Job board)</option>
                                <option value="Online(Company website)">Online(Company website)</option>
                                <option value="Job Fair">Job fair</option>
                                <option value="Walk On">Walk on</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="d-column mb-3">
                            <h5>Were you drug tested?</h5>
                            <select id="wereYouDrugTestedJobOne" name="Drug Test" className="select dropdown btn btn-secondary dropdown-toggle">
                                    <option>Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                            </select>
                        </div>
                        <div className="d-column mb-3">
                            <h5>Was a background check required?</h5>
                            <select id="backgroundCheckJobOne" name="Background Check" className="select dropdown btn btn-secondary dropdown-toggle">
                                    <option>Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Skills acquired/developed</h5>
                        <input id="jobOneSkillOne" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobOneSkillTwo" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobOneSkillThree" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobOneSkillFour" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobOneSkillFive" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                    </div>
                    <div className="d-column text-center mb-3">
                        <h5>Responsibilities</h5>
                        <input id="jobOneResponsibilityOne" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobOneResponsibilityTwo" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobOneResponsibilityThree" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobOneResponsibilityFour" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobOneResponsibilityFive" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Managerial responsibilities?</h5>
                        <select id="managerialResponsibilities" name="Managerial Responsibilities" className="select dropdown btn btn-secondary dropdown-toggle">
                                <option>Select...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                        </select>
                        <div className="row justify-content-center mb-3">
                            <div className="row justify-content-center col-12 mb-3">
                                <h5 className="text-center col-12">Length of Time</h5>
                                <select id="jobOneLengthOfTime" name="Length of Time in a Managerial Capacity" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
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
                                <h5 className="text-center">Number of employees</h5>    
                                <select id="jobOneNumberOfEmployees" name="Number of Employees Over in a Managerial Capacity" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                                    <option>Select...</option>
                                    <option value="0 to 5">0 to 5</option>
                                    <option value="6 to 10">6 to 10</option>
                                    <option value="11 to 25">11 to 25</option>
                                    <option value="Over 25">Over 25</option>
                            </select>
                            </div> 
                        </div>
                    </div>
                </div>
                <hr/>
                <div id="preJobTwo" className="bg-light animated fadeIn">
                     <div className="d-column mb-3">
                        <h5>Company Name</h5>
                        <input id="jobTwoLocation" name="Employer Name" className="form-control" type="text" placeholder="Enter company name"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Type of Business</h5>
                        <input id="typeOfBusinessTwo" name="Type Of Business" className="form-control" type="text" placeholder="Enter type of business"/>
                    </div>

                    <div className="d-column mb-3">
                        <h5>Job Title</h5>
                        <input id="jobTwoTitle" name="Title" className="form-control" type="text" placeholder="Enter job title"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Supervisor Name</h5>
                        <input id="supervisorNameTwo" name="Supervisor Name" className="form-control" type="text" placeholder="Enter supervisor name"/>
                    </div>

                    <div className="row justify-content-center mb-3">
                        <div className="d-column col-5">
                            <h5>Beginning Pay</h5>
                            <input id="jobTwoBeginPay" name="Beginning Pay" className="form-control" step="0.01" type="number" placeholder="Enter beginning pay"/>
                        </div>
                        <div className="d-column col-5">
                            <h5>Ending Pay</h5>
                            <input id="jobTwoEndPay" name="Ending Pay" className="form-control" step="0.01" type="number" placeholder="Enter ending pay"/>
                        </div>
                    </div>
                    <div className="d-column mb-3">
                        <div className="row justify-content-center">
                            <div className="d-column col-5">
                                <h5>Start Date</h5>
                                <input id="jobTwoStartDate" name="Start Date" type="date" className="form-control"/>
                            </div>
                            <div className="d-column col-5">
                                <h5>End Date</h5>
                                <input id="jobTwoEndDate" name="End Date" type="date" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Job Duties</h5>
                        <input id="jobDutiesTwo" name="Duties" className="form-control" type="text" placeholder="Enter job duties"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Did you give a two-weeks notice?</h5>
                        <select id="jobTwoTwoWeeksNotice" name="Two-Weeks Notice" className="select dropdown btn btn-secondary dropdown-toggle" role="button">                
                            <option>Select...</option>
                            <option value="No">No</option>
                            <option value="In person">In person</option>
                            <option value="In writing">In writing</option>
                            <option value="Phone call">Phone call</option>
                            <option value="Other">Other</option>                           
                        </select>
                    </div>
                    <div className="d-column text-center mb-3">
                        <div className="d-column mb-3">
                            <h5>How was job found?</h5>
                            <select id="howWasJobTwoFound" name="How Job Was Found" className="select dropdown btn btn-secondary dropdown-toggle" role="button">
                                <option>Select...</option>
                                <option value="Word of mouth">Word of mouth</option>
                                <option value="In person">In person</option>
                                <option value="Online(Job board)">Online(Job board)</option>
                                <option value="Online(Company website)">Online(Company Website)</option>
                                <option value="News paper">News paper</option>
                                <option value="Job fair">Job fair</option>
                                <option value="Other">Other</option>                                          
                            </select>
                        </div>
                        <div className="d-column mb-3">
                            <h5>How did you apply for the job?</h5>
                            <select id="howDidYouApplyForJobTwo" name="Applied For The Job" className="select dropdown btn btn-secondary dropdown-toggle" role="button">
                                <option>Select...</option>
                                <option value="In person">In person</option>
                                <option value="Online(Job board)">Online(Job board)</option>
                                <option value="Online(Company website)">Online(Company website)</option>
                                <option value="Job Fair">Job fair</option>
                                <option value="Walk On">Walk on</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="d-column mb-3">
                            <h5>Were you drug tested?</h5>
                            <select id="wereYouDrugTestedJobTwo" name="Drug Test" className="select dropdown btn btn-secondary dropdown-toggle">
                                    <option>Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                            </select>
                        </div>
                        <div className="d-column mb-3">
                            <h5>Was a background check required?</h5>
                            <select id="backgroundCheckJobTwo" name="Background Check" className="select dropdown btn btn-secondary dropdown-toggle">
                                    <option>Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Skills acquired/developed</h5>
                        <input id="jobTwoSkillOne" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobTwoSkillTwo" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobTwoSkillThree" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobTwoSkillFour" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobTwoSkillFive" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                    </div>
                    <div className="d-column text-center mb-3">
                        <h5>Responsibilities</h5>
                        <input id="jobTwoResponsibilityOne" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobTwoResponsibilityTwo" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobTwoResponsibilityThree" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobTwoResponsibilityFour" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobTwoResponsibilityFive" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                    </div>
                    <div className="d-column mt-3 mb-3">
                        <h5>Managerial responsibilities?</h5>
                        <select id="managerialResponsibilitiesTwo" name="Managerial Responsibilities" className="select dropdown btn btn-secondary dropdown-toggle">
                                <option>Select...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                        </select>
                        <div className="d-column justify-content-center mb-3">
                            <div className="d-column">
                                <h5 className="text-center">Length of Time</h5>
                                <select id="jobTwoLengthOfTime" name="Length of Time in a Managerial Capacity" className="select dropdown btn btn-secondary dropdown-toggle" role="button">
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
                                <h5 className="text-center">Number of employees</h5>    
                                <select id="jobTwoNumberOfEmployees" name="Number of Employees Over in a Managerial Capacity" className="select dropdown btn btn-secondary dropdown-toggle" role="button">
                                    <option>Select...</option>
                                    <option value="0 to 5">0 to 5</option>
                                    <option value="6 to 10">6 to 10</option>
                                    <option value="11 to 25">11 to 25</option>
                                    <option value="Over 25">Over 25</option>
                            </select>
                            </div> 
                        </div>
                    </div>
                </div>
                <hr/>
                <div id="preJobThree" className="bg-light animated fadeIn">
                    <div className="d-column mb-3">
                        <h5>Company Name</h5>
                        <input id="jobThreeLocation" name="Employer Name" className="form-control" type="text" placeholder="Enter company name"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Type of Business</h5>
                        <input id="typeOfBusinessThree" name="Type Of Business" className="form-control" type="text" placeholder="Enter type of business"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Job Title</h5>
                        <input id="jobThreeTitle" name="Title" className="form-control" type="text" placeholder="Enter job title"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Supervisor Name</h5>
                        <input id="supervisorNameThree" name="Supervisor Name" className="form-control" type="text" placeholder="Enter supervisor name"/>
                    </div>
                    <div className="row justify-content-center mb-3">
                        <div className="d-column col-5">
                            <h5>Beginning Pay</h5>
                            <input id="jobThreeBeginPay" name="Beginning Pay" className="form-control" step="0.01" type="number" placeholder="Enter beginning pay"/>
                        </div>
                        <div className="d-column col-5">
                            <h5>Ending Pay</h5>
                            <input id="jobThreeEndPay" name="Ending Pay" className="form-control" step="0.01" type="number" placeholder="Enter Ending pay"/>
                        </div>
                    </div>
                    <div className="d-column mb-3">
                        <div className="row justify-content-center">
                            <div className="d-column col-5">
                                <h5>Start Date</h5>
                                <input id="jobThreeStartDate" name="Start Date" type="date" className="form-control"/>
                            </div>
                            <div className="d-column col-5">
                                <h5>End Date</h5>
                                <input id="jobThreeEndDate" name="End Date" type="date" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Job Duties</h5>
                        <input id="jobDutiesThree" name="Duties" className="form-control" type="text" placeholder="Enter job duties"/>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Did you give a two-weeks notice?</h5>
                        <select id="jobThreeTwoWeeksNotice" name="Two-Weeks Notice" className="select dropdown btn btn-secondary dropdown-toggle my-3" role="button">                
                            <option>Select...</option>
                            <option value="No">No</option>
                            <option value="In person">In person</option>
                            <option value="In writing">In writing</option>
                            <option value="Phone call">Phone call</option>
                            <option value="Other">Other</option>                            
                        </select>
                    </div>
                    <div className="d-column text-center mb-3">
                        <div className="d-column mb-3">
                            <h5>How was job found?</h5>
                            <select id="howWasJobThreeFound" name="How Job Was Found" className="select dropdown btn btn-secondary dropdown-toggle" role="button">
                                <option>Select...</option>
                                <option value="Word of mouth">Word of mouth</option>
                                <option value="In person">In person</option>
                                <option value="Online(Job board)">Online(Job board)</option>
                                <option value="Online(Company website)">Online(Company Website)</option>
                                <option value="News paper">News paper</option>
                                <option value="Job fair">Job fair</option>
                                <option value="Other">Other</option>                                        
                            </select>
                        </div>
                        <div className="d-column mb-3">
                            <h5>How did you apply for the job?</h5>
                            <select id="howDidYouApplyForJobThree" name="Applied For The Job" className="select dropdown btn btn-secondary dropdown-toggle" role="button">
                                <option>Select...</option>
                                <option value="In person">In person</option>
                                <option value="Online(Job board)">Online(Job board)</option>
                                <option value="Online(Company website)">Online(Company website)</option>
                                <option value="Job Fair">Job fair</option>
                                <option value="Walk On">Walk on</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="d-column mb-3">
                            <h5>Were you drug tested?</h5>
                            <select id="wereYouDrugTestedJobThree" name="Drug Test" className="select dropdown btn btn-secondary dropdown-toggle">
                                <option>Select...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="d-column mb-3">
                            <h5>Was a background check required?</h5>
                            <select id="backgroundCheckJobThree" name="Background Check" className="select dropdown btn btn-secondary dropdown-toggle">
                                <option>Select...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-column mb-3">
                        <h5>Skills acquired/developed</h5>
                        <input id="jobThreeSkillOne" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobThreeSkillTwo" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobThreeSkillThree" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobThreeSkillFour" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                        <input id="jobThreeSkillFive" name="Skill" className="form-control" type="text" placeholder="Enter skill here"/>
                    </div>
                    <div className="d-column text-center mb-3">
                        <h5>Responsibilities</h5>
                        <input id="jobThreeResponsibilityOne" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobThreeResponsibilityTwo" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobThreeResponsibilityThree" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobThreeResponsibilityFour" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                        <input id="jobThreeResponsibilityFive" name="Responsibility" className="form-control" type="text" placeholder="Enter responsibility here"/>
                    </div>
                    <div className="d-column mt-3 mb-3">
                        <h5>Managerial responsibilities?</h5>
                        <select id="managerialResponsibilitiesThree" name="Managerial Responsibilities" className="select dropdown btn btn-secondary dropdown-toggle">
                                <option>Select...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                        </select>
                        <div className="d-column justify-content-center mb-3">
                            <div className="d-column mb-3">
                                <h5 className="text-center">Length of Time</h5>
                                <select id="jobThreeLengthOfTime" name="Length of Time in a Managerial Capacity" className="select dropdown btn btn-secondary dropdown-toggle" role="button">
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
                                <h5 className="text-center">Number of employees</h5>    
                                <select id="jobThreeNumberOfEmployees" name="Number of Employees Over in a Managerial Capacity" className="select dropdown btn btn-secondary dropdown-toggle" role="button">
                                    <option>Select...</option>
                                    <option value="0 to 5">0 to 5</option>
                                    <option value="6 to 10">6 to 10</option>
                                    <option value="11 to 25">11 to 25</option>
                                    <option value="Over 25">Over 25</option>
                            </select>
                            </div> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div>
            <Link to="/FormThree">
                <button id="continueTwo" type="button" className="continue-button-fixed shadow bg5ec7cb tc475868 form-control px-2 py-2 h5">Continue</button>
            </Link>
        </div>
    </div>
</form>
)

export default FormTwo