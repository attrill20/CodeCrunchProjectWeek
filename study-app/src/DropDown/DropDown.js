import React from 'react';

export default function DropDown(props) {
  const { topics, selectedTopic, handleClick } = props;

  return (
    <div style = {{marginLeft: "5%", marginRight: "5%"}} className="btn-group">
      <button style = {{backgroundColor:"#9BBEC0", fontSize: "1.15em", color: "#3D5051", textAlign: "left"}} type="button" className="btn btn-dark dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
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
