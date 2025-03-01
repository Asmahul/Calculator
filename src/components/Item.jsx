export default function Item({todoName, todoDate, onDeleteClick}) {
  
  
  return (
    <>
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="del btn btn-danger" onClick={() => onDeleteClick(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
