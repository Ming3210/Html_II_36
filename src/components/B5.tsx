import { useState } from "react";

export default function B5() {
    const [time, setTime] = useState<string>("");
  useState(()=>{
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
  })
  
  return (
    <div>
        <h1>B5</h1>
        <p>Thời gian: {time}</p>
    </div>
  );
};
  
