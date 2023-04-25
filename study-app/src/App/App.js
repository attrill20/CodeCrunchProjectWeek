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

const dummyArray = ['one', 'two']
// const dummyArray2 = ['three', 'four']


function App() {
const [list, setList] = useState([])
  
function functionName() {
  setList([...dummyArray]);
  console.log(list)
}
  return (
    <div>
      <h1>Test</h1>
      {/* we need to pass a function into this button:  */}
      <DropDown 
        functionName = {functionName}
        list = {list}
      />
      {/* We need to set our 'list' state to our dummyArray
      then we need to pass this state into a <ul>our list on  */}
      <List />
      <ListItem />
    </div>

  );
}





export default App;
