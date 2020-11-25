import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-secondary navbar-light">
            <a className="navbar-brand mb-3" href="#!">
              <img src="https://thongtinbaohiem.net/wp-content/uploads/2017/12/B%E1%BA%A3o-hi%E1%BB%83m-con-ng%C6%B0%E1%BB%9Di-AAA.jpg" height={50} alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1" aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="waves-effect" href="#!">Home</a></li>
              <li className="breadcrumb-item"><a className="waves-effect" href="#!">Templates</a></li>
              <li className="breadcrumb-item active"><a className="waves-effect" href="#!">E-commerce</a></li>
            </ol>
            <div className="collapse navbar-collapse" id="basicExampleNav1">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#!" className="nav-link navbar-link-2 waves-effect">
                    <span className="badge badge-pill red">1</span>
                    <i className="fas fa-shopping-cart pl-0" />
                  </a>
                </li>
                
                <li className="nav-item">
                  <a href="google.com" className="nav-link waves-effect">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a href="google.com" className="nav-link waves-effect">
                    Contact
                  </a>
                </li>
                <li className="nav-item pl-2 mb-2 mb-md-0">
                  <a href="#!" type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Log out</a>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default Header;