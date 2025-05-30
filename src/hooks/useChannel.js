import { useEffect, useState } from "react";
import { getChannels } from "../apis/article";
function useChannnel(){
     const [channels, setChannels] = useState([])
        useEffect(()=>{
            async function getList(){
               const res= await getChannels()
               setChannels(res.data.channels)
            }
            getList()
        },[])
        return {
            channels
        }
}
export {useChannnel}