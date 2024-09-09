
import './App.css'

function App() {
  

  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-custom-background bg-center bg-cover'>
      <div className='bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4'> 
        <h1 className = 'text-3xl font-bold text-center mb-4'>Todo List </h1>
        <div className='flex'>
          <input type="text"
          placeholder='Add a todo'
          className='py-2 px-4 border rounded w-full focus:outline-none mr-2'

          />
          <button className='bg-gradient-to-r from-[rgba(244,114,182,0.1)] to-[rgba(219,39,119,0.1)] rounded-full text-white py-2 py-4'>
            
            Add
          </button>
    
        </div>

      </div>

    </div>
  )
}

export default App
