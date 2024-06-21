import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);
    console.log("Component is rendered");
    console.log(`count = ${count}`);

    let inCount = ()=>{
        setCount(count+1);
        console.log(`iside incCount, count =${count}`);
    };

    return (
        <div>
        <h3>Count={count}</h3>
        <button onClick={inCount}>Increase count!</button>
        </div>
    );
}