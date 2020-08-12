import React from 'react'

const SyncDataPage = () => (
    <div id="dataPage" className="container-fluid d-none">
    <div className="d-column justify-content-center align-items-center inner-container col-10 animated fadeIn">
        <div className="d-column justify-content-center">
            <div className="card data-container shadow text-center">
                <div className="card-header bg475868 text-center text-light">
                    <h1>Sync</h1>
                </div>
                <div id="dataPageContainer" className="card-body bg-light">
                </div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center">
        <button id="dashboard" type="button" className="back-button-fixed shadow bg5ec7cb tc475868 form-control mx-2 px-2 py-2 h5">Dashboard</button>
        <button id="api" type="button" className="back-button-fixed shadow bg5ec7cb tc475868 form-control mx-2 px-2 py-2 h5">Sync Data</button>
    </div>
    <div id="syncSuccessful" className="d-none alert alert-success text-center mx-auto col-3">Your sync was successful. Please reload the application.</div>
  
    <div id="apiModalContainer" className="d-none">    
        <div id="apiModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <form className="modal-content shadow">
                <div className="modal-header bg475868 text-light">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Generate Key</h5>
                </div>
                <div className="modal-body text-center">
                    <a id="keyURL" target="_blank" className="d-block"></a>
                    <label for="apiKeyInput">After clicking the link above, input the <i>Key</i> from the site below.</label>
                    <input id="apiKeyInput" type="text" className="form-control" name="Api Key" placeholder="Input Key Here..."/>
                </div>
                <div className="modal-footer justify-content-center">
                  <button id="submitKey" type="button" className="btn btn-primary">Submit Key</button>
                </div>
              </form>
            </div>
        </div>
    </div>
</div>
)

export default SyncDataPage