import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState<number>(0)
    const [numbers,setNumbers] = useState<number[]>([])
    const [active,setActive] = useState<boolean>(true)
    useEffect(()=>{
        console.log("Đang gọi useEffect");
        
    },[active])
   const handleClick = ()=>{
    setCount(count+1)
    setActive(!active)
    /*
    Khi mỗi lần click thì sẽ thêm 1 số bất kì
    */

//    let ramdomNumber = Math.floor(Math.random()*100)
//     setNumbers([...numbers,ramdomNumber])
//     console.log(numbers);
   }
    console.log("re-render");
    
  return (
    <div>UseEffect
        {/*
        Tất cả các hook đều là những function
        Khi dùng p import để dùng
        useEffect nhận vào 2 đối số
        1. Là callback (arrow function)
        2. [] || [deps]
        => useEffect sẽ có 3 cách dùng

        C1: Chỉ chứa callback là 1 cái arrow function
        Khi component đc mount vào DOM thì useEffect đc gọi
        Mỗi lần component đc re-render thì nó cx đc gọi

        C2: Chứa callback và 1 cái mảng rỗng
        Khi component đc mount vào DOM thì useEffect đc gọi
        Khi mỗi lần component re-render thì sẽ ko đc gọi lại

        C3: Chứa call back và [dependency]
        Khi dependency thay đổi thì useEffect đc gọi

        useEffect là phương thức thg dùng để xử lí các tác vụ như callAPI để lấy dữ liệu
        - Thường dùng để xử lí các side Effect
        - componentDidMount đc gọi khi nào? 
        Sau khi component đc render lần đầu

        */}
        <p>Giá trị count {count}</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
