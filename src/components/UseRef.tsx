import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [count,setCount] = useState<number>(0)
    const useRef1 = useRef(0)
    const focusInput = useRef<HTMLInputElement>(null)
    console.log("12121",useRef1);
    
    let index = 0
    const handleClick = () => {
        index++
        setCount(count+1)
        useRef1.current++
    }
    console.log("Giá trị index",useRef1.current);
    useEffect(()=>{
      focusInput.current?.focus()
    },[])
  return (
    <div>useRef <br />
        {/*
         Là hook đc react cung cấp 
            Cách dùng : import và dùng
            Kết quả trả về của thk useRef là 1 đối tượng và trong đối tượng đó là 1 thuộc tính mặc định là current

            Nó có 2 cách dùng chính
            1. Khi mỗi lần component re-render thì nó ko tạo ra 1 refernentype mà vx giữ nguyên giá trị ban đầu
            2. Giúp mặc định focus vào ô input mà mình muốn
        */}
        <label htmlFor="">Nhập tên</label>
        <input ref={focusInput} type="text"/> <br />
        <label htmlFor="">Email</label>
        <input  type="text" />
        <p>{count}</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
