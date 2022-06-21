export function NamedFunction(props) {
  return (<div>This is named function and we use "{}" to import
    <p>{props.name}</p>
  </div>);
}

function CreateBook({title}) {
  return (
    <div>
      {title}
      <p>we will add form here </p>
    </div>
  );
}
export default CreateBook;
