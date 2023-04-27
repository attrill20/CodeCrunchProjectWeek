import React from 'react';

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="d-flex align-items-center ">
              <div className="navbar-brand">
              <img src={require("./file.png")} alt="logo" style ={{"margin-right": "2%", "height": "10%", "width":"10%"}}/>
                <h1 className= "title">CODE CRUNCH</h1>
              </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#/progress">My Progress</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Course Overview</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;