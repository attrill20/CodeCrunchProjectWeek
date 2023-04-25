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


const dummyArray = {React: [{id: 1, title: "Master React", url: "link", description: "...."}], HTML: [{id:1, title: "using html"}]};


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
      <h1>Test</h1>
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
      <ListItem />
    </div>

  );
}

export default App;
