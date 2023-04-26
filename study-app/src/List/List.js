import React from 'react';
import ListItem from '../ListItem/ListItem';

function List(props) {
  // const { item } = props;

  if (!props.content) {
    return null;
  }

  return (
    <>
    <h2>{props.content[0].title} </h2>
    <ListItem 
      text = "Watch on youtube"
      link = {props.content[0].youtubeUrl}
    />
      <ListItem 
      text = "Documentation"
      link = {props.content[0].docUrl}
    />
      <ListItem 
      text = "quiz here"
      link = {props.content[0].quizUrl}
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
