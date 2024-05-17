import React, { useState } from 'react'

export default function B7() {
    const [currentValue,setCurrentValue] = useState<number>(0)
    const [previousValue,setPreviousValue] = useState<number>(0)
    const handleChange = () => {
        setPreviousValue(currentValue)
        setCurrentValue(currentValue+1)
    }
  return (
    <div>
        <h1>B7</h1>
        <p>Giá trị trc :{previousValue}</p>
        <p>Giá trị hiện tại :{currentValue}</p>
        <button onClick={handleChange}>Tăng</button>
    </div>
  )
}
