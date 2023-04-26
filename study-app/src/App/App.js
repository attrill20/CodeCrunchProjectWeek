import React, {useState} from 'react';
import './App.css';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import DropDown from '../DropDown/DropDown';


//PLAN

//DONE // create working dropdown menu component // test click-off functionality 
//DONE // write out options of dropdown menu and make sure they display/ are selectable 
// write dummy data to display to list
// make function to attach to dropdown so that when an option is selected it displays to list
// check that dropdown menu displays data to the list 
// chanage the type of data being displayed so it is similar to our actual data

// create a function that will take in the data from the dropdown menu and display it to the list


const dummyArray = {
React: [{title: "Master React", youtubeUrl: "link", docUrl: `//DONE // create working dropdown menu component // test click-off functionality 
//DONE // write out options of dropdown menu and make sure they display/ are selectable 
// write dummy data to display to list
// make function to attach to dropdown so that when an option is selected it displays to list
// check that dropdown menu displays data to the list 
// chanage the type of data being displayed so it is similar to our actual data
// create a function that will take in the data from the dropdown menu and display it to the list`
, quizUrl: ""}], 
Components: [{youtubeUrl: "https://www.youtube.com/watch?v=9vS86xgG3ak&t=12s", 
  docUrl:"https://stackabuse.com/guide-to-react-component/", 
  quizUrl:"https://quizgecko.com/quiz/test-your-react-component-knowledge",}], 

Props: [{title: "Props", youtubeUrl: "https://www.youtube.com/watch?v=PHaECbrKgs0", 
  docUrl: "https://www.freecodecamp.org/news/how-to-use-props-in-react/", 
  quizUrl: "https://quizgecko.com/create?quiz_id=40441"}],

Hooks: [{ title: "Hooks", youtubeUrl:"https://www.youtube.com/watch?v=K0q-8ytGlVA",
  docUrl: "https://www.codecademy.com/learn/react-101/modules/react-hooks-u/cheatsheet",
  quizUrl: "https://quizgecko.com/quiz/master-react-hooks" }]
}

function App() {
const [content, setContent] = useState(dummyArray);
const [search, setSearch] = useState('') // should this be a string?
  
function handleClick(event) {
  console.log('is this working?');
  setSearch(event.target.innerText)
  console.log(event.target.innerText);
}

  return (
    <div>
      <h1 style={{color:"#3D5051"}}>Page Title</h1>
      {/* we need to pass a function into this button:  */}
      <DropDown 
        // setSelectedOption = {setSelectedOption}
        handleClick = {handleClick}
        setSearch = {setSearch}
      />
      {/* We need to set our 'list' state to our dummyArray
      then we need to pass this state into a <ul> on our list */}
      <List 
      content = {content[search]}
      />
      {/* <ListItem /> */}
    </div>

  );
}

export default App;
