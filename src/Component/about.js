import React, { useContext } from 'react'
import {GlobalInfo} from "../App";

const About = () => { 
    const data = useContext(GlobalInfo);
    console.log(222222222,data)
    const day = "Monday";
    return (
        <>
            <div>
                <h1 style={{color:data.appColor}}>Super Child Component</h1>
                <button onClick={()=>data.getDay(day)}>Get Day</button>
            </div>
        </>
    )

}

export default About;