import React, { useState } from "react";
import "./App.css";
import List from "../List/List";
import DropDown from "../DropDown/DropDown";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProgressPage from "../ProgressPage/ProgressPage";

const dummyData = {
  React: [
    {
      title: "Master React",
      youtubeUrl: "link",
      docUrl: "....",
      quizUrl: "",
      text: "",
    },
  ],
  Components: [
    {
      title: "React Component Guide",
      youtubeUrl: "9vS86xgG3ak",
      docUrl: `<p>One of the best ways to fully understand the specifics of components is to read the official Documentation from React.</p>
      <p>Click <a href="https://react.dev/learn/your-first-component" target="_blank">here</a> for the Docs!</p>
      <p>Make sure to try out the Challenges at the bottom of the page too and put your newly found skills into practice.</p>`,
      quizUrl: `<p>Once you have reviewed this section, test your knowledge with a quiz.</p>
      <p>Click <a href="https://quizgecko.com/quiz/test-your-react-component-knowledge" target="_blank">here</a> for the quiz!</p>
      <p>These results will be tracked on your My Progress page - best of luck!</p>`,
      textContent: `<p>React Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
      <p><strong>Introduction</strong></p>
      <p>A component is the probably most important concept to understand in React. It is one of the core building blocks of React that allows us to split a UI into independent, reusable pieces, making the task of building UIs much easier. All of these independent components are then combined into a parent component, which will serve as our final user interface.</p>
      <p>In this guide, we will take a look at components and how they work in React, we will also see how to pass data from one component to another using props.</p> 
      <p><strong>What Is a Component?</strong></p>
      <p>A component is a self-contained, reusable code block that divides the user interface into smaller pieces rather than building the entire UI in a single file. Buttons, forms, dialog, and so on can all be expressed as components. React components accept arbitrary inputs ("props") and return React elements or JSX code that tells what should be rendered on the screen.</p>
      <p>To learn more about components, click <a href="https://www.w3schools.com/react/react_components.asp" target="_blank">here</a>.
      </p>`,
    },
  ],
  Props: [
    {
      title: "Props",
      youtubeUrl: "PHaECbrKgs0",
      docUrl: `<p>One of the best ways to understand the specifics of components is to read the official Documentation from React.</p>
      <p>Click <a href="https://react.dev/learn/passing-props-to-a-component" target="_blank">here</a> for the Docs!</p>
      <p>Make sure to try out the Challenges at the bottom of the page too and put your newly found skills into practice.</p>`,
      quizUrl: `<p>Once you have reviewed this section, test your knowledge with a quiz.</p>
      <p>Click <a href="https://quizgecko.com/create?quiz_id=40441" target="_blank">here</a> for the quiz!</p>
      <p>These results will be tracked on your My Progress page - best of luck!</p>`,
      textContent: `<p>Props are used to store data that can be accessed by the children of a React component. They are part of the concept of reusability. Props take the place of class attributes and allow you to create consistent interfaces across the component hierarchy.</p>
      <p><strong>What Are Props in React?</strong></p>
      <p>Props simply stands for properties. They are what make components reusable. Because they perform an essential function - they pass data from one component to another.</p> 
      <p>Props act as a channel for component communication. Props are passed from parent to child and help your child access properties that made it into the parent's tree.</p>
      <p><strong>Things worth noting:</strong></p>
      <ul>We use props in both functional and class-based components.</ul>
      <ul>We pass props from the top to bottom. We can also refer to it as ancestor to descendant, or parent to child.</ul>
      <ul>Props are read-only. This means that once a component receives a bunch of props, we cannot change it, but we can only use and consume it and cannot modify the properties passed down to the component. If we want to modify that, we'll have to introduce what we call state in React.</ul>
      <p>To learn more about components, click <a href="https://www.w3schools.com/react/react_props.asp" target="_blank">here</a>.
      </p>`,
    },
  ],
  Hooks: [
    {
      title: "Hooks",
      youtubeUrl: "K0q-8ytGlVA",
      docUrl: `<p>One of the best ways to understand Hooks is to read the official Documentation.</p> 
      <p>Click <a href="https://www.codecademy.com/learn/react-101/modules/react-hooks-u/cheatsheet">here</a> for the Docs!</p>
      <p>Make sure to try out the Challenges at the bottom of the page too and put your newly found skills into practice.</p>`,
      quizUrl: `<p>Once you have reviewed this section, put your skills to the test.</p>Test your hooks knowledge with this <a href="https://quizgecko.com/quiz/master-react-hooks">quiz</a>.
      <p>These results will be tracked on your My Progress page - best of luck!</p>`,
      textContent: `<p>React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.</p>
      <p> React provides a bunch of standard in-built hooks:</p>
      <ul>
      <li> useState: To manage states. Returns a stateful value and an updater function to update it.</li>
      <li> useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.</li>
      <li> useReducer: A useState alternative to help with complex state management.</li>
      </ul>
      `,
    },
  ],
};

const topics = ["React", "Components", "Props", "Hooks"];

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [content, setContent] = useState(dummyData);

  function handleClick(event) {
    setSelectedTopic(event.target.innerText);
    console.log(selectedTopic);
    console.log(content[selectedTopic]);
  }

  return (
    <div>
      <Header />
      <h4 style={{ color: "#3D5051" }}></h4>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <DropDown
                  topics={topics}
                  selectedTopic={selectedTopic}
                  handleClick={handleClick}
                />
                <List content={content[selectedTopic]} />
              </div>
            }
          />
          <Route path="/progress" element={<ProgressPage />} />
          <Route
            path="/:topic"
            element={<List content={content[selectedTopic]} />}
          />
        </Routes>
      </HashRouter>
      <div
        className="image"
        style={{ display: "flex", justifyContent: "center", padding: "2%" }}
      >
        <img
          src={require("./Images/image2.jpg")}
          alt="study"
          style={{
            height: "50%",
            width: "50%",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
export default App;
