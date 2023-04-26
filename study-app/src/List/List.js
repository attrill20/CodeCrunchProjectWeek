import React from 'react';

function ListItem(props) {
  const { item } = props;

  if (!item) {
    return null;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <p>YouTube URL: {item.youtubeUrl}</p>
      <p>Documentation URL: {item.docUrl}</p>
      <p>Quiz URL: {item.quizUrl}</p>
    </div>
  );
}

export default ListItem;
