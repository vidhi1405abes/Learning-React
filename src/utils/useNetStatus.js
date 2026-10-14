import { useEffect, useState } from "react";

const useNetStatus=()=>{
    const [netStatus,setNetStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setNetStatus(false);
        });
        window.addEventListener("online",()=>{
            setNetStatus(false);
        });
    },[]);
    return netStatus;
}
export default useNetStatus;