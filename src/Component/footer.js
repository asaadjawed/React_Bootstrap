import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div className ="footer">
                
                 {/* Footer */}
      <footer className="page-footer font-small special-color-dark pt-4">
        {/* Footer Elements */}
        <div className="container">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-6 mb-4">
              {/* Form */}
              <form className="form-inline">
                <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                <i className="fas fa-search" aria-hidden="true" />
              </form>
              {/* Form */}
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-6 mb-4">
              <form className="input-group">
                <input type="text" className="form-control form-control-sm" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-sm btn-outline-white my-0" type="button">Sign up</button>
                </div>
              </form>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Footer Elements */}
        {/* Copyright */}
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://github.com/asaadjawed"> Developer Github Link</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
            </div>
        )
    }
}