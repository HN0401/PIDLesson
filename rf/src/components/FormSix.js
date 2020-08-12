import React from 'react'
import { Link } from "react-router-dom";


const FormSix = () => (
    <form id="formSix" className="container-fluid" action="#">
    <div className="d-flex justify-content-around align-items-center">
        <div>
            <Link to="FormFive">
                <button id="backSix" type="button" className="back-button-fixed shadow bg5ec7cb tc475868 form-control ml-1 px-2 py-2 h5">Back</button>
            </Link>
        </div>
        <div className="row justify-content-center col-9 animated fadeIn">

            <div className="card inner-container-scroll shadow text-center">

                <div className="card-header text-light bg475868">
                    <h3>Additional Information</h3>
                </div>
                <div className="card-body bg-light container-fluid">
                    <div className="d-column mb-4">
                        <h5>What was your age at the time of your first conviction?</h5>
                        <select id="ageOfFirstConviction" name="Age At First Conviction" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="24 or older">24 or older</option>
                            <option value="18 to 23">18 to 23</option>
                            <option value="15 to 17">15 to 17</option>
                            <option value="Under 15">Under 15</option>
                            <option value="Never">Never</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>Do you receive visits?</h5>
                        <select id="receiveVisits" name="Receive Visits" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="No">No</option>
                            <option value="Rarely">Rarely</option>
                            <option value="Occasionally">Occasionally</option>
                            <option value="Frequently">Frequently</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>Have you considered continuing your education?</h5>
                        <select id="continuingEducation" name="Considered Continuing Education" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="No">No</option>
                            <option value="Would like to take courses">Would like to take courses</option>
                            <option value="Would like to pursue a degree">Would like to pursue a degree</option>
                            <option value="Actively pursuing further education">Actively pursuing further education</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>What was your primary source of income during the most recent six months in the community?</h5>
                        <select id="primarySourceOfIncome" name="Primary Source Of Income" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Employment">Employment</option>
                            <option value="Public assistance">Public assistance</option>
                            <option value="Temporary unemployment">Temporary unemployment</option>
                            <option value="SSI due to disability">SSI due to disability</option>
                            <option value="Pension">Pension</option>
                            <option value="Tribal per diem">Tribal per diem</option>
                            <option value="Family financial support">Family financial support</option>
                            <option value="Domestic partner/ Spouse support">Domestic partner/ Spouse support</option>
                            <option value="Family inheritance">Family inheritance</option>
                            <option value="Criminal behavior">Criminal behavior</option>
                            <option value="Working 'under the table'">Working 'under the table'</option>
                            <option value="No income">No income</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>How would you classNameify your handling of your finances during the most recent six months in the community?</h5>
                        <select id="handlingFinances" name="How Finances Were Handled" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Saved money regularly and met all financial requirements">Saved money regularly and met all financial requirements</option>
                            <option value="Met financial requirements, but unable to save any money">Met financial requirements, but unable to save any money</option>
                            <option value="Could not manage debt/finances">Could not manage debt/finances</option>
                            <option value="No interest in managing finances">No interest in managing finances</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>Do you currently have health insurance?</h5>
                        <select id="healthInsurance" name="Health Insurance" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>How supportive were your friends/associates during the most recent six months in the community?</h5>
                        <select id="supportiveFriends" name="Were Friends Previously Supportive" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Friends willing to assist">Friends willing to assist</option>
                            <option value="Pro-social community ties">Pro-social community ties</option>
                            <option value="No friends">No friends</option>
                            <option value="Unable to maintain interpersonal relationships;Unstable relationships only">Unable to maintain interpersonal relationships;Unstable relationships only</option>
                            <option value="Friends involved in anti-social and/or criminal behaviors">Friends involved in anti-social and/or criminal behaviors</option>
                            <option value="Associated with gang members">Associated with gang members</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>How supportive are your friends/associates currently?</h5>
                        <select id="currentlySupportiveFriends" name="Are Friends Currently Supportive" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Positive, non-problematic">Positive, non-problematic</option>
                            <option value="Spends majority of time alone">Spends majority of time alone</option>
                            <option value="Negative, problematic behavior">Negative, problematic behavior</option>
                            <option value="STG affiliates and/or assaultive behaviors">STG affiliates and/or assaultive behaviors</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>How do you respond to the influences of anti-social friends/associates</h5>
                        <select id="responseToAntiSocialFriends" name="Response to Anti-Social Friends" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="No anti-social friends">No anti-social friends</option>
                            <option value="Chooses not to associate with anti-social friends">Chooses not to associate with anti-social friends</option>
                            <option value="Almost always resists going along with anti-social friends">Almost always resists going along with anti-social friends</option>
                            <option value="Rarely resists going along with anti-social friends">Rarely resists going along with anti-social friends</option>
                            <option value="Never resists going along with anti-social friends">Never resists going along with anti-social friends</option>
                            <option value="Admires/emulates anti-social friends">Admires/emulates anti-social friends</option>
                            <option value="Leads anti-social friends">Leads anti-social friends</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>How would you classNameify your current pro-social support during the most recent six months in the community?</h5>
                        <select id="currentProSocialSupport" name="Current Pro-social Support classNameification" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Remote living or no real community">Remote living or no real community</option>
                            <option value="Strong pro-social support">Strong pro-social support</option>
                            <option value="Some exposure to anti-social influence, lacks ties">Some exposure to anti-social influence, lacks ties</option>
                            <option value="Frequent anti-social activity">Frequent anti-social activity</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>What do you feel are your needs concerning re-entry services?</h5>
                        <select id="needsConcerningReEntry" name="Needs Concerning Re-entry" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="No need for re-entry services">No need for re-entry services</option>
                            <option value="Need for re-entry services unknown">Need for re-entry services unknown</option>
                            <option value="Can live independently, but would benefit from services">Can live independently, but would benefit from services</option>
                            <option value="Cannot live independently without services">Cannot live independently without services</option>
                        </select>
                    </div><div className="d-column mb-4">
                        <h5>Have you struggled with drug, alcohol, or addiction of any kind in the past?</h5>
                        <select id="drugsAndAlcohol" name="Drug and Alcohol Abuse" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="No need for re-entry services">Yes</option>
                            <option value="Need for re-entry services unknown">No</option>
                        </select>
                    </div>
                    <h5 className="col-12">Check any service that you would benefit from...</h5>  
                    <div className="container-fluid row justify-content-center mx-3 mb-4" id="checkOne">
                        <div className="d-column justify-content-center align-items-center">
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Medical Services" aria-label="Checkbox for following text input"/>Medical services
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Medication assistance" aria-label="Checkbox for following text input"/>Medication assistance
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Mental health assistance" aria-label="Checkbox for following text input"/>Mental health assistance
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Substance use treatment services" aria-label="Checkbox for following text input"/>Substance use treatment services
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Assistance obtaining identification" aria-label="Checkbox for following text input"/>Assistance obtaining identification
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Housing assistance" aria-label="Checkbox for following text input"/>Housing assistance
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Sex offender treatment services" aria-label="Checkbox for following text input"/>Sex offender treatment services
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Food assistance" aria-label="Checkbox for following text input"/>Food assistance
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Education assistance" aria-label="Checkbox for following text input"/>Education assistance
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Benefits assistance (veterans, disability, health care insurance, etc.)" aria-label="Checkbox for following text input"/>Benefits/insurance assistance
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-column justify-content-center align-items-center">
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Accessing community support services" aria-label="Checkbox for following text input"/>Accessing community support services
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Employment assistance" aria-label="Checkbox for following text input"/>Employment assistance
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Budgeting/Financial assistance" aria-label="Checkbox for following text input"/>Budgeting/Financial assistance
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Hygiene assistance" aria-label="Checkbox for following text input"/>Hygiene assistance
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Public transportation assistance" aria-label="Checkbox for following text input"/>Public transportation assistance
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Legal assistance" aria-label="Checkbox for following text input"/>Legal assistance
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Social support" aria-label="Checkbox for following text input"/>Social support
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Religious support" aria-label="Checkbox for following text input"/>Religious support
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" name="Benefit From Service" value="Clothing assistance" aria-label="Checkbox for following text input"/>Clothing assistance
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="d-column mb-4">
                        <h5>Are you currently married?</h5>
                        <select id="currentlyMarried" name="Currently Married" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>How would you classNameify the influence of your partner during the most recent six months?</h5>
                        <select id="influenceOfPartner" name="Influence Of Your Partner" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="No current relationship">No current relationship</option>
                            <option value="Positive, pro-social">Positive, pro-social</option>
                            <option value="Not involved, estranged">Not involved, estranged</option>
                            <option value="Minimal">Minimal</option>
                            <option value="Living apart">Living apart</option>
                            <option value="Negative, anti-social">Negative, anti-social</option>
                            <option value="Enables anti-social behavior">Enables anti-social behavior</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>Has your partner been willing to help during the most recent six months?</h5>
                        <select id="partnerWillingToHelp" name="Partner Willing To Help" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="No current relationship">No current relationship</option>
                            <option value="Not involved; estranged">Not involved; estranged</option>
                            <option value="Generally willing to intervene and support">Generally willing to intervene and support</option>
                            <option value="Not willing to intervene and support">Not willing to intervene and support</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>Do you currently have family members that are involved in you life?</h5>
                        <select id="currentFamilyInvolved" name="Currently Have Family Involvement" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>How would you classNameify the influence of the family member that is most involved in your life?</h5>
                        <select id="influenceOfFamily" name="Influence Of Family Members" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Minimal or no family involvement">Minimal or no family involvement</option>
                            <option value="Positive / Pro-social">Positive / Pro-social</option>
                            <option value="Negative / Anti-social">Negative / Anti-social</option>
                            <option value="Frequently enables offender’s anti-social behavior">Frequently enables offender’s anti-social behavior</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>Has the family member that is most involved in your life been willing to help during the most recent six months?</h5>
                        <select id="familyMemberWillingToHelp" name="Family Member Willing To Help" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="No current family involvement">No current family involvement</option>
                            <option value="Generally willing to intervene and support">Generally willing to intervene and support</option>
                            <option value="Not willing to intervene and support">Not willing to intervene and support</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>What would you consider to be your motivation for all criminal behaviors in your lifetime?</h5>
                        <select id="motivationForCriminalBehavior" name="Motivation For Criminal Behaviors" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Deny any criminal behavior">Deny any criminal behavior</option>
                            <option value="Money / material gain">Money / material gain</option>
                            <option value="Impulsive, opportunistic">Impulsive, opportunistic</option>
                            <option value="Power, dominance, or control">Power, dominance, or control</option>
                            <option value="Anger">Anger</option>
                            <option value="Retaliation, vengeance">Retaliation, vengeance</option>
                            <option value="Reaction to conflict or stress">Reaction to conflict or stress</option>
                            <option value="Peer status, acceptance, or attention">Peer status, acceptance, or attention</option>
                            <option value="Security Threat Group motivated">Security Threat Group motivated</option>
                            <option value="Sexual gratification">Sexual gratification</option>
                            <option value="Excitement, amusement, fun">Excitement, amusement, fun</option>
                            <option value="Obtain drugs, chemical addiction">Obtain drugs, chemical addiction</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>How would you classNameify your behavior toward authority figures?</h5>
                        <select id="behaviorTowardAuthority" name="Behavior Toward Authority" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Respects authority, compliant">Respects authority, compliant</option>
                            <option value="Indifferent towards authority, some compliance">Indifferent towards authority, some compliance</option>
                            <option value="Resentful, defiant towards authority, non-compliant">Resentful, defiant towards authority, non-compliant</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>How would you classNameify your readiness for changing your lifestyle?</h5>
                        <select id="readinessForChange" name="classNameify Readiness For Change" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Taking specific steps towards change">Taking specific steps towards change</option>
                            <option value="Sees need for change, but not taking taking specific steps">Sees need for change, but not taking taking specific steps</option>
                            <option value="Does not see need for change">Does not see need for change</option>
                            <option value="Hostile towards change">Hostile towards change</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>Do you feel that you will be able to successfully complete supervision or parole?</h5>
                        <select id="successfullyCompleteParole" name="Successfully Complete Parole" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Not seeking parole">Not seeking parole</option>
                            <option value="Not eligible for parole">Not eligible for parole</option>
                            <option value="Taking specific steps toward change, confident in success">Taking specific steps toward change, confident in success</option>
                            <option value="Currently believes will succeed on supervision, has developed skills">Currently believes will succeed on supervision, has developed skills</option>
                            <option value="Currently believes will succeed on supervision, has not yet developed skills">Currently believes will succeed on supervision, has not yet developed skills</option>
                            <option value="Currently believes will succeed only if external controls are in place">Currently believes will succeed only if external controls are in place</option>
                            <option value="Currently does not believe will be successful on supervision">Currently does not believe will be successful on supervision</option>
                            <option value="Currently hostile to supervision">Currently hostile to supervision</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>How would you classNameify your current interactions with others?</h5>
                        <select id="currentInteractions" name="Current Interaction With Others" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Uses social skills effectively">Uses social skills effectively</option>
                            <option value="Has adequate social skills but isolates self by choice">Has adequate social skills but isolates self by choice</option>
                            <option value="Avoids others, lacks social skills, shy, withdrawn">Avoids others, lacks social skills, shy, withdrawn</option>
                            <option value="Attempts dealing with others, but is rejected">Attempts dealing with others, but is rejected</option>
                            <option value="Uses aggression, conflict, arguments, fights in dealing with others">Uses aggression, conflict, arguments, fights in dealing with others</option>
                        </select>
                    </div>
                    <div className="d-column mb-4">
                        <h5>How would you classNameify your problem solving abilities?</h5>
                        <select id="problemSolving" name="Problem Solving Abilities" className="select col-5 dropdown btn btn-secondary dropdown-toggle" role="button">
                            <option>Select...</option>
                            <option value="Thinks through situations logically">Thinks through situations logically</option>
                            <option value="Problem solving skills are limited">Problem solving skills are limited</option>
                            <option value="Passive response, withdraws">Passive response, withdraws</option>
                            <option value="Hostile response, strikes out verbally and / or physically">Hostile response, strikes out verbally and / or physically</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>  
        <div>
            <Link to="FormSeven">
                <button id="continueSix" type="button" className="continue-button-fixed shadow bg5ec7cb tc475868  form-control px-2 py-2 h5">Continue</button>
            </Link>
        </div>
    </div>
</form>
)

export default FormSix