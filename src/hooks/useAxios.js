import { useEffect, useState } from "react";

export const useAxios = (url) => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {

      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    useEffect(() => {
        fetchPosts()
    },[]);
        
    

    return{
        data,
        error,
        refetch : fetchPosts
    }
}