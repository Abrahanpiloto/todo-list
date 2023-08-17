import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {

  const [input, setInput] = useState("");

  //funcion que se ejecuta al escribir en el input
  const manejarCambio = e => {
    setInput(e.target.value);
    
  }

  //funcion que se ejecuta al dar click en el button Add Task
  const manejarEnvio = e => {
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      text: input,
      complete: false
    }
    // onSubmit es una funcion que toma la tareaNueva como argumento y la envia a la lista de tareas
    props.onSubmit(tareaNueva);
  }

  return (
    <form className='flex flex-wrap items-center justify-center mt-4'
      onSubmit={manejarEnvio}
    >
      <input 
        className='w-[350px] border-blue-600 text-lg bg-white p-[15px] rounded-l border-2  outline-none'
        type='text'
        placeholder='write a task'
        name='text'
        onChange={manejarCambio}
      />
      <button className=' p-[17px] rounded-r text-lg cursor-pointer outline-none bg-blue-600 text-white hover:bg-blue-800'>
        Add Task
      </button>
    </form>
  )
}

export default TaskForm;