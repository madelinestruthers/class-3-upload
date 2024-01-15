import { useEffect} from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExampleTwo() {
    useEffect(() => {
        console.log("run");
    }, [])
    //the [] makes sure the useEffect only runs once
    return (
        <>
        <Header/>
        <main>

        </main>
        <Footer/>
        </>
    )
}