import React, { useState, useEffect } from 'react';
import './App.css';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import DropDown from '../DropDown/DropDown';
import Header from '../Header/Header';


const dummyData = {
  React: [
    { title: "Master React", youtubeUrl: "link", docUrl: "....", quizUrl: "" }
  ], 
  Components: [
    { 
      title: "React Component Guide", 
      youtubeUrl: "9vS86xgG3ak", 
      docUrl:"https://stackabuse.com/guide-to-react-component/", 
      quizUrl:"https://quizgecko.com/quiz/test-your-react-component-knowledge"
    }
  ], 
  Props: [
    { 
      title: "Props", 
      youtubeUrl: "PHaECbrKgs0", 
      docUrl: "https://www.freecodecamp.org/news/how-to-use-props-in-react/", 
      quizUrl: "https://quizgecko.com/create?quiz_id=40441"
    }
  ],
  Hooks: [
    { 
      title: "Hooks", 
      youtubeUrl:"K0q-8ytGlVA",
      docUrl: "https://www.codecademy.com/learn/react-101/modules/react-hooks-u/cheatsheet",
      quizUrl: "https://quizgecko.com/quiz/master-react-hooks"
    }
  ]
};
const topics = ['React', 'Components', 'Props', 'Hooks'];


function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [content, setContent] = useState(dummyData);

  
  function handleClick(event) {
    setSelectedTopic(event.target.innerText)
    console.log(selectedTopic)
    console.log(content[selectedTopic])
  }

//   useEffect(() => {
//     setContent(dummyData[selectedTopic]);
//  console.log(content)}, [selectedTopic]);

  return (
    <div>
      <Header  />
      <h4 style={{color:"#3D5051"}}>Revise your code and byte back with confidence!</h4>
      <DropDown topics={topics} selectedTopic={selectedTopic} handleClick={handleClick} />
      <List content={content && content[selectedTopic]} />
    </div>
  );
}

export default App;

