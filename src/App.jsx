import { useState } from 'react'

function App() {
  const [color, setColor] = useState("red")

  return (
    
    <div className="flex w-full h-screen duration-500 justify-center items-center text-6xl uppercase" style={{backgroundColor : color}}>
      {color}
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white border-2 border-black px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='text-xl outline-none border-black border-2 px-5 py-1 rounded-full text-black' style={{backgroundColor: "red"}}>
            Red
          </button>
          <button onClick={()=>setColor("olive")} className='text-xl outline-none border-black border-2 px-5 py-1 rounded-full text-black' style={{backgroundColor: "olive"}}>
            Olive
          </button>
          <button onClick={()=>setColor("gold")} className='text-xl outline-none border-black border-2 px-5 py-1 rounded-full text-black' style={{backgroundColor: "gold"}}>
            Gold
          </button>
          <button onClick={()=>setColor("purple")} className='text-xl outline-none border-black border-2 px-5 py-1 rounded-full text-black' style={{backgroundColor: "purple"}}>
            Purple
          </button>
          <button onClick={()=>setColor("gray")} className='text-xl outline-none border-black border-2 px-5 py-1 rounded-full text-black' style={{backgroundColor: "gray"}}>
            Gray
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
