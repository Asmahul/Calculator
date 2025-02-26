import Item from "./Item";


export default function TodoItem({todoItems, onDeleteClick}) {
 
  
  return (
    <>
    {todoItems.map((item,index) => <Item key={index} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} ></Item> )}
   </>
  )
}
