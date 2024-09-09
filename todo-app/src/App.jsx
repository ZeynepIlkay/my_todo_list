
import { useState } from 'react';
import './App.css'
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'; 

function App() {
  const [todos, setTodos] = useState([
    {id: 1, todo: 'Learn React'}
  ]);
  const [input, setInput] = useState('');

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
          <button onClick= {addTodo} className='bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] rounded-full text-white py-2 py-4 hover: from-pink-100 hover:to-red-700'>
            
            <FaPlus/>
          </button>
    
        </div>

        <div className='bg-gray-100 p-6 rounded shadow-m w-full max-w-lg lg:w-1/4'>
          
          <ul>
            {todos.map((todo, index) => (
              <li key = {index} className='flex items-center justify-between bg-white p-3  rounded shadow-md mb-3'>
              <span className='text-lg'>todo.todo</span>
              <div>
              <button className="mr-2 p-2 bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] text-white rounded-full hover: from-pink-100 hover:to-red-700"><FaPencilAlt/></button>
              <button className="mr-2 p-2 bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] text-white rounded-full hover: from-pink-100 hover:to-red-700"><FaTrash/></button>
              </div>
            </li>
            ))}
            
          </ul>
        </div>

      </div>
      
      {
        todos.length > 0 && (
          <div className='bg-gray-100 p-6 rounded shadow-m w-full max-w-lg lg:w-1/4'>
          
          <ul>
            {todos.map((todo, index) => (
              <li key = {index} className='flex items-center justify-between bg-white p-3  rounded shadow-md mb-3'>
              <span className='text-lg'>todo.todo</span>
              <div>
              <button className="mr-2 p-2 bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] text-white rounded-full hover: from-pink-100 hover:to-red-700"><FaPencilAlt/></button>
              <button className="mr-2 p-2 bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] text-white rounded-full hover: from-pink-100 hover:to-red-700"><FaTrash/></button>
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
