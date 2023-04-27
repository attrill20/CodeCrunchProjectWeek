import React, { useState } from 'react';
import './App.css';
import List from '../List/List';
import DropDown from '../DropDown/DropDown';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ProgressPage from '../ProgressPage/ProgressPage';



const dummyData = {
  React: [
    { title: "Master React", youtubeUrl: "link", docUrl: "....", quizUrl: "", text: ""}
  ], 
  Components: [
    { 
      title: "React Component Guide", 
      youtubeUrl: "9vS86xgG3ak", 
      docUrl:`click <a href="https://stackabuse.com/guide-to-react-component/">here</a> for the docs`, 
      quizUrl:`click <a href="https://quizgecko.com/quiz/test-your-react-component-knowledge">here</a> for the quiz`,
      textContent: `<p>React Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
      <p>Introduction</p>
      <p>A component is the probably most important concept to understand in React. It is one of the core building blocks of React that allows us to split a UI into independent, reusable pieces, making the task of building UIs much easier. All of these independent components are then combined into a parent component, which will serve as our final user interface.</p>
      <p>In this guide, we will take a look at components and how they work in React, we will also see how to pass data from one component to another using props.</p> 
      <p>What Is a Component?</p>
      <p>A component is a self-contained, reusable code block that divides the user interface into smaller pieces rather than building the entire UI in a single file. Buttons, forms, dialog, and so on can all be expressed as components. React components accept arbitrary inputs ("props") and return React elements or JSX code that tells what should be rendered on the screen.</p>
      <p>To demonstrate how components work, we have broken down the UI of an example Todo Application into individual components:
      </p>`
    }
  ], 
  Props: [
    { 
      title: "Props", 
      youtubeUrl: "PHaECbrKgs0", 
      docUrl: `click <a href="https://www.freecodecamp.org/news/how-to-use-props-in-react/">here</a> for the docs`, 
      quizUrl: `click <a href="https://quizgecko.com/create?quiz_id=40441">here</a> for the quiz` ,
      textContent: `<p>React Components Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
      <p>Introduction</p>
      <p>A component is the probably most important concept to understand in React. It is one of the core building blocks of React that allows us to split a UI into independent, reusable pieces, making the task of building UIs much easier. All of these independent components are then combined into a parent component, which will serve as our final user interface.</p>
      <p>In this guide, we will take a look at components and how they work in React, we will also see how to pass data from one component to another using props.</p> 
      <p>What Is a Component?</p>
      <p>A component is a self-contained, reusable code block that divides the user interface into smaller pieces rather than building the entire UI in a single file. Buttons, forms, dialog, and so on can all be expressed as components. React components accept arbitrary inputs ("props") and return React elements or JSX code that tells what should be rendered on the screen.</p>
      <p>To demonstrate how components work, we have broken down the UI of an example Todo Application into individual components:
      </p>`
    }
  ],
  Hooks: [
    { 
      title: "Hooks", 
      youtubeUrl:"K0q-8ytGlVA",
      docUrl: `click <a href="https://www.codecademy.com/learn/react-101/modules/react-hooks-u/cheatsheet">here</a> for the docs`,
      quizUrl: `click <a href="https://quizgecko.com/quiz/master-react-hooks">here</a> for the quiz` ,
      textContent: `<p>React Components Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
      <p>Introduction</p>
      <p>A component is the probably most important concept to understand in React. It is one of the core building blocks of React that allows us to split a UI into independent, reusable pieces, making the task of building UIs much easier. All of these independent components are then combined into a parent component, which will serve as our final user interface.</p>
      <p>In this guide, we will take a look at components and how they work in React, we will also see how to pass data from one component to another using props.</p> 
      <p>What Is a Component?</p>
      <p>A component is a self-contained, reusable code block that divides the user interface into smaller pieces rather than building the entire UI in a single file. Buttons, forms, dialog, and so on can all be expressed as components. React components accept arbitrary inputs ("props") and return React elements or JSX code that tells what should be rendered on the screen.</p>
      <p>To demonstrate how components work, we have broken down the UI of an example Todo Application into individual components:
      </p>`
    }
  ]
};

const topics = ['React', 'Components', 'Props', 'Hooks'];


function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [content, setContent] = useState(dummyData);

  
  function handleClick(event) {
    setSelectedTopic(event.target.innerText)
    console.log(selectedTopic)
    console.log(content[selectedTopic])
  }

return (
  <div>
    <Header />
    <h4 style={{color:"#3D5051"}}></h4>
    
      <DropDown topics={topics} selectedTopic={selectedTopic} handleClick={handleClick} />
      <div className="image"
          style={{ display: "flex", justifyContent: "center", padding: "2%" }}
        >
          <img
            src={require("./Images/image2.jpg")}
            alt="study"
            style={{
              height: "50%",
              width: "50%",
            }} />
            </div>
      <HashRouter>
        <Routes>
        <Route path="/" element={<List content={content[selectedTopic]} />} /> 
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/:topic" element={<List content={content[selectedTopic]} />} />
      </Routes>
    </HashRouter>
    <Footer />
  </div>
);
}

export default App;