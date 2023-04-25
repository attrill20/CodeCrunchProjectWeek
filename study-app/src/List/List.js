import React, {useState} from 'react';

function List(props) {
  console.log(props)
  return (
    <div className="List">

      <p> {props.content && props.content[0].title} </p>
       
    </div>
  );
}

export default List;