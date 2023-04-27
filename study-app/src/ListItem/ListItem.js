function ListItem(props) {
  return (
    <li id={props.id} className="card"> 
    <h4> {props.text} </h4>
      {props.dangerouslySetInnerHTML && (
        <p dangerouslySetInnerHTML={{ __html: props.dangerouslySetInnerHTML.__html }} />
      )}
    </li>  
  );
}
export default ListItem;
