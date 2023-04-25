import React, {useState} from 'react';
import App from '../App/App';

export default function DropDown(functionName) {
  return (
<div class="btn-group">
  <button type="button" class="btn btn-dark dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
    Choose a study topic
  </button>
  <ul class="dropdown-menu">
    <li onClick={(event) => functionName (event.target.value)}><a class="dropdown-item" href="#">React</a></li>
    <li><a class="dropdown-item" href="#">JS</a></li>
    <li><a class="dropdown-item" href="#">HTML</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">CSS</a></li>
  </ul>
</div>
  )
}
