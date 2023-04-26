import React from 'react';
import ListItem from '../ListItem/ListItem';

function List(props) {
  // const { item } = props;

  if (!props.content) {
    return null;
  }

  return (
    <>
    <ListItem 
      text = "Watch on youtube"
      link = {props.content.youtubeUrl}
    />
      <ListItem 
      text = "Documentation"
      link = {props.content.docUrl}
    />
      <ListItem 
      text = "quiz here"
      link = {props.content.quizUrl}
    />
      <ListItem 
      text = "other"
      link = {""}
    />

    {/* <div>
      <h2>{props.content.title}</h2>
      <p>YouTube URL: {props.content.youtubeUrl}</p>
      <p>Documentation URL: {props.content.docUrl}</p>
      <p>Quiz URL: {props.content.quizUrl}</p>
    </div> */}
    </>
  );
}

export default List;
