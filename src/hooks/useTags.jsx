import axios from "axios";
import { useEffect, useState } from "react";


export function useTags(url){
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    axios.get(url)
    .then((response)=>{
      setTags(response.data)
    })
    .catch((err)=> console.log(err))
    .finally(()=>setLoading(false))
  },[])

  return { tags, setTags, loading }
}