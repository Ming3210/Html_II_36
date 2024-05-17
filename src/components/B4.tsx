import React, { useEffect, useRef }  from 'react'


export default function 
B4() {
    const focusInput = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        focusInput.current?.focus()
      },[])
  return (
    <div>
        <h1>B4</h1>
        <input ref={focusInput} type="text" placeholder='Focus me'/>
    </div>
  )
}
