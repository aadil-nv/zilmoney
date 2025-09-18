import React, { useState } from 'react'
interface Todo {
  task: string;
  completed: boolean;
}
function Todo() {

    const  [todos,setTodos] = useState<Todo[]>([]);
    const  [ values,setValues] = useState("")
    const [editIndex,setEditIndex] = useState<number | null>(null);

    const handleAdd = ()=>{
        if(!values) return 
        if (editIndex !== null) {
    const updatedTodos = [...todos];
    updatedTodos[editIndex].task = values;
    setTodos(updatedTodos);
    setEditIndex(null);
  } else {
    setTodos([...todos, { task: values, completed: false }]);
  }
    }
    const handleDelete =(index:number)=>{
        setTodos(todos.filter((_,i)=>i!==index))
    }

    const handleEdit = (index: number) => {
    setValues(todos[index].task); 
    setEditIndex(index);         
  };

    const handleChangeMark = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
        
        <h1>Todo List</h1>
        <input type="text" value={values} onChange={(e)=>setValues(e.target.value)} />
        <button onClick={handleAdd}>add</button>

        <ul>
            {todos.map((todo,index)=>(
                
                <li key={index}>{todo.task} 
                <input type="checkbox" checked={todo.completed} onChange={()=>handleChangeMark(index)}/>
                <button onClick={handleAdd}>{editIndex !== null ? "Update" : "Add"}</button>
                <button onClick={()=>handleEdit(index)}>Edit</button>
                <button onClick={()=>handleDelete(index)}>delete</button>
                
                </li>
                ))}
        </ul>

      
    </div>
  )
}

export default Todo
