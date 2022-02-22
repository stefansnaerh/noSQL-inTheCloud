import React from "react"
import {useEffect, useState} from "react"

export default function Test () {

    const [about, setAbout] = useState("");
    

    useEffect(()=>{
        const getAbout = async()=>{
            const response = await fetch("http://localhost:5001")
            const data = await response.json();


            setAbout(data[1].name)
        }

        getAbout();
        
    })




    return (
        <div>
        <h1 className="name">My name is {about}</h1>
        </div>
    )

}