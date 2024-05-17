import React, { useEffect, useState } from 'react'

export default function B1() {
    const [title,setTitle]= useState<string>("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }
    useEffect(()=>{
        document.title = title;
    })
  return (
    <div>
        <h1>B1</h1>
        <input onChange={handleChange} type="text" placeholder='Thay đổi tiêu đề'/>
    </div>
  )
}
