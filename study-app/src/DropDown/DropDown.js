import React from 'react';

export default function DropDown(props) {
  const { topics, selectedTopic, handleClick } = props;

  return (
    <div className="btn-group">
      <button type="button" className="btn btn-dark dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
        {selectedTopic || 'Choose a study topic'}
      </button>
      <ul className="dropdown-menu">
        {topics.map((topic, index) => (
          <li key={index} onClick={handleClick}>
            <a className="dropdown-item" href="#">
              {topic}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

}
