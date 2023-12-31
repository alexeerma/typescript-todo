import { useState } from 'react'
import './App.css'
import Inputfield from './components/Inputfield'
import { Todo } from './components/model'
import TodoList from './components/TodoList'

const App: React.FC = () =>  {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
     e.preventDefault();

     if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false}])
      setTodo("");
     }
  }
   
 
  return (
    <>
      <div className='App'>
          <span className='heading'>Taskify</span>
          <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList />
      </div>
     
    </>
  )
}

export default App
