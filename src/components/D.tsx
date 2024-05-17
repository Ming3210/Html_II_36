import React, { useContext } from 'react'
import { UseContext1 } from './UseContext'
interface Props{
    name:string
}


export default function D() {
    const getData = useContext(UseContext1)
  return (
    <div>
        <p>name : {getData}</p>
    </div>
  )
}
