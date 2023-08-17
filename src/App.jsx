import banner from "./assets/images.jpeg";

import ListaDeTareas from "./components/ListaDeTareas";

function App() {

  

  return (
    <div className=" bg-[#1F2937] h-auto flex flex-col items-center">
      <div className="mt-[40px] w-[584px] h-24">
        <img 
          src={banner}
          className="rounded-[15px] h-full w-full"
        />
      </div>
      <div className="w-[584px]  min-h-min bg-[#2cabc3] p-6 m-3 justify-center rounded-3xl">
        <h1 className=" text-white text-2xl justify-center flex font-semibold">My Tasks</h1>
        <ListaDeTareas />
      </div>
      
    </div>
    
  )
}

export default App;
