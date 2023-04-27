function ListItem(props) {
  return (
    <li id={props.id} className="card"> 
      <a href={props.link}>{props.text}</a>
      {props.dangerouslySetInnerHTML && (
        <p dangerouslySetInnerHTML={{ __html: props.dangerouslySetInnerHTML.__html }} />
      )}
    </li>  
  );
}
export default ListItem;
