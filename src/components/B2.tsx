import React, { useEffect, useState } from 'react'

export default function B2() {
    const [title,setTitle]= useState<string>("")
    const [count,setCount]= useState<number>(0)
    const handleClick = (e:any)=>{
        setTitle(e.target.value)
        setCount(count+1)
    }
    useEffect(()=>{
        document.title = count.toString();
    })
  return (
    <div>
        <h1>B2</h1>
        <button onClick={handleClick}>Click {count} lần</button>
    </div>
  )
}
