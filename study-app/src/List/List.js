import React from 'react';
import ListItem from '../ListItem/ListItem';
import YoutubeEmbed from '../Youtube/Youtube';

function List(props) {
  // const { item } = props;

  if (!props.content) {
    return null;
  }

  return (
    <div className = "List">
    <h2>{props.content[0].title} </h2>
    <YoutubeEmbed embedId={props.content && props.content[0].youtubeUrl} 
      id= "card4"
      
    />
    <ListItem 
      id= "card2"
      text = "Documentation"
      link = {props.content[0].docUrl}
    />
    <ListItem 
      id= "card3"
      text = "Quiz"
      link = {props.content[0].quizUrl}
    />
      <ListItem 
      id= "card1"
      cardTitle = "Test Title"
      text = {null}
      dangerouslySetInnerHTML = {{ __html: props.content[0].textContent }}
      link = {null}
    />
    </div>
  );
}

export default List;
