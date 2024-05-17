import React, { useEffect, useState } from 'react'

export default function B11() {
    const [inputValue,setInputValue] =useState<string>()
    const [imageUrl,setImageUrl] = useState<string>("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {files} = e.target
        const selectedFile = files as FileList
        
        setInputValue(selectedFile?.[0].name)
    }
    
  return (
    <div>
        <h1>B11</h1>
        <input type="file" onChange={handleChange}/>
        <img src="" alt="" />
    </div>
  )
}
