import { useState } from "react";
const User=(props)=>{
    const [count,setCount]=useState(0);
    return (
        <div className="infoCard">
            
            <h1>{props.name}</h1>
            <h1 className="name">Vidhi</h1>
            <h3 className="location">Meerut</h3>
            <h4 className="linkedIn">wcjdcdc</h4>
        </div>
    )
}
export default User;