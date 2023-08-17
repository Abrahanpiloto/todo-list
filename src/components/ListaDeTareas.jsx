import TaskForm from "./TaskForm";
import { useState } from "react";
import Task from "./Task";

function ListaDeTareas () {

  const [tareas, setTareas] = useState([]);
  
  const agregarTarea = tarea => {
    
    if (tarea.text.trim()) {
      tarea.text = tarea.text.trim();

      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      
    }
    console.log(tarea)
  }

  return (
    <>
      <TaskForm onSubmit={agregarTarea}/>
      <div className="flex flex-wrap justify-center mt-4">
        {
          tareas.map((tarea) => 
            <Task 
              key={tarea.id}
              id={tarea.id}
              text={tarea.text}
              complete={tarea.complete}
            />
          )
        }
      </div>
    </>
  )
}

export default ListaDeTareas;