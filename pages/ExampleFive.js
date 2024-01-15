import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// we want to set up a counter
//after every 1 second the number increases by 1
// we want to display that number on screen as it increases

export default function ExampleFive() {
   const [count, setCount] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
        setCount(count + 1)
    }, 1000)
   
    return () => clearInterval(interval);
   }, [count])
    return (
        <>
        <Header/>
        <main>
        <div style={{
            display: "flex",
            margin: "auto",
            textAlign: "center"
        }}>
            <h2>number counter</h2>
            <h3> example using setInterval</h3>
            <div>{count}</div>
        </div>
        </main>
        <Footer/>
        </>
        )
    }