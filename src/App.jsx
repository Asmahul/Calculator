import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Container from "./components/Container";
import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {

  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like this video",
  //     dueDate: "4/10/2023",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);
  
  const handleNewItem = (itemName, itemDueDate) => {
    if(itemName && itemDueDate) {
      const newTodoItems = [...todoItems,{
        name: itemName, 
        dueDate: itemDueDate
      },
      ];
      setTodoItems(newTodoItems);
    }
    else {
      alert("No added todo or date");
      return;
    }
    
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  }

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <Container>
          <AddTodo handleNewItem={handleNewItem}></AddTodo>
          {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
          <TodoItem todoItems={todoItems} onDeleteClick={handleDeleteItem} ></TodoItem>    
        </Container>    
      </center>
    </>
  );
}

export default App;
