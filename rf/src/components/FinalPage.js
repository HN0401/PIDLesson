import React from 'react'
import { Link } from 'react-router-dom'

const FinalPage = () => (
    <div>
<div id="finalPage" className="container-fluid">
    <div className="d-column justify-content-center align-items-centercol-10 animated fadeIn">   
        <div className="d-column justify-content-center">
            <div className="card inner-container-scroll shadow text-center">
                <div className="card-header text-light bg475868">
                    <h3>Please review the information below.</h3>
                </div>
                <div className="card-body bg-light container-fluid">
                    <div id="finalPageContainer" className="d-column align-items-center justify-content-center">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center">
        <Link to="FormSeven">
            <button id="backEight" type="button" className="back-button-fixed shadow bg-dark text-light form-control ml-1 px-2 py-2 h5">Back</button>
        </Link>
        <div id="verifyDiv" className="d-column text-center col-3" >
            <h6 id="sigText">Applicant Signature</h6>
            <input id="signature" type="text" className="form-control" placeholder="First Initial, Last Name and Identification Number"/>
            <input id="TEO" type="text" className="form-control" placeholder="First and Last Name"/>
        </div>
        <button id="verify" type="button" className="back-button-fixed shadow bg-dark text-light form-control ml-1 px-2 py-2 h5">Verify</button> 
        <button id="verifyTwo" type="button" className="back-button-fixed shadow bg-dark text-light form-control ml-1 px-2 py-2 h5">Verify</button>
        <button id="print-pdf" type="button" disabled className="disabled btn btn-success rounded shadow text-light form-control px-2 py-2 h5 mx-5">Save as PDF</button>
        <button id="final" type="button" disabled className="disabled  continue-button-fixed shadow bg-dark text-light form-control px-2 py-2 h5 mr-1">Finalize</button>
    </div>
    <div className="d-flex justify-content-center w-50 mx-auto" id="pdf-msg"></div>
    <div className="d-flex justify-content-center w-50 mx-auto" id="final-msg"></div>
    <div className="spinner-border text-primary m-auto row" role="status" id="spinner">
        <span className="sr-only">Loading...</span>
    </div>
</div>


{/* <div id="createLoginModalContainer" className="">    
    <div id="createLoginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <form className="modal-content shadow">
            <div className="modal-header bg475868 text-light">
              <h5 className="modal-title" id="exampleModalCenterTitle">Register Application</h5>
            </div>
            <div className="modal-body">
                <p>Input your full name below to register your account.</p>
                <label htmlFor="tESName">TES Name</label>
                <input id="tESName" type="text" className="form-control" name="TES Name" placeholder="Input Name Here..."/>
            </div>
            <div className="modal-footer justify-content-center">
              <button id="createUser" type="button" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
    </div>
    </div> */}
</div>
)

export default FinalPage