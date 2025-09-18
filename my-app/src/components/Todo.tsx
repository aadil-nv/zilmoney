import React, { useState } from 'react'
interface Todo {
  task: string;
  completed: boolean;
}
function Todo() {

    const  [todos,setTodos] = useState<Todo[]>([]);
    const  [ values,setValues] = useState("")
    const [editIndex,setEditIndex] = useState()

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

    const handleEdit =(index:number,newValue:string)=>{
        setTodos(todos.filter((val,i)=>{
            if(i ===index){
                val = newValue
            }
        }))
    }
    const handleChangeMark =(index:number)=>{
        const updatedTodos = [...todos]
        updatedTodos[index].completed = !updatedTodos[index].completed;
         setTodos(updatedTodos);
    }

  return (
    <div>
        
        <h1>Todo List</h1>
        <input type="text" value={values} onChange={(e)=>setValues(e.target.value)} />
        <button onClick={handleAdd}>add</button>

        <ul>
            {todos.map((todo,index)=>(
                
                <li key={index}>{todo.task} 
                <input type="checkbox" checked={todo.task} onChange={()=>handleChangeMark(index)}/>
                <button onClick={()=>handleEdit(index ,todo.task)}>Edit</button>
                <button onClick={()=>handleDelete(index)}>delete</button>
                
                </li>
                ))}
        </ul>

      
    </div>
  )
}

export default Todo
