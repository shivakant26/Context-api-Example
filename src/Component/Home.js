import React, { useContext } from 'react'
import {GlobalInfo} from "../App";
import About from './about';

const Home = () => { 
    // here use Context to recive data from Parent
    const data = useContext(GlobalInfo);

    // create hard coded list from child component
    const record = [
        {title:"ac" ,discription:"data01"},
        {title:"acd" ,discription:"data02"},
        {title:"acc" ,discription:"data03"},
        {title:"acw" ,discription:"data04"},

    ]
    return (
        <>
            <div>
                <h1 style={{color:data.appColor}}>Home Component</h1>
                {/* here get getList function from usecontextApi and bind data to send it. */}
                <button onClick={()=>data.getList(record)}>send data to parent</button>
            </div>
            <About />
        </>
    )

}

export default Home;