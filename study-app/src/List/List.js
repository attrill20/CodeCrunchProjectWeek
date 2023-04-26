import React, {useState} from 'react';

function List(props) {
  console.log(props)
  return (
    <div className="List">

      <p> {props.content && props.content[0].title} </p>
      <p> {props.content && props.content[0].docUrl} </p>
      <p> {props.content && props.content[0].youtubeUrl} </p>
      <p> {props.content && props.content[0].quizUrl} </p>

       
    </div>
  );
}

export default List;