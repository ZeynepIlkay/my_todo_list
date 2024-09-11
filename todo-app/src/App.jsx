
import { useState } from 'react';
import './App.css'
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'; 

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' veya 'error'

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 2000); // 2 saniye boyunca göster
  };

  const setEdit = (index) => {
    setInput(todos[index].todo);
    setEditIndex(index);
  };

  const addTodo = async () => {
    try {
      if (input.trim() === '') {
        showMessage('Please enter something to do first!', 'error');
        return;
      }
      setTodos([...todos, { id: new Date(), todo: input, completed: false }]);
      setInput('');
      showMessage('Succesfully added!', 'success');
    }catch (error){
      console.error(error.message);
    }
  }

  const updateTodo = async () => {
    try {
      if (input.trim() === '') {
        showMessage('Edit field cannot be left blank!', 'error');
        return;
      }
      const updatedTodos = [...todos];
      updatedTodos[editIndex].todo = input;
      setTodos(updatedTodos);
      setEditIndex(-1);
      setInput('');
      showMessage('Updated successfully!', 'success');
    } catch (error) {
      console.error(error.message);
    }
  };

  

  const removeTodo = async (id) => {
    try {
      let filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);

      if (editIndex !== -1 && todos[editIndex]?.id === id) {
        setEditIndex(-1);
        setInput('');
      }

      showMessage('Successfully deleted!', 'success');
    } catch (error) {
      console.error(error.message);
    }
  }


  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    if (updatedTodos[index].completed) {
      showMessage(`"${updatedTodos[index].todo}" is complete!`, 'success');
    } else {
      setMessage('');
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-custom-background bg-center bg-cover '>
      <div className='bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4'> 
        <h1 className = 'text-3xl font-bold text-center mb-4'>Todo List </h1>
        <div className="flex space-y-2">
        <textarea
          rows="3"
          placeholder="Add a todo"
          className="py-2 px-4 border rounded w-full focus:outline-none mr-2 resize-none overflow-y-auto max-h-40"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex space-x-2">
          <button onClick={editIndex === -1 ? addTodo : updateTodo} className='bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] rounded-full text-white py-2 py-4 hover: from-pink-100 hover:to-red-700'>
                  
                  {editIndex === -1 ? <FaPlus/> : < FaPencilAlt/>}
          </button>
        </div>
      </div>


        

      </div>
      
      {
        todos.length > 0 && (
          <div className='bg-gray-100 p-6 rounded shadow-m w-full max-w-lg lg:w-1/4' >
          
        <ul>
          {todos.map((todo, index) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? 'line-through' : ''}`}
            >
              <div className="todo-text">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(index)}
                  className="mr-2"
                />
                <span className={`break-words ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.todo}
                </span>
              </div>
              <div className="button-container">
              {!todo.completed && (
                  <button
                    onClick={() => setEdit(index)}
                    className="p-2 bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] text-white rounded-full hover:from-pink-100 hover:to-red-700"
                  >
                    <FaPencilAlt />
                  </button>
                )}
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] text-white rounded-full hover:from-pink-100 hover:to-red-700 p-2"
                  
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Message display */}
        {message && (
          <div
            className={`p-4 rounded shadow-md w-full max-w-lg lg:w-1/4 text-center break-words ${
              messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {message}
          </div>
        )}

        </div>
        
        )
      }
      


    </div>
  )
}

export default App
