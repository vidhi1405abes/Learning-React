import { useRouteError } from "react-router-dom";
const Error=()=>{
    const error=useRouteError();
    console.log(error);
    
    return(
        <div>
            <h1>Oops! Something went wrong</h1>
            <h2>{error.data}</h2>
        </div>
    )
}
export default Error;