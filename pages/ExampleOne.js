import {useEffect, useState} from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default function ExampleOne() {
    const [number, setNumber] = useState(0);
    // usually this casues an infinite loop, so best to not do this to avoid crashes. code on pages will run 2 times. once to render what we want to display
    //another is to render strict mode to find any bugs
    useEffect(() => {
        console.log(number);
    })

    return (
        <>
            <Header/>
            <main>
                <h1>Example</h1>
                <div>infinite loop</div>
                {number}
            </main>
            <Footer/>
        </>
    )
}