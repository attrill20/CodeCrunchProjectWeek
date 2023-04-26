function ListItem(props) {
  const { title = '', youtubeUrl, docUrl, quizUrl } = props.item;

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>
          <a href={youtubeUrl}>Watch on YouTube</a>
        </li>
        <li>
          <a href={docUrl}>Read the documentation</a>
        </li>
        <li>
          <a href={quizUrl}>Take the quiz</a>
        </li>
      </ul>
    </div>
  );
}
export default ListItem;
