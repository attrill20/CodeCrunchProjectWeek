import React from 'react'

export default function DropDown() {
  return (
<div class="btn-group">
  <button type="button" class="btn btn-dark dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
    Choose a study topic
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">React</a></li>
    <li><a class="dropdown-item" href="#">JS</a></li>
    <li><a class="dropdown-item" href="#">HTML</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">CSS</a></li>
  </ul>
</div>
  )
}
