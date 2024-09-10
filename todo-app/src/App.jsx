
import { useState } from 'react';
import './App.css'
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'; 

function App() {
  const [todos, setTodos] = useState([
    //{id: 1, todo: 'Learn React'}
  ]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const setEdit = (index) => {
    setInput(todos[index].todo);
    setEditIndex(index);
  };

  const addTodo = async () => {
    try {
      if(input.trim() !== ''){
        setTodos([...todos, {id:new Date(), todo:input}]);
        setInput('')
      }
    }catch (error){
      console.error(error.message);
    }
  }

  const updateTodo = async () => {
    try{
      if (input.trim() != '') {
        const updatedTodos = [...todos];
        updatedTodos[editIndex].todo = input;
        setTodos(updatedTodos);
        setEditIndex(-1);
        setInput('')
      }

    } catch(error) {
      console.error(error.message);

    }
  }

  const removeTodo = async (id) => {
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);

    // Eğer silinen todo şu an düzenlenmekte olan todo ise, editIndex ve input'u sıfırla
    if (editIndex !== -1 && todos[editIndex]?.id === id) {
      setEditIndex(-1);
      setInput('');
    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-custom-background bg-center bg-cover'>
      <div className='bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4'> 
        <h1 className = 'text-3xl font-bold text-center mb-4'>Todo List </h1>
        <div className='flex'>
          <input 
          type="text"
          placeholder='Add a todo'
          className='py-2 px-4 border rounded w-full focus:outline-none mr-2'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
          <button onClick= {editIndex === -1 ? addTodo : updateTodo} className='bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] rounded-full text-white py-2 py-4 hover: from-pink-100 hover:to-red-700'>
            
            {editIndex === -1 ? <FaPlus/> : < FaPencilAlt/>}
          </button>
    
        </div>

        

      </div>
      
      {
        todos.length > 0 && (
          <div className='bg-gray-100 p-6 rounded shadow-m w-full max-w-lg lg:w-1/4'>
          
          <ul>
            {todos.map((todo, index) => (
              <li key = {index} className='flex items-center justify-between bg-white p-3  rounded shadow-md mb-3'>
              <span className='text-lg'>{todo.todo}</span>
              <div>
              <button onClick={() => setEdit(index)} className="mr-2 p-2 bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] text-white rounded-full hover: from-pink-100 hover:to-red-700">
                <FaPencilAlt/>
              </button>
              <button onClick={() => removeTodo(todo.id)} className="mr-2 p-2 bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] text-white rounded-full hover: from-pink-100 hover:to-red-700">
                <FaTrash/>
              </button>
              </div>
            </li>
            ))}
            
          </ul>
        </div>
        )
      }
    </div>
  )
}

export default App
