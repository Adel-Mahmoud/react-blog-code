import './loading.css'
import { useLoading } from "../../contexts/LoadingContext";

function Loading() {
    const { isLoading } = useLoading();
    if (!isLoading) return null;

    return ( 
        <>
         <div className="dotted-loader"></div>
        </>
     );
}

export default Loading;