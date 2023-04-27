import React from "react";
//import PropTypes from "prop-types"; This was a suggestion from the template
import "./Styles.css";
// import List from '../List/List';
import Timebutton from "../TimeButton/TimeButton";

const YoutubeEmbed = (props) => {
console.log("Youtube embed", props)
return (
  <div className="video-responsive card" id = "card4">

    <p>YouTube Video</p>
  
  <iframe
    width="853"
    height="480"
    src={`https://www.youtube.com/embed/${props.embedId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  />

  <Timebutton />
</div>
);
}

export default YoutubeEmbed;