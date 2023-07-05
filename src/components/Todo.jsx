import React from 'react'

const Todo = ({ todo }) => {
  return (
    <div className=' ring-1 ring-red-500 rounded-sm mb-4 flex justify-between p-4 hover:cursor-pointer hover:scale-[1.02]'>
        <div className=' flex items-center gap-2'>
        <p>1.</p>
        <p> {todo} </p>
        </div>
      
        
        <div className=' flex items-center gap-4'>
        <button>Edit</button>
        <button>Delete</button>
        </div>
       

    </div>
  )
}

export default Todo