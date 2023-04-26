import React, {useState} from 'react';

function List(props) {
  console.log(props)
  return (
    <div className="List">
    <h2 id="topic-title"> Topic Title </h2>
      <p className="card" id="card1"> {props.content && props.content[0].title} </p>
      <p className="card" id="card2"> {props.content && props.content[0].docUrl} </p>
      <p className="card" id="card3"> {props.content && props.content[0].youtubeUrl} </p>
      <p className="card" id="card4"> {props.content && props.content[0].quizUrl} </p>

    </div>
  );
}

export default List;