import { Metadata } from "next"

export const metadata:Metadata ={
    title :{
        absolute:"Blog"
    },
    description:"This is a about page content"
}

export default function About(){
    return <h1>About</h1>
}