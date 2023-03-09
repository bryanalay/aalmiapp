import axios from "axios";
import { useEffect, useState } from "react";
import { getLocalstorage } from "../data/localStorage";


export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tk, setTk] = useState(null);
  //"https://almiapitest.herokuapp.com/api/v1/posts"

  useEffect(() => {
    setTk(getLocalstorage().token);
    console.log("setTk useEffect");
  }, []);

  useEffect(() => {
    setLoading(true);
    if(tk){
        axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${tk}`,
          },
        })
        .then((response) => {
            setData(response.data)
            console.log('este es el response del useFetch');
        })
        .catch((err) => {
          console.log('error dentro del effect de useFetch',err);
        })
        .finally(() => setLoading(false));
    }
  }, [tk]);

  return { data, setData, loading };
}
