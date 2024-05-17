import React, { useEffect, useState } from 'react'

export default function B9() {
    const [count,setCount] = useState<number>(0)
    useEffect(() =>{
        setInterval(() => {
            setCount(count+1)
        }, 1000);
    })
  return (
    <div>
        <h1>B9</h1>
        <p>Thời gian đã trôi qua {count}</p>
    </div>
  )
}
