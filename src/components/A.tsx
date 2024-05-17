import React from 'react'
import B from './B'
interface Props{
    name:string
}

export default function A() {
  return (
    <div>A
        <B></B>
    </div>
  )
}
