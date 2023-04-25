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


const dummyArray = ['React', 'JS', 'HTML', 'CSS']


function App() {
// const [options, setOptions] = useState['React', 'JS', 'HTML', 'CSS']
// const [selectedOption, setSelectedOption] = useState[null];
const [content, setContent] = useState([]) // should this be a string?
  
function handleClick(event) {
  console.log('is this working?');
  setContent(event.target.value);
  console.log(event.target.value);
}


  return (
    <div>
      <h1>Test</h1>
      {/* we need to pass a function into this button:  */}
      <DropDown 
        // setSelectedOption = {setSelectedOption}
        handleClick = {handleClick}
        setContent = {setContent}
      />
      {/* We need to set our 'list' state to our dummyArray
      then we need to pass this state into a <ul> on our list */}
      <List 
      content = {content}
      />
      <ListItem />
    </div>

  );
}

export default App;
