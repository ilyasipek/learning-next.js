"use client"

import { log } from "console"
import { useEffect, useState } from "react"

export default function Home() {
  const [x, setX] = useState(0)


 useEffect(() => {
  console.log(`rendred ${x}`);
 }, [x])

  return (
   <>
    <h1 className="text-red-400 m-10 bg-blue">
      Ilyas ipek {x}
    </h1>

    <button onClick={
      () => {
        setX(currentX => currentX + 1)
    }}>
      Count + 
    </button>
   </>
  )
}
