function ListItem(props) {
  // const {youtubeUrl, docUrl, quizUrl } = props.item;

  return (
    <div>
    <li> 
      <a href={props.link}>{props.text}</a>
    </li>
       
    </div>
  );
}
export default ListItem;
