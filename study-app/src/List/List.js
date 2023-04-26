import React from 'react';
import ListItem from '../ListItem/ListItem';
import YoutubeEmbed from '../Youtube/Youtube';

function List(props) {
  // const { item } = props;

  if (!props.content) {
    return null;
  }
/* import React, {useState} from 'react';
import YoutubeEmbed from '../YouTube/youtube';
function List(props) {
  console.log(props)
  return (
    <div className="List">
      <p> {props.content && props.content[0].title} </p>
      <p> {props.content && props.content[0].docUrl} </p>
      <p> {props.content && props.content[0].youtubeUrl} </p>
      <h2>2 Youtube Embed Test</h2>
      <YoutubeEmbed embedId={props.content && props.content[0].youtubeUrl} /> 
      <h1>3 Youtube Embed Test</h1>
      <YoutubeEmbed embedId={props.content && props.content[0].youtubeUrl} />
      
      <p> {props.content && props.content[0].quizUrl} </p>
       
    </div>
  );
  }
export default List;
*/
  return (
    <div className = "List">
    <h2>{props.content[0].title} </h2>
    <YoutubeEmbed embedId={props.content && props.content[0].youtubeUrl} 
      id= "card1"
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
      text = "How to use props without destructuring: To use props, you have to pass in props as an argument in your function. This is similar to passing arguments into your regular JavaScript functions. Here's an example:"
      link = {null}
    />
    </div>
  );
}

export default List;