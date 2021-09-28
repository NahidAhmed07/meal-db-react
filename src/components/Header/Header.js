import React from 'react';

const Header = (props) => {
  const { searchHandelar , searchFieldHandaler } = props;
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="h">Programmer </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="d">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#d">Meals</a>
        </li>
        
              
      </ul>
      <div className="d-flex">
        <input onKeyPress={(event)=> searchFieldHandaler(event)} id='input-field' className="form-control me-2" type="search" placeholder="Search" aria-label="Search Food"/>
        <button onClick={()=> searchHandelar()}  className="btn btn-outline-success" type="submit">Search</button>
      </div>
    </div>
  </div>
</nav>
      
    </header>
  );
};

export default Header;