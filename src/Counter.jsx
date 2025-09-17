import { useState } from "react";
function Counter() {
    const [count, setCount]=useState(0);
    return(
        <div className="flex flex-col justify-center items-center gap-3">
            <h2 className=" font-mono text-6xl font-extrabold mb-6 text-gray-800 pb-8"> Count : {count}    </h2>
        <div className="flex gap-4 mb-6 text-xl">    
            <button onClick={()=>setCount(count+1)} className="font-mono bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition">Increment</button>
            <button onClick={()=>setCount(count-1)} className="font-mono bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition">Decrement</button>
            <button onClick={()=>setCount(0)} className="font-mono bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition">Reset</button>
        </div>
  
  </div>
    )
}
export default Counter;