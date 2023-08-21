import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';


const Task = ({ id, text, complete, completarTarea, eliminarTarea }) => {
  return (
    <div className={complete ? "task-container complete" : "task-container"}>
      <div className='w-full h-full text-xl flex items-center overflow-anywhere text-white hover:cursor-pointer'
        onClick={() => completarTarea(id)}
      >
        {text}      
      </div>
      <div className='flex items-center border-white justify-center m-1 text-white'
        onClick={() => eliminarTarea(id)}
      >
      <AiOutlineDelete
        className='cursor-pointer'
      />
      </div>
    </div>
  );
}

export default Task;