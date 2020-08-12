import React from 'react'
import { Link } from "react-router-dom"

const FormSeven = () => (
    <form id="formSeven" className="container-fluid">
    <div className="d-flex justify-content-around align-items-center">
        <div>
            <Link to="FormSix">
                <button id="backSeven" type="button" className="back-button-fixed shadow bg5ec7cb tc475868 form-control ml-1 px-2 py-2 h5">Back</button>
            </Link>
        </div>
        <div className="row justify-content-center col-9 animated fadeIn">
            <div id="formOneScroll" className="card inner-container-scroll shadow text-center">
                <div className="card-header bg475868 text-light">
                    <h3>Individual Employment Plan</h3>
                </div>
                <div className="card-body container-fluid bg-light text-dark">
                    <div className="row justify-content-center mb-3">
                    </div>
                    <div className="d-column col-12">
                        <div className="card-header mb-3">
                            <h1>Assessment</h1>
                        </div>
                        <div className="d-column mb-3">
                            <div className="col-12 mb-3 row justify-content-center align-items-center">
                                <h5 className="col-12">Summarize prior work experience:</h5>
                                <textarea name="Prior Work Experience Summary" className="col-7 form-control" placeholder="Summarize here..."></textarea>
                            </div>
                            <div className="col-12 mb-3 row justify-content-center align-items-center">
                                <h5  className="col-12">Summarize academic and occupational skills levels:</h5>
                                <textarea name="Academic And Occupational Skills Summary" className="col-7 form-control" placeholder="Summarize here..."></textarea>
                            </div>
                        </div>
                        <div className="d-column col-12 mb-3">
                            <div className="d-column col-12 mb-3">
                                <h5>Are you currently employed?</h5>
                                <select id="participantCurrentlyEmployed" name="Is Participant Currently Employed" className="select dropdown btn btn-secondary dropdown-toggle">
                                    <option>Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="mr-3">
                                    <h5>Current wages:</h5>
                                    <input type="number" name="Current Wages" className="form-control"/>
                                </div>
                                <div>
                                    <h5>Wage rate:</h5>
                                    <select id="wageRate" name="Wage Rate" className="select dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="Hourly">Hourly</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Biweekly">Biweekly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Annually">Annually</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-column col-12 my-5">
                                <h5>Do the wages lead to economic self-sufficiency?</h5>
                                <select id="economicSufficiency" name="Employment Leads To Economic Self-sufficiency" className="select dropdown btn btn-secondary dropdown-toggle">
                                    <option>Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div className="d-column col-12 my-2">
                                    <h5>If not, is it likely you can find employment leading to economic self-sufficiency?</h5>
                                    <select id="economicSufficiency" name="Can Find Employment That Leads To Economic Self-sufficiency" className="select dropdown btn btn-secondary dropdown-toggle">
                                        <option>Select...</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="col-12 row justify-content-center align-items-center">
                                    <h5 className="col-12">Explain answer (why or why not?)</h5>
                                    <textarea id="explainReasoning" name="Reasoning For Answers" className="col-7 form-control" placeholder="Explain here..."></textarea>
                                </div>
                            </div>
                            <div className="d-column col-12 my-5">
                                <h5 className="col-12">Can you perform the essential functions of the job without reasonable accommodation? </h5>
                                <select id="essentialFunctions" name="Can Perform Essential Job functions" className="select dropdown btn btn-secondary dropdown-toggle">
                                    <option>Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div className="col-12 mb-3 row justify-content-center align-items-center">
                                    <h5>If no, please list the reasonable accommodations required:</h5>
                                    <textarea id="explainReasoning" name="Reasoning For Answers" className="col-7 form-control" placeholder="List here..."></textarea>
                                </div>
                            </div>
                            <div  className="d-flex flex-column col-12 mb-3 text-justify align-items-center justify-content-center">
                                <h5>Do any of the following statements apply to you?</h5>
                                <ul>
                                    <li>I am a member of a family that has received assistance from Temporary Assistance for Needy Families (TANF) for any 9 months during the past 18 months.</li>
                                    <li>I am a veteran and a member of a family that received Supplemental Nutrition Assistance Program (SNAP) benefits (food stamps) for at least a 3-month period during the past 15 months.
                                    </li>
                                    <li>I was referred here by a rehabilitation agency approved by the state, an employment network under the Ticket to Work program, or the Department of Veterans Affairs.
                                    </li>
                                    <li>I am at least age 18 but not age 40 or older and I am a member of a family that:
                                    </li>
                                    <li>a. Received SNAP benefits (food stamps) for the past 6 months; or
                                    </li>
                                    <li>b. Received SNAP benefits (food stamps) for at least 3 of the past 5 months, but is no longer eligible to receive them.
                                    </li>
                                    <li>During the past year, I was convicted of a felony or released from prison for a felony.
                                    </li>
                                    <li>I received supplemental security income (SSI) benefits for any month ending during the past 60 days.
                                    </li>
                                    <li>I am a veteran and I was unemployed for a period or periods totaling at least 4 weeks but less than 6 months during the past year.
                                    </li>
                                </ul>
                                <select id="doAnyApply" name="Assistance Information" className="select dropdown btn btn-secondary dropdown-toggle">
                                    <option>Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="d-column col-12 mb-3">
                                <h5> Are you a veteran and were unemployed for a period or periods totaling at least 6 months during the past year?</h5>
                                <select id="veteranUnemployed" name="Veteran Unemployed For A Total Of At Least 6 Months" className="select dropdown btn btn-secondary dropdown-toggle">
                                    <option>Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div  className="d-flex flex-column col-12 mb-3 text-justify align-items-center justify-content-center">
                                <h5>Are you a member of a family that...</h5>
                                <ul>
                                    <li>Received TANF payments for at least the past 18 months; or</li>
                                    <li>Received TANF payments for any 18 months beginning after August 5, 1997, and the earliest 18-month period beginning after August 5, 1997, ended during the past 2 years; or</li>
                                    <li>Stopped being eligible for TANF payments during the past 2 years because federal or state law limited the maximum time those payments could be made.</li>
                                </ul>
                                <select id="tanf" name="TANF Family Assistance" className="select dropdown btn btn-secondary dropdown-toggle">
                                    <option>Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="d-column col-12 mb-3">
                                <h5>Are you in a period of unemployment that is at least 27 consecutive weeks and for all or part of that period you received unemployment compensation?</h5>
                                <select id="periodOfUnemployment" name="Period Of Unemployment" className="select dropdown btn btn-secondary dropdown-toggle">
                                    <option>Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="d-column col-6 mb-3">
                                    <h5>List Strengths:</h5>
                                    <input id="StrengthOne" name="Strength" className="form-control" type="text" placeholder="Enter Strength here..."/>
                                    <input id="StrengthTwo" name="Strength" className="form-control" type="text" placeholder="Enter Strength here..."/>
                                    <input id="StrengthThree" name="Strength" className="form-control" type="text" placeholder="Enter Strength here..."/>
                                    <input id="StrengthFour" name="Strength" className="form-control" type="text" placeholder="Enter Strength here..."/>
                                    <input id="StrengthFive" name="Strength" className="form-control" type="text" placeholder="Enter Strength here..."/>
                                    <input id="StrengthSix" name="Strength" className="form-control" type="text" placeholder="Enter Strength here..."/>
                                    <input id="StrengthSeven" name="Strength" className="form-control" type="text" placeholder="Enter Strength here..."/>
                                    <input id="StrengthEight" name="Strength" className="form-control" type="text" placeholder="Enter Strength here..."/>
                                    <input id="StrengthNine" name="Strength" className="form-control" type="text" placeholder="Enter Strength here..."/>
                                    <input id="StrengthTen" name="Strength" className="form-control" type="text" placeholder="Enter Strength here..."/>
                                </div>
                                <div className="d-column col-6 mb-3">
                                    <h5>List Interests:</h5>
                                    <input id="InterestOne" name="Interest" className="form-control" type="text" placeholder="Enter Interest here..."/>
                                    <input id="InterestTwo" name="Interest" className="form-control" type="text" placeholder="Enter Interest here..."/>
                                    <input id="InterestThree" name="Interest" className="form-control" type="text" placeholder="Enter Interest here..."/>
                                    <input id="InterestFour" name="Interest" className="form-control" type="text" placeholder="Enter Interest here..."/>
                                    <input id="InterestFive" name="Interest" className="form-control" type="text" placeholder="Enter Interest here..."/>
                                    <input id="InterestSix" name="Interest" className="form-control" type="text" placeholder="Enter Interest here..."/>
                                    <input id="InterestSeven" name="Interest" className="form-control" type="text" placeholder="Enter Interest here..."/>
                                    <input id="InterestEight" name="Interest" className="form-control" type="text" placeholder="Enter Interest here..."/>
                                    <input id="InterestNine" name="Interest" className="form-control" type="text" placeholder="Enter Interest here..."/>
                                    <input id="InterestTen" name="Interest" className="form-control" type="text" placeholder="Enter Interest here..."/>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="d-column col-6 mb-3">
                                    <h5>List potential pathways or occupations:</h5>
                                    <input id="PathwayOne" name="Pathway" className="form-control" type="text" placeholder="Enter pathway here..."/>
                                    <input id="PathwayTwo" name="Pathway" className="form-control" type="text" placeholder="Enter pathway here..."/>
                                    <input id="PathwayThree" name="Pathway" className="form-control" type="text" placeholder="Enter pathway here..."/>
                                    <input id="PathwayFour" name="Pathway" className="form-control" type="text" placeholder="Enter pathway here..."/>                                   
                                </div>
                                <div className="d-column col-6 mb-3">
                                    <h5>Summarize steps to employment in occupation:</h5>
                                    <input id="StepsOne" name="Steps" className="form-control" type="text" placeholder="Enter step here..."/>
                                    <input id="StepsTwo" name="Steps" className="form-control" type="text" placeholder="Enter next step here..."/>
                                    <input id="StepsThree" name="Steps" className="form-control" type="text" placeholder="Enter next step here..."/>
                                    <input id="StepsFour" name="Steps" className="form-control" type="text" placeholder="Enter next step here..."/>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="d-column col-12 my-5">
                                    <div className="row justify-content-center col-12">
                                        <h5 className="col-12">Is participant currently enrolled in post-secondary education?</h5>
                                        <select id="postsecondaryEducation" name="Enrolled In Post-Secondary Education" className="select dropdown btn btn-secondary dropdown-toggle">
                                            <option>Select...</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="row justify-content-center col-12">
                                        <h5 className="col-12">If yes, give details:</h5>
                                        <textarea id="postsecondaryEduDetails" className="col-7 form-control" name="Post-Secondary Education Details" placeholder="Explain here..."></textarea>
                                    </div>                                   
                                </div>
                                <div className="d-column col-12 mb-5">
                                    <div className="row justify-content-center col-12">
                                        <h5 className="col-12">Is participant currently enrolled in any type of workplace training?</h5>
                                        <select id="workplaceTraining" name="Enrolled In Workplace Training" className="select dropdown btn btn-secondary dropdown-toggle">
                                            <option>Select...</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="row justify-content-center col-12">
                                        <h5 className="col-12">If yes, give details:</h5>
                                        <textarea id="workplaceTrainingDetails" className="col-7 form-control" name="Workplace Training Details" placeholder="Explain here..."></textarea>
                                    </div>                                                      
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="d-flex flex-column col-6 mb-3 align-items-center">
                                    <h5>Long term goal(s)</h5>
                                    <textarea id="longTermGoal" className="col-7 form-control" name="Long Term Goal(s)" placeholder="Goal(s) here..."></textarea>
                                </div>
                                <div className="d-flex flex-column col-6 mb-3 align-items-center">
                                    <h5>Short-term goal(s)</h5>
                                    <textarea id="shorttermGoal" className="col-7 form-control" name="Short-term Goal(s)" placeholder="Goal(s) here..."></textarea>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="d-column col-6 mb-3">
                                    <h5>What are barriers to meeting these goals?</h5>
                                    <input id="BarrierOne" name="Barrier" className="form-control" type="text" placeholder="Enter barrier here..."/>
                                    <input id="BarrierTwo" name="Barrier" className="form-control" type="text" placeholder="Enter barrier here..."/>
                                    <input id="BarrierThree" name="Barrier" className="form-control" type="text" placeholder="Enter barrier here..."/>
                                    <input id="BarrierFour" name="Barrier" className="form-control" type="text" placeholder="Enter barrier here..."/>                                   
                                </div>
                                <div className="d-column col-6 mb-3">
                                    <h5>How will these barriers be overcome?</h5>
                                    <input id="OvercomeOne" name="Overcome" className="form-control" type="text" placeholder="Enter overcome here..."/>
                                    <input id="OvercomeTwo" name="Overcome" className="form-control" type="text" placeholder="Enter overcome here..."/>
                                    <input id="OvercomeThree" name="Overcome" className="form-control" type="text" placeholder="Enter overcome here..."/>
                                    <input id="OvercomeFour" name="Overcome" className="form-control" type="text" placeholder="Enter overcome here..."/>
                                </div>
                                <div className="d-column mb-3">
                                    <div className="d-column col-12 mb-3">
                                        <h5>Are these goals realistic?</h5>
                                        <select id="goalsRealistic" name="Are goals realistic" className="select dropdown btn btn-secondary dropdown-toggle">
                                            <option>Select...</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="d-column col-12 mb-3">
                                        <h5>Will these goals lead to appropriate employment?</h5>
                                        <select id="economicSufficiency" name="Can Find Employment That Leads To Economic Self-sufficiency" className="select dropdown btn btn-secondary dropdown-toggle">
                                            <option>Select...</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="d-flex flex-column align-items-center col-12 mb-3">
                                        <h5>Explain your answer:</h5>
                                        <textarea id="explainAnswer" className="col-7 form-control" name="Explanation To Goals Leading To Appropriate Employment" placeholder="Explain here..."></textarea>
                                    </div>
                                    <div className="d-flex flex-column align-items-center mb-3">
                                        <div className="d-column col-12 mb-3">
                                            <hr/>
                                            <h3><b>Training</b></h3>
                                            <h5>Does participant meet eligibility requirements for training?</h5>
                                            <div className="container-fluid row justify-content-center mx-3 mb-2" id="checkEligibility">
                                                <div className="d-column justify-content-center align-items-center">
                                                    <div className="col-6 input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">
                                                                <input type="checkbox" name="Training" value="Unlikely to obtain or retain self-sufficient(or comparable to past) employment with present skills" aria-label="Checkbox for following text input"/>Unlikely to obtain or retain self-sufficient(or comparable to past) employment with present skills
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">
                                                                <input type="checkbox" name="Training" value="Training will lead to self-sufficiency(or comparable to past wages)" aria-label="Checkbox for following text input"/>Training will lead to self-sufficiency(or comparable to past wages)
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">
                                                                <input type="checkbox" name="Training" value="Have skills to participate in training" aria-label="Checkbox for following text input"/>Have skills to participate in training
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">
                                                                <input type="checkbox" name="Training" value="Desired program of study is on ETPL or is a work-based training" aria-label="Checkbox for following text input"/>Desired program of study is on ETPL or is a work-based training
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>  
                                            <div className="d-flex flex-column align-items-center col-12">
                                                <h5>Explain the answers to these questions:</h5>
                                                <textarea name="Explanation To Answers About Eligibility For Training" className="col-7 form-control" placeholder="Explain here..."></textarea>
                                            </div>
                                            <div className="d-column">
                                                <h5>Begin Date:</h5>
                                                <input type="date" className="form-control" name="Training Begin Date"/>
                                            </div>
                                            <div className="d-column">
                                                <h5>Expected Completion Date:</h5>
                                                <input type="date" className="form-control" name="Expected Completion Date"/>
                                            </div>
                                        </div>
                                        <div className="d-column col-12">
                                            <hr/>
                                            <h3><b>Career Services</b></h3>    
                                            <div className="d-column col-12">
                                                <h5>Are other career services appropriate for participant?</h5>
                                                <select id="careerAppropriate" name="Other Career Services Appropriate For Participant" className="select dropdown btn btn-secondary dropdown-toggle">
                                                    <option>Select...</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className="d-flex flex-column align-items-center  col-12">
                                                <h5>Explain your answers:</h5>
                                                <textarea name="Explanation To Answers About Career Services" className="col-7 form-control" placeholder="Explain here..."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>           
                    </div>
                    <div className="d-column col-12">
                        <div className="card-header">
                            <h1>Employment Plan</h1>
                        </div>
                        <div className="row justify-content-center col-12">
                            <div className="d-flex flex-column align-items-center mb-3 col-12">
                                <h5>What is the primary goal?</h5>
                                <textarea name="Primary Goal" className="col-7 form-control" placeholder="Enter here..."></textarea>
                            </div>
                            <div className="d-flex flex-column align-items-center mb-3 col-12">
                                <h5>What career services are needed to meet the goal?</h5>
                                <textarea name="Career Services Needed" className="col-7 form-control" placeholder="Enter here..."></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center col-12">
                            <div className="d-flex flex-column align-items-center mb-3 col-12">
                                <h5>What training services, if any, are needed to meet the goal?</h5>
                                <textarea name="Training Services Needed" className="col-7 form-control" placeholder="Enter here..."></textarea>
                            </div>
                            <div className="d-flex flex-column align-items-center mb-3 col-12">
                                <h5>What supportive services are needed to meet the goal?</h5>
                                <textarea name="Supportive Services Needed" className="col-7 form-control" placeholder="Enter here..."></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center col-12">
                            <div className="d-flex flex-column align-items-center mb-3 col-12">
                                <h5>Summarize the steps to meeting the primary goal:</h5>
                                <textarea name="Meeting Goal Summary" className="col-7 form-control" placeholder="Enter here..."></textarea>
                            </div>
                            <div className="d-flex flex-column align-items-center mb-3 col-12">
                                <h5>To which partners or other entities should participant be referred(or co-enrolled) to meet the goal?</h5>
                                <textarea name="Partners Or Entities Participant Should Be Referred To" className="col-7 form-control" placeholder="Enter here..."></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center col-12">
                            <div className="d-flex flex-column align-items-center mb-3 col-12">
                                <h5>What are the participant responsibilities in meeting the goal?</h5>
                                <textarea name="Participant Responsibilities In Meeting The Goal" className="col-7 form-control" placeholder="Enter here..."></textarea>
                            </div>
                            <div className="d-flex flex-column align-items-center mb-3 col-12">
                                <h5>What are the program provider's responsibilities in meeting the goal?</h5>
                                <textarea name="Program Responsibilities In Meeting The Goal" className="col-7 form-control" placeholder="Enter here..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Link to="FinalPage">
                <button id="continueSeven" type="button" className="continue-button-fixed shadow bg5ec7cb tc475868 form-control px-2 py-2 h5">Continue</button>
            </Link>
        </div>
    </div>
</form>
)

export default FormSeven