import { useState } from "react"


export default function AddTodo({handleNewItem}) {

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    handleNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="row">
          <div className="col-6">
            <input type="text" className="del" placeholder="Enter Todo Here" 
            onChange={handleNameChange} value={todoName} />
          </div>
          <div className="col-4">
            <input type="date" className="del" onChange={handleDateChange} value={dueDate} />
          </div>
          <div className="col-2">
            <button type="button" className="del btn btn-success" onClick={handleAddButtonClicked} >Add</button>
          </div>
      </div>
  )
}
