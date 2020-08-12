import React from 'react'
import { Link } from "react-router-dom";

const FormThree = () => (
    <form id="formThree" className="container-fluid" action="#">
        <div className="d-flex justify-content-around align-items-center">
            <div>
                <Link to="/FormTwo">
                    <button id="backThree" type="button" className="back-button-fixed shadow bg5ec7cb tc475868 form-control ml-1 px-2 py-2 h5">Back</button>
                </Link>
            </div>
            <div className="row justify-content-center col-9 animated fadeIn">
                <div className="card inner-container-scroll shadow text-center">
                    <div className="card-header text-light bg475868">
                        <h3>Education History</h3>
                    </div>
                    <div className="card-body bg-light">
                        <div className="d-column mb-3">
                            <h3 className="text-light bg475868 rounded p-1">High School</h3>
                            <table className="table table-striped table-light">
                                <thead>
                                    <tr>
                                        <th scope="col">School Name</th>
                                        <th scope="col">Location(City & State)</th>
                                        <th scope="col">Graduated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="school1">
                                        <td><input id="schoolNameOne" name="School Name" type="text" className="form-control"/></td>
                                        <td><input id="LocationOne" name="Location" type="text" className="form-control"/></td>
                                        <td>
                                            <select id="graduatedOne" name="Graduation Status" className="form-control">
                                                <option>Select...</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                        <div className="d-column mb-3">
                            <h3 className="text-light bg475868 rounded p-1">College or Technical Trade</h3>
                            <table className="table table-striped table-light">
                                <thead>
                                    <tr>
                                        <th scope="col">School Name</th>
                                        <th scope="col">Location(City & State)</th>
                                        <th scope="col">Major, course or subject</th>
                                        <th scope="col">Graduated</th>
                                        <th scope="col">Degree</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="school2">
                                        <td><input id="schoolNameTwo" name="School Name" type="text" className="form-control"/></td>
                                        <td><input id="LocationTwo" name="Location" type="text" className="form-control"/></td>
                                        <td><input id="majorCourseSubjectTwo" name="Major, Course or Subject" type="text" className="form-control"/></td>
                                        <td>
                                            <select id="graduatedTwo" name="Graduation Status" className="form-control">
                                                <option>Select...</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </td>
                                        <td><input id="degreeTwo" name="Degree" type="text" className="form-control"/></td>
                                    </tr>
                                    <tr id="school3">
                                        <td><input id="schoolNameThree" name="School Name" type="text" className="form-control"/></td>
                                        <td><input id="LocationThree" name="Location" type="text" className="form-control"/></td>
                                        <td><input id="majorCourseSubjectThree" name="Major, Course or Subject" type="text" className="form-control"/></td>
                                        <td>
                                            <select id="graduatedThree" name="Graduation Status" className="form-control">
                                                <option>Select...</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </td>
                                        <td><input id="degreeThree" name="Degree" type="text" className="form-control"/></td>
                                    </tr>
                                    <tr id="school4">
                                        <td><input id="schoolNameFour" name="School Name" type="text" className="form-control"/></td>
                                        <td><input id="LocationFour" name="Location" type="text" className="form-control"/></td>
                                        <td><input id="majorCourseSubjectFour" name="Major, Course or Subject" type="text" className="form-control"/></td>
                                        <td>
                                            <select id="graduatedFour" name="Graduation Status" className="form-control">
                                                <option>Select...</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </td>
                                        <td><input id="degreeFour" name="Degree" type="text" className="form-control"/></td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                        <div className="d-column mb-3">
                            <h3 className="text-light bg475868 rounded p-1">Other Education/Training</h3>
                            <table className="table table-striped table-light">
                                <thead>
                                    <tr>
                                        <th scope="col">School Name</th>
                                        <th scope="col">Location(City & State)</th>
                                        <th scope="col">Major, course or subject</th>
                                        <th scope="col">Graduated</th>
                                        <th scope="col">Degree</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="school5">
                                        <td><input id="schoolNameFive" name="School Name" type="text" className="form-control"/></td>
                                        <td><input id="LocationFive" name="Location" type="text" className="form-control"/></td>
                                        <td><input id="majorCourseSubjectFive" name="Major, Course or Subject" type="text" className="form-control"/></td>
                                        <td>
                                            <select id="graduatedFive" name="Graduation Status" className="form-control">
                                                <option>Select...</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </td>
                                        <td><input id="degreeFive" name="Degree" type="text" className="form-control"/></td>
                                    </tr>
                                    <tr id="school6">
                                        <td><input id="schoolNameSix" name="School Name" type="text" className="form-control"/></td>
                                        <td><input id="LocationSix" name="Location" type="text" className="form-control"/></td>
                                        <td><input id="majorCourseSubjectSix" name="Major, Course or Subject" type="text" className="form-control"/></td>
                                        <td>
                                            <select id="graduatedSix" name="Graduation Status" className="form-control">
                                                <option>Select...</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </td>
                                        <td><input id="degreeSix" name="Degree" type="text" className="form-control"/></td>
                                    </tr>
                                    <tr id="school7">
                                        <td><input id="schoolNameSeven" name="School Name" type="text" className="form-control"/></td>
                                        <td><input id="LocationSeven" name="Location" type="text" className="form-control"/></td>
                                        <td><input id="majorCourseSubjectSeven" name="Major, Course or Subject" type="text" className="form-control"/></td>
                                        <td>
                                            <select id="graduatedSeven" name="Graduation Status" className="form-control">
                                                <option>Select...</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </td>
                                        <td><input id="degreeSeven" name="Degree" type="text" className="form-control"/></td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-column">
                <Link to="/FormFour">
                    <button id="continueThree" type="button" className="continue-button-fixed shadow bg5ec7cb tc475868 form-control px-2 py-2 h5">Continue</button>
                </Link>
            </div>
        </div>
    </form>
)

export default FormThree