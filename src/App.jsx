import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const [todo, setTodo] = useState('');

  const [todos, setTodos] = useState([
    {item: 'I want to eat', id: crypto.randomUUID()},
])


const addTodo = (e)=>{
  e.preventDefault()
  setTodos((prevTodo)=>
    [...prevTodo, {item: todo, id: crypto.randomUUID()}]
  )
}
  return (
    <div className="App">
      <Header headerTitle={ 'TODO APP' } />
      <main className=' p-[5rem]'>
      <Form todo={todo} setTodo={setTodo} onSubmitTodo={addTodo} />
      <Todos todos={todos}/>
      </main>
   
    </div>
  );
}

export default App;
