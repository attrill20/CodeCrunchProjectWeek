import React from 'react';
import ListItem from '../ListItem/ListItem';

function List(props) {
  // const { item } = props;

  if (!props.content) {
    return null;
  }

  return (
    <div className = "List">
    <h2>{props.content[0].title} </h2>
    <ListItem 
      id= "card1"
      text = "Watch on youtube"
      link = {props.content[0].youtubeUrl}
    />
    <ListItem 
      id= "card2"
      text = "Documentation"
      link = {props.content[0].docUrl}
    />
    <ListItem 
      id= "card3"
      text = "quiz here"
      link = {props.content[0].quizUrl}
    />
      <ListItem 
      id= "card4"
      text = "other"
      link = {""}
    />
    </div>
  );
}

export default List;
