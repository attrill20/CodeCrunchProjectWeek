import TimeButton from "../TimeButton/TimeButton.js";

function ListItem(props) {
  return (
    <li id={props.id} className="card"> 
    <h4> {props.text} </h4>
      {props.dangerouslySetInnerHTML && (
        <p dangerouslySetInnerHTML={{ __html: props.dangerouslySetInnerHTML.__html }} />
      )}
      <TimeButton 
        // props = {props}
      />
    </li>  
  );
}
export default ListItem;
