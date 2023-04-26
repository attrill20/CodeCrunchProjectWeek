import React, {useState} from 'react';
import App from '../App/App';

export default function DropDown(props) {
  return (
<div className="btn-group">
  <button type="button" className="btn btn-dark dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
    Choose a study topic
  </button> 
  <ul className="dropdown-menu">
    <li onClick={props.handleClick}><a className="dropdown-item" href="#"> React </a></li>
    <li onClick={props.handleClick}><a className="dropdown-item" href="#">Props</a></li>
    <li onClick={props.handleClick}><a className="dropdown-item" href="#">Hooks</a></li>
    <li onClick={props.handleClick}><a className="dropdown-item" href="#">Components</a></li>
  </ul>
</div>
  )
}
