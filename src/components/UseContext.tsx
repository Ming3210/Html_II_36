import React, { createContext, useState } from 'react'
import A from './A'
export const UseContext1 = createContext("")

export default function UseContext() {
    const [name,setName] = useState<string>("minh thu")
  return (
    <div>UseContext
        {/*
        Đây là 1 hook sinh ra giải quyết vđ gì?
        Dùng như thế nào ?

        */}
    <UseContext1.Provider value={name}><A></A></UseContext1.Provider>
    </div>
  )
}
