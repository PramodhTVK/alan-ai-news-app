import axios from "axios";

export function getNews(){
    const API_KEY=`d2b39452dcb14f04a40548851c61f8d1`;
    const API_Endpoint=`https://newsapi.org/v2/top-headlines?sources=bbc-news`;
   
        axios.get(`${API_Endpoint}&apiKey=${API_KEY}`)
    
}