import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass ='';
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numberAllowed){
      char += '0123456789'
    }
    if(CharAllowed){
      char += '!@#$%^&*()_+'
    }
    for(let i=0; i<length; i++){
      pass += char.charAt(Math.floor(Math.random() * char.length))
    }
    setPassword(pass)
  },[numberAllowed, CharAllowed, length])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(passwordRef.current.value)
    console.log(passwordRef)
    passwordRef.current.select()
  }

  useEffect(() => {
    generatePassword()
  },[CharAllowed,numberAllowed,length])

  return (
    <div className=" relative w-full h-screen flex flex-col items-center bg-zinc-800">
      <div className=' absolute w-full max-w-md mx-auto shadow-md rounded-lg px-10 py-8 my-8 bg-zinc-950 text-orange-500'>
        <h1 className='text-white text-center my-6'>Password Genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          value={password}
          ref={passwordRef}
          />
          <button 
          onClick={copyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8} 
            max={100} 
            value={length} 
            onChange={(e)=>setLength(e.target.value)}
            className='cursor-pointer'
            />
            <label htmlFor='lable'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={()=>setNumberAllowed((prev)=>!prev)}
            name="" id="" 
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={CharAllowed}
            onChange={()=>setCharAllowed((prev)=>!prev)}
            name="" id="" 
            />
            <label htmlFor="charAllowed">Character's</label>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App
