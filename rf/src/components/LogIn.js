import React from 'react'

const LogIn = () => (
    <div id="createLoginModalContainer" className="">    
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
    </div>
)

export default LogIn