import { useMemo, useState } from "react"

const App = () => {

  const [add, setadd] = useState(0);
   const [sub, setsub] = useState(99)

 const product = useMemo(() => {      // befaltu ka render na ho isliye useMemo ka use krte h
  console.log("product function called!");
  
  return add*2;
 },[add]);  //  ye ek dependency array h  means jv add m change ho tbhi ye fuction run kro 

  return (
    <div className=" py-10 px-[10%] bg-gray-800 h-screen w-screen text-white font-thin">

      <h1 className="text-6xl mt-10 mb-5">{product}</h1>

      <div>
         <button onClick={() => setadd(add+1)} className="font-black p-2 bg-pink-400 text-5xl">+</button>
         <span className="text-5xl ml-5 font-black">{add}</span>
         <br/>
         <br/>

      <button onClick={() => setsub(sub-1)} className="font-black p-2 bg-red-600 text-5xl">-</button>
      <span className="text-5xl ml-5 font-black">{sub}</span>
      </div>

    </div>
  )
}

export default App